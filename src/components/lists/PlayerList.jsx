import styled from 'styled-components';
import { existsPlayer, replacementOther } from '../../scripts/replacementScripts';
import { Player } from '../fut/Player';
import { InfoHeader } from '../headers/InfoHeader';
import { NewPlayerSection } from '../sections/NewPlayerSection';

const PlayerListStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .players{
        gap: 5px;
        .empty{
            padding-top: 8px;
            text-align: center;
        }
    }
`

export function PlayerList({ 
    players, 
    setPlayers,
    selected,
    setSelected,
    teamA,
    setTeamA,
    teamB,
    setTeamB 
}){
    return(
        <PlayerListStyled>
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
                                replacement={() => {
                                    if(!selected || existsPlayer(players, selected)){
                                        setSelected(player);
                                    }else{
                                        if(existsPlayer(teamA, selected)){
                                            const teams = replacementOther(players, teamA, selected, player);
                                            setPlayers(teams[0]);
                                            setTeamA(teams[1]);
                                        }else if(existsPlayer(teamB, selected)){
                                            const teams = replacementOther(players, teamB, selected, player);
                                            setPlayers(teams[0]);
                                            setTeamB(teams[1]);
                                        }
                                        setSelected(null);
                                    }
                                }}
                            />
                        )
                    }) :
                    <span className='empty'>
                        Não há jogadores
                    </span>
                }
            </ul>
            <NewPlayerSection 
                setPlayers={setPlayers} 
            />
        </PlayerListStyled>
    )
}