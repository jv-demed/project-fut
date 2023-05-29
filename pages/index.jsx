import styled from 'styled-components';
import { useState } from 'react';
import { getTableAsc } from '../src/services/supabaseService';
import { Box } from '../src/components/globals/Box';
import { Player } from '../src/components/fut/Player';
import { Starter } from '../src/components/fut/Starter';
import { AddPlayer } from '../src/components/buttons/AddPlayer';

const HomeStyled = styled.main`
    header{
        border-bottom: 1px solid gray;
        padding-bottom: 4px;
        text-align: center;
    }
    .teams{
        gap: 5px;
        .team{
            gap: 5px;
            width: 100%;
            ul{
                gap: 5px;
            }
        }
    }
    .bench{
        border: 1px solid gray;
    }
    .players{
        gap: 2px;
    }
`

export default function Home({ data }){

    const [players, setPlayers] = useState(data);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [selected, setSelected] = useState(null);

    return(
        <HomeStyled>
            <Box>
                <header>
                    <span>FUT 5</span>
                </header>
                <div className='teams flexRow'>
                    <div className='team flexColumn'>
                        {!teamA.length == 0 ?
                            <ul className='flexColumn'>
                                {teamA.map(player => {
                                    return(
                                        <Starter 
                                            key={player.id}
                                            player={player} 
                                        />
                                    )
                                })}
                            </ul> : ''
                        }
                        <AddPlayer
                            selected={selected}
                            setSelected={setSelected}
                            team={teamA}
                            setTeam={setTeamA}
                            players={players}
                            setPlayers={setPlayers}
                        />
                    </div>
                    <div className='team flexColumn'>
                        {!teamB.length == 0 ?
                            <ul className='flexColumn'>
                                {teamB.map(player => {
                                    return(
                                        <Starter 
                                            key={player.id}
                                            player={player} 
                                        />
                                    )
                                })}
                            </ul> : ''
                        }
                        <AddPlayer 
                            selected={selected}
                            setSelected={setSelected}
                            team={teamB}
                            setTeam={setTeamB}
                            players={players}
                            setPlayers={setPlayers}
                        />
                    </div>
                </div>
                <div className='bench'>
                    <span>Banco</span>
                </div>
                <ul className='players flexColumn'>
                    {players.map(player => {
                        return(
                            <Player
                                key={player.id}
                                player={player}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )
                    })}
                </ul>
            </Box>
        </HomeStyled>
    )
}

export async function getServerSideProps(){
    const players = await getTableAsc('players', '*', 'nick');
    return {
        props: {
            data: players
        }
    }
}