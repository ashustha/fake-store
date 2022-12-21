import styled from "styled-components";
import theme from "../../styles/Theme";

 export  const CategoriesStyled = styled.div`
    padding: 10px 0;
    background-color: ${theme.colors.primary};
    color: #ffffff;
`
export const CategoriesList = styled.ul`
    display: flex;
    gap: 20px;
    li{
        padding: 8px 0px;
            a{
                text-transform: capitalize;
                font-size: 14px;
                color: #ffffff;
                &:hover{
                    color: black;
                }
            }
        }
`
