import React from 'react'
import { GridStyled } from '../../styles/Grid';
import useFetch from '../../useFetch';
import ReactLoading from 'react-loading';
import Product from '../Product-card/Product';
import { ProductGroupWrapper } from './ProductGroup.styled';


function ProductGroup({category}) {
    

    const {data:products, loading, error} = useFetch(`https://fakestoreapi.com/products/${category ? `/category/${category}` : '' }`);

    if(loading) return <ReactLoading type='cylon' color='#000' />
    if(error) console.log(error);

  return (
    <ProductGroupWrapper>
        <GridStyled column={5} gap={20}>
            { products?.map((product, index) => (<Product key={index} product = {product} />)) } 
        </GridStyled>
    </ProductGroupWrapper>
  )
}

export default ProductGroup
