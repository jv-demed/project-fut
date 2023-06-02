import styled from 'styled-components';

const MiniInfoStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2px;
    span{
        font-size: 0.8rem;
    }
`

export function MiniInfo({ info, stat }){
    return(
        <MiniInfoStyled>
            <span>{info}:</span>
            <span>{stat}</span>
        </MiniInfoStyled>
    )
}