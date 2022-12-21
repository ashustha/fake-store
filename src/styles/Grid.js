import styled from "styled-components";

export const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(${({column}) => column || 3}, 1fr);
    gap: ${({gap}) => gap || 32}px;
`
