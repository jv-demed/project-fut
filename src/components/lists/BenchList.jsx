import styled from 'styled-components';
import { addPlayer, existsPlayer, removePlayer, replacementOther } from '../../scripts/replacementScripts';
import { Player } from '../fut/Player';
import { InfoHeader } from '../headers/InfoHeader';
import { NewPlayerSection } from '../sections/NewPlayerSection';
import { Bench } from '../fut/Bench';
import { AddPlayer } from '../buttons/AddPlayer';

const BenchListStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .bench{
        flex-wrap: wrap;
        gap: 5px;
        justify-content: center;
        .empty{
            padding-top: 8px;
            text-align: center;
        }
    }
`

export function BenchList({ 
    bench, 
    setBench,
    selected,
    setSelected,
    teamA,
    setTeamA,
    teamB,
    setTeamB,
    players,
    setPlayers
}){
    return(
        <BenchListStyled>
            <InfoHeader>
                <span>NO BANCO</span>
            </InfoHeader>     
            <ul className='bench flexRow'>
                {bench.map(player => {
                    return(
                        <Bench
                            key={player.id}
                            player={player}
                            selected={selected}
                            replacement={() => {
                                if(!selected || existsPlayer(players, selected)){
                                    setSelected(player);
                                }else{
                                    if(existsPlayer(teamA, selected)){
                                        const teams = replacementOther(players, teamA, selected, player);
                                        setBench(teams[0]);
                                        setTeamA(teams[1]);
                                    }if(existsPlayer(teamB, selected)){
                                        const teams = replacementOther(players, teamB, selected, player);
                                        setBench(teams[0]);
                                        setTeamB(teams[1]);
                                    }if(existsPlayer(teamA, selected)){
                                        const teams = replacementOther(bench, teamA, selected, player);
                                        setBench(teams[0]);
                                        setTeamA(teams[1]);
                                    }if(existsPlayer(teamB, selected)){
                                        const teams = replacementOther(bench, teamB, selected, player);
                                        setBench(teams[0]);
                                        setTeamB(teams[1]);
                                    }
                                    setSelected(null);
                                }
                            }}
                        />
                    )
                })}
            </ul>
            <AddPlayer
                addPlayer={() => {
                    if(!selected) return;
                    if(!existsPlayer(bench, selected)){
                        setPlayers(removePlayer(players, selected));
                        setBench(addPlayer(bench, selected));
                    }
                    if(existsPlayer(teamA, selected)){
                        setTeamA(removePlayer(teamA, selected));
                        setBench(addPlayer(bench, selected));
                    }
                    if(existsPlayer(teamB, selected)){
                        setTeamB(removePlayer(teamB, selected));
                        setBench(addPlayer(bench, selected));
                    }
                    setSelected(null);
                }}
            />
        </BenchListStyled>
    )
}