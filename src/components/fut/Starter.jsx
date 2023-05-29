import styled from 'styled-components';
import { useState } from 'react';

const StarterStyled = styled.div`
    align-items: center;
    border: ${props => props.selected ? '2px white' : '1px gray'} solid;
    background-color: #545668;
    border-radius: 2px;
    display: flex;
    height: 35px;
    padding: 0 5px;
`

export function Starter({ player, selected, setSelected }){
    return(
        <StarterStyled 
            // selected={selected == player ? true : false}
            // onClick={() => {
            //     if(!selected){
            //         setSelected(player)
            //     }else{
            //         console.log('oi')
            //     }
            // }}
        >
            {player.nick}
        </StarterStyled>
    )
}