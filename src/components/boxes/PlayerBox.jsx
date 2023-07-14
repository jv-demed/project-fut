import styled from 'styled-components';
import { Disclosure } from '@headlessui/react'
import { StatInput } from '../inputs/StatInput';
import { updateRecord } from '../../services/supabaseService';
import { useEffect, useState } from 'react';

const PlayerBoxStyled = styled.div`
    .btn{
        align-items: center;
        background-color: #545668;
        border: none;
        border-radius: 2px;
        display: flex;
        font-size: 1.6rem;
        height: 60px;
        justify-content: space-between;
        padding: 0 15px;
        width: 100%;
        .complete-name{
            font-size: 0.8rem;
        }
    }
    .box{
        border: 2px solid #545668;
        border-radius: 2px;
        padding: 15px;
    }
`

export function PlayerBox({ p }){

    const [player, setPlayer] = useState(p);

    useEffect(() => {
        updateRecord('projectFut-players', player, 'id', player.id);
    }, [player]);

    return(
        <PlayerBoxStyled>
            <Disclosure>
                <Disclosure.Button className='btn'>
                    {player.nick} 
                    <span className='complete-name'>
                        ({player.name})
                    </span>
                </Disclosure.Button>
                <Disclosure.Panel className='box'>
                    <StatInput legend='Gols'
                        stat='goals'
                        player={player}
                        setPlayer={setPlayer}
                    />
                    <StatInput legend='Assistências'
                        stat='assists'
                        player={player}
                        setPlayer={setPlayer}
                    />
                    <StatInput legend='Finalizações'
                        stat='finishes'
                        player={player}
                        setPlayer={setPlayer}
                    />
                    <StatInput legend='Lance de Habilidade'
                        stat='skillMoves'
                        player={player}
                        setPlayer={setPlayer}
                    />
                    <StatInput legend='Desarmes'
                        stat='disarms'
                        player={player}
                        setPlayer={setPlayer}
                    />
                    <StatInput legend='Defesas'
                        stat='defenses'
                        player={player}
                        setPlayer={setPlayer}
                    />
                    <StatInput legend='Faltas Cometidas'
                        stat='fouls'
                        player={player}
                        setPlayer={setPlayer}
                    />
                    <StatInput legend='Bizarrices'
                        stat='bizarres'
                        player={player}
                        setPlayer={setPlayer}
                    />
                    <StatInput legend='Gols Contra'
                        stat='ownGoals'
                        player={player}
                        setPlayer={setPlayer}
                    />
                </Disclosure.Panel>
            </Disclosure>
        </PlayerBoxStyled>
    )
}