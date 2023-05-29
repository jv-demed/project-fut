import styled from 'styled-components';

const PlayerStyled = styled.div`
    align-items: center;
    border: ${props => props.selected ? '2px white' : '1px gray'} solid;
    background-color: #545668;
    border-radius: 2px;
    display: flex;
    height: 35px;
    padding: 0 5px;
`

export function Player({ player, selected, setSelected }){
    return(
        <PlayerStyled 
            selected={selected == player ? true : false}
            onClick={() => setSelected(player)}
        >
            {player.nick}
        </PlayerStyled>
    )
}