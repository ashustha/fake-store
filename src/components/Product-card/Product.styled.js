import styled from "styled-components";
import { SButton } from "../../styles/Button.styled";

export const  ProductStyled = styled.div`
    border-radius: 4px;
    padding: 10px;
    background-color: #ffffff;
    max-width: 300px;
    display: inline-block;
    padding: 25px;
    border: 1px solid #ecf0f1;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    
    figure{
        margin-bottom: 20px;
        padding: 20px;
        img{
            object-fit: contain;
            height: 225px;
            width: 100%;
            transition: all 0.5s;
        }
    }
    header{
        h2{
            font-size: 14px;
            font-weight: 300;
            line-height: 1.5;
        }
        .price{
            position: absolute;
            top: 13px;
            background-color: #2ecc71;
            color: white;
            right: 0;
            padding: 5px 15px;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
            font-weight: 300;
            font-size: 16px;
        }
    }

    &:hover{
        figure{
            img{
                transform: scale(1.2);
            }
        }
        ${SButton}{
            display: block;
        }
    }

    ${SButton}{
        position: absolute;
        bottom: 20px;
        right: 0;
        left: 0;
        margin: 0 auto;
        display: inline-block;
        width: 50%;
        display:none;
        transition: all 0.3s;
    }

`
