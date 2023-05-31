import styled from 'styled-components';
import { PlayerBox } from '../boxes/PlayerBox';

const PlayerStyled = styled(PlayerBox)`
    border: ${props => props.selected ? '2px white' : '1px gray'} solid;
    justify-content: center;
`

export function Player({ player, selected, replacement }){
    return(
        <PlayerStyled 
            selected={selected == player ? true : false}
            onClick={() => replacement(player)}
        >
            <span>{player.nick}</span>
        </PlayerStyled>
    )
}