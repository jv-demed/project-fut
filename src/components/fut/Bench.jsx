import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getRecordById } from '../../services/supabaseService';
import { PlayerBox } from '../boxes/PlayerBox';

const BenchStyled = styled(PlayerBox)`
    border: ${props => props.selected ? '2px white' : '1px gray'} solid;
    justify-content: center;
    min-width: 80px;
    padding: 0 10px;
`

export function Bench({ player, selected, replacement }){

    const [bench, setBench] = useState(player);

    useEffect(() => {
        if(!bench.nick){
            getRecordById('projectFut-players', '*', player)
            .then(res => setBench(res));
        }
    }, []);

    return(
        <BenchStyled 
            selected={selected == player ? true : false}
            onClick={replacement}
        >
            {bench.nick}
        </BenchStyled>
    )
}