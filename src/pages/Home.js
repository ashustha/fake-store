import React from 'react'
import ProductGroup from '../components/Product-group/ProductGroup';
import { ContainerStyled } from '../styles/Container';

function Home() {

  return (
    <>
    <ContainerStyled>
      <ProductGroup />
    </ContainerStyled>
    </>
  )
}

export default Home
