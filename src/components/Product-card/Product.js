import React from "react";
import { Link } from "react-router-dom";
import { ProductStyled } from "./Product.styled";
import { SButton } from "../../styles/Button.styled";
import useFetch from "../../useFetch";
import { useState, useEffect } from "react";
import ReactLoading from 'react-loading';
import useAddToCart from "../../customHooks/useAddToCart";
import {ImSpinner} from 'react-icons/im'
import {BsCartCheckFill} from 'react-icons/bs'



function Product({ product }) {

  const [cartError, cartLoading, success, addItem] = useAddToCart('https://fakestoreapi.com/carts');

  console.log(success);
  console.log(cartLoading);


  function handleClick(id) {
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
          productId: id,
          quantity: 1
        }
      ]
    });
  }

  return (
    <ProductStyled>
      <Link to={`/productDetail/${product?.id}`}>
        <figure>
          <img src={product?.image} alt={product?.title} />
        </figure>
        <header>
          <h2>{product?.title}</h2>
          <h3 className="price">${product?.price}</h3>
        </header>
        </Link>
        <SButton onClick={() => handleClick(product.id)}>Add to cart</SButton>
        {cartLoading ? <ImSpinner /> : ''}
        <p>{cartError?.message}</p>
        {success ? <BsCartCheckFill /> : ''}

    </ProductStyled>
  );
}

export function ProductById({ productId }) {

  const [product, setProduct] = useState([]);

  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  
  useEffect(() => {
    setProduct(data);
    console.log(product);
  }, [data, product]);

  
  if(error) console.log(error);

  return (
    <ProductStyled>
        {
          loading ?  <ReactLoading type='cylon' color='#000' /> : ''
          
        }
      <Link to={`/productDetail/${product?.id}`}>
        <figure>
          <img src={product?.image} alt={product?.title} />
        </figure>
        <header>
          <h2>{product?.title}</h2>
          <h3 className="price">${product?.price}</h3>
        </header>
      </Link>
    </ProductStyled>
  );
}

export default Product;
