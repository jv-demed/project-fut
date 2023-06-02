import styled from 'styled-components';
import { existsPlayer, removePlayer, addPlayer, replacementSame, replacementOther } from '../../scripts/replacementScripts';
import { Starter } from '../fut/Starter';
import { AddPlayer } from '../buttons/AddPlayer';

const TeamListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    ul{
        gap: 5px;
    }
`

export function TeamList({ 
    selected,
    setSelected,
    team,
    setTeam,
    otherTeam,
    setOtherTeam,
    players,
    setPlayers
}){
    return(
        <TeamListStyled>
            {!team.length == 0 ?
                <ul className='flexColumn'>
                    {team.map(player => {
                        return(
                            <Starter 
                                key={player.id}
                                player={player} 
                                selected={selected}
                                replacement={() => {
                                    if(!selected || existsPlayer(players, selected)){
                                        setSelected(player);
                                    }else{
                                        if(existsPlayer(team, selected)){
                                            setTeam(replacementSame(team, selected, player));
                                        }else if(existsPlayer(otherTeam, selected)){
                                            const teams = replacementOther(team, otherTeam, selected, player);
                                            setTeam(teams[0]);
                                            setOtherTeam(teams[1]);
                                        }
                                        setSelected(null);
                                    }
                                }}
                            />
                        )
                    })}
                </ul> : ''
            }
            <AddPlayer
                addPlayer={() => {
                    if(!selected) return;
                    if(existsPlayer(otherTeam, selected)){
                        setOtherTeam(removePlayer(otherTeam, selected));
                        setTeam(addPlayer(team, selected));
                    }
                    if(!existsPlayer(team, selected)){
                        setPlayers(removePlayer(players, selected));
                        setTeam(addPlayer(team, selected));
                    }
                    setSelected(null);
                }}
            />
        </TeamListStyled>
    )
}