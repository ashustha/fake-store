import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../useFetch';
import ReactLoading from 'react-loading';
import { ContainerStyled } from '../../styles/Container';
import { ProductDetailStyled,ProductImage,ProductBody } from './ProductDetail.styled';
import useAddToCart from '../../customHooks/useAddToCart';
import {ImSpinner} from 'react-icons/im'

function ProductDetail() {
  const params =  useParams() // it returns an object with key value pair
  const productId = params.productId
  const {data : product, loading, error} = useFetch(`https://fakestoreapi.com/products/${productId}`);
  const [cartError, cartLoading, success, addItem] = useAddToCart('https://fakestoreapi.com/carts');


  if(loading) return <ReactLoading type='cylon' color='#000' />
  if(error) console.log(error);

  function handleClick() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

    addItem({
      userId : 5,
      date : currentDate,
      products:[
        {
          productId: Number(productId),
          quantity:1
        }
      ]
    });
  }


  return (
    <ContainerStyled>
      <ProductDetailStyled>
        <ProductImage>
          <img src={product?.image} alt={product?.title} />
        </ProductImage>
        <ProductBody>
          <h2>{product?.title}</h2>
          <p>{product?.description}</p>
          <p>${product?.price}</p>

          <button onClick={handleClick} type="button">Add to Cart</button>
          {cartLoading ? <ImSpinner /> : ''}
          <p>{cartError?.message}</p>
          <p>{success ? 'Successfully added to cart' : ''}</p>
        </ProductBody>
      </ProductDetailStyled>
    </ContainerStyled>
  )
}

export default ProductDetail
