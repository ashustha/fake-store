import React from "react";
import useFetch from "../useFetch";
import ReactLoading from "react-loading";
import { ContainerStyled } from "../styles/Container";
import { useEffect, useState } from "react";
import {ProductById} from "../components/Product-card/Product";
import { GridStyled } from "../styles/Grid";

function Cart() {
const [cartData, setCartData] = useState([]);
const [productId, setProductIds] = useState([]);
const [newIds, setIds] = useState([]);
  const {
    data: cartItems,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/carts/user/${1}`);

  useEffect(() => {
    setCartData(cartItems)
    setProductIds(cartData?.map((item) => (item.products)?.map((product) => product.productId)))
    
    if(productId?.length>1){
        let arrays = []
        for (let index = 0; index < productId.length; index++) {
                const arrayVal = productId[index]
                arrays.push(...arrayVal)
        }
        setIds(arrays);
    }

    console.log(newIds);

  }, [cartItems,cartData]);

  if (loading) return <ReactLoading type="cylon" color="#000" />;
  if (error) console.log(error);

  return (
    <ContainerStyled>
        {cartData?.map((outerItem) => (
        <div key={outerItem.id}>
          {outerItem.date}
          <GridStyled column={5} gap={20}>
          {outerItem.products.map((innerItem, index) => (
              <ProductById key={index} productId={innerItem.productId} />
              ))}
              </GridStyled>
        </div>
      ))}
    </ContainerStyled>
  );
}

export default Cart;
