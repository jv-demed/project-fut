import styled from 'styled-components';
import { useState } from 'react';
import { getTableAsc } from '../src/services/supabaseService';
import { Player } from '../src/components/fut/Player';
import { Starter } from '../src/components/fut/Starter';
import { MainBox } from '../src/components/boxes/MainBox';
import { AddPlayer } from '../src/components/buttons/AddPlayer';
import { InfoHeader } from '../src/components/headers/InfoHeader';
import { existsPlayer, addPlayerAnotherTeam, addPlayerFromPlayers, removePlayer, addPlayer } from '../src/scripts/replacementScripts';

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
        span{
            padding-top: 8px;
            text-align: center;
        }
    }
`

export default function Home({ data }){

    const [players, setPlayers] = useState(data);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [selected, setSelected] = useState(null);

    function replacement(player, team, setTeam, otherTeam, setOtherTeam){
        if(!selected || existsPlayer(players, selected)){
            setSelected(player);
        }else{
            if(existsPlayer(team, selected)){
                const newList = [...team];
                const i1 = newList.findIndex(p => p.id === selected.id);
                const i2 = newList.findIndex(p => p.id === player.id);
                const aux = newList[i1];
                newList[i1] = newList[i2];
                newList[i2] = aux;
                setTeam(newList);
            }else if(existsPlayer(otherTeam, selected)){
                const newTeam = [...team];
                const newOtherTeam = [...otherTeam];
                const i1 = newTeam.findIndex(p => p.id === player.id);
                const i2 = newOtherTeam.findIndex(p => p.id === selected.id);
                const aux = newTeam[i1];
                newTeam[i1] = newOtherTeam[i2];
                newOtherTeam[i2] = aux;
                setTeam(newTeam);
                setOtherTeam(newOtherTeam);
            }
            setSelected(null);
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
                                                replacement={() => replacement(player, teamA, setTeamA, teamB, setTeamB)}
                                            />
                                        )
                                    })}
                                </ul> : ''
                            }
                            <AddPlayer
                                addPlayer={() => {
                                    if(!selected) return;
                                    if(existsPlayer(teamB, selected)){
                                        setTeamB(removePlayer(teamB, selected));
                                        setTeamA(addPlayer(teamA, selected));
                                    }
                                    if(!existsPlayer(teamA, selected)){
                                        setPlayers(removePlayer(players, selected));
                                        setTeamA(addPlayer(teamA, selected));
                                    }
                                    setSelected(null);
                                }}
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
                                                replacement={() => replacement(player, teamB, setTeamB, teamA, setTeamA)}
                                            />
                                        )
                                    })}
                                </ul> : ''
                            }
                            <AddPlayer 
                                addPlayer={() => {
                                    if(!selected) return;
                                    if(existsPlayer(teamA, selected)){
                                        setTeamA(removePlayer(teamA, selected));
                                        setTeamB(addPlayer(teamB, selected));
                                    }
                                    if(!existsPlayer(teamB, selected)){
                                        setPlayers(removePlayer(players, selected));
                                        setTeamB(addPlayer(teamB, selected));
                                    }
                                    setSelected(null);
                                }}
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
                        {players.length != 0 ?
                            players.map(player => {
                                return(
                                    <Player
                                        key={player.id}
                                        player={player}
                                        selected={selected}
                                        replacement={() => replacement(player, players)}
                                    />
                                )
                            }) :
                            <span>Não há jogadores</span>
                        }
                    </ul>
                </section>
            </MainBox>
        </HomeStyled>
    )
}

export async function getServerSideProps(){
    const players = await getTableAsc('projectFut-players', '*', 'nick');
    return {
        props: {
            data: players
        }
    }
}