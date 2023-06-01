import styled from 'styled-components';
import { PlayerBox } from '../boxes/PlayerBox';

const StarterStyled = styled(PlayerBox)`
    border: ${props => props.selected ? '2px white' : '1px gray'} solid;
    justify-content: center;
`

export function Starter({ player, selected, replacement }){
    return(
        <StarterStyled 
            selected={selected == player ? true : false}
            onClick={replacement}
        >
            {player.nick}
        </StarterStyled>
    )
}