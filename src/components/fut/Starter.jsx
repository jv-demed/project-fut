import styled from 'styled-components';
import { PlayerBox } from '../boxes/PlayerBox';
import { useEffect, useState } from 'react';
import { getRecordById } from '../../services/supabaseService';

const StarterStyled = styled(PlayerBox)`
    border: ${props => props.selected ? '2px white' : '1px gray'} solid;
    gap: 5px;
    justify-content: center;
    .gk{
        font-size: 0.8rem;
    }
`

export function Starter({ i, player, selected, replacement }){
    return(
        <StarterStyled 
            selected={selected == player ? true : false}
            onClick={replacement}
        >
            {player.nick} 
            {i === 0 ?
                <span className='gk'>(gk)</span> : ''
            }
        </StarterStyled>
    )
}