import React from 'react'
import useFetch from '../useFetch';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import { ContainerStyled } from '../styles/Container';
import ProductGroup from '../components/Product-group/ProductGroup';

function ProductsByCategory() {
    const params =  useParams() // it returns an object with key value pair
    const categoryName = params?.category
    return (
        <ContainerStyled>
            <ProductGroup category={categoryName} />
        </ContainerStyled>
    )
}

export default ProductsByCategory
