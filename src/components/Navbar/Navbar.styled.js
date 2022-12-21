import styled from "styled-components";
import { ContainerStyled } from "../../styles/Container";
import theme from "../../styles/Theme";

export const NavbarStyled = styled.div`
    padding: 20px 0;
    display: flex;
    a{
        text-decoration: none;
        color: #000000;
        font-size: 14px;
        padding: 15px;
        position: relative;
        font-weight: bold;
        &.active,
        &:hover{
            color: ${theme.colors.primary};;
        }
    }
`
export const NavbarBrand = styled.div`
    padding: 5px;
    display: flex;
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 16px;
`
export const NavbarContainer = styled(ContainerStyled)`
    ${ContainerStyled};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
