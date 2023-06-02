import styled from 'styled-components';
import { TeamList } from '../lists/TeamList';
import { InfoHeader } from '../headers/InfoHeader';

const GameSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .teams{
        gap: 5px;
    }
`

export function GameSection({ 
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
        <GameSectionStyled>
            <InfoHeader>
                <span>EM CAMPO</span>
            </InfoHeader>
            <div className='teams flexRow'>
                <TeamList 
                    selected={selected}
                    setSelected={setSelected}
                    team={teamA}
                    setTeam={setTeamA}
                    otherTeam={teamB}
                    setOtherTeam={setTeamB}
                    players={players}
                    setPlayers={setPlayers}
                />
                <TeamList 
                    selected={selected}
                    setSelected={setSelected}
                    team={teamB}
                    setTeam={setTeamB}
                    otherTeam={teamA}
                    setOtherTeam={setTeamA}
                    players={players}
                    setPlayers={setPlayers}
                />
            </div>
        </GameSectionStyled>
    )
}