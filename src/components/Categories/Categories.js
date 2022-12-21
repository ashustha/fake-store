import React from 'react'
import useFetch from '../../useFetch';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { ContainerStyled } from '../../styles/Container';
import { CategoriesStyled, CategoriesList } from './Categories.styled';


function Categories() {

    const {data : categories, loading, error} = useFetch(`https://fakestoreapi.com/products/categories`);
    if(loading) return <ReactLoading type='cylon' color='#000' />
    if(error) console.log(error);
    return (
        <CategoriesStyled>
            <ContainerStyled>
                <CategoriesList>
                    {
                        categories?.map((category,index) => (<li key={index}><Link  to={`products-by-category/${category}`}>{category}</Link></li>))
                    }
                </CategoriesList>
            </ContainerStyled>
        </CategoriesStyled>
    )
}

export default Categories
