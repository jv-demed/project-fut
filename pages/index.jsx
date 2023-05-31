import styled from 'styled-components';
import { useState } from 'react';
import { getTableAsc } from '../src/services/supabaseService';
import { Player } from '../src/components/fut/Player';
import { Starter } from '../src/components/fut/Starter';
import { MainBox } from '../src/components/boxes/MainBox';
import { AddPlayer } from '../src/components/buttons/AddPlayer';
import { InfoHeader } from '../src/components/headers/InfoHeader';

const HomeStyled = styled.main`
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
        gap: 5px;
    }
`

export default function Home({ data }){

    const [players, setPlayers] = useState(data);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [selected, setSelected] = useState(null);

    console.log(selected);

    function addPlayer(team, setTeam){
        if(selected){
            setTeam([...team, selected])
            setPlayers(players.filter(p => p.id != selected.id));
            setSelected(null);
        }
    }

    function replacement(player){
        if(!selected || players.some(p => p.id === player.id)){
            setSelected(player);
        }else{
            console.log(player);
        }
    }

    return(
        <HomeStyled>
            <MainBox>
                <section>
                    <InfoHeader>
                        <span>EM CAMPO</span>
                    </InfoHeader>
                    <div className='teams flexRow'>
                        <div className='team flexColumn'>
                            {!teamA.length == 0 ?
                                <ul className='flexColumn'>
                                    {teamA.map(player => {
                                        return(
                                            <Starter 
                                                key={player.id}
                                                player={player} 
                                                selected={selected}
                                                replacement={replacement}
                                            />
                                        )
                                    })}
                                </ul> : ''
                            }
                            <AddPlayer
                                addPlayer={addPlayer}
                                team={teamA}
                                setTeam={setTeamA}
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
                                                selected={selected}
                                                replacement={replacement}
                                            />
                                        )
                                    })}
                                </ul> : ''
                            }
                            <AddPlayer 
                                addPlayer={addPlayer}
                                team={teamB}
                                setTeam={setTeamB}
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <InfoHeader>
                        <span>BANCO</span>
                    </InfoHeader>
                </section>
                <section>
                    <InfoHeader>
                        <span>JOGADORES</span>
                    </InfoHeader>     
                    <ul className='players flexColumn'>
                        {players.map(player => {
                            return(
                                <Player
                                    key={player.id}
                                    player={player}
                                    selected={selected}
                                    replacement={replacement}
                                />
                            )
                        })}
                    </ul>
                </section>
            </MainBox>
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