import styled from 'styled-components';

const StatsIconStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2px;
    span{
        font-size: 0.8rem;
    }
`

export function StatsIcon({ stat, Icon }){
    return(
        <StatsIconStyled>
            <Icon />
            <span>{stat}</span>
        </StatsIconStyled>
    )
}