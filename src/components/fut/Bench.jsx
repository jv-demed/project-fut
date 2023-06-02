import styled from 'styled-components';
import { PlayerBox } from '../boxes/PlayerBox';

const BenchStyled = styled(PlayerBox)`
    border: ${props => props.selected ? '2px white' : '1px gray'} solid;
    justify-content: center;
    min-width: 80px;
    padding: 0 10px;
`

export function Bench({ player, selected, replacement }){
    return(
        <BenchStyled 
            selected={selected == player ? true : false}
            onClick={replacement}
        >
            {player.nick}
        </BenchStyled>
    )
}