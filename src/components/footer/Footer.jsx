import styled from 'styled-components';

const FooterStyled = styled.footer`
    align-items: center;
    background-color: black;
    display: flex;
    height: 50px;
    justify-content: center;
`

export function Footer(){
    return(
        <FooterStyled>
            <span>CamelsCorp</span>
        </FooterStyled>
    )
}