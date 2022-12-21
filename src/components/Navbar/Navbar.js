import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarStyled, NavbarBrand, Title, NavbarContainer } from './Navbar.styled'
import { AiFillAccountBook, AiOutlineShoppingCart } from "react-icons/ai"
import CartItems from '../CartItems'

function Navbar() {
  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavbarBrand>
          <AiFillAccountBook /> <Title>shophub</Title>
        </NavbarBrand>
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>

        <NavLink to ='/cart'><AiOutlineShoppingCart /> <CartItems /> </NavLink>
        
      </NavbarContainer>
    </NavbarStyled>
  )
}

export default Navbar
