import styled from 'styled-components';
import { getGoalAverage, getSuccessRate } from '../../scripts/statsScripts';
import { MiniInfo } from '../stats/MiniInfo';
import { PlayerBox } from '../boxes/PlayerBox';

const PlayerStyled = styled(PlayerBox)`
    border: ${props => props.selected ? '2px white' : '1px gray'} solid;
    justify-content: space-between;
    padding: 0 10px;
    .complete-name{
        font-size: 0.8rem;
    }
    .infos{
        gap: 10px;
    }
`

export function Player({ player, selected, replacement }){
    return(
        <PlayerStyled 
            selected={selected == player ? true : false}
            onClick={replacement}
        >
            <div className='flexColumn'>
                {player.nick}
                <span className='complete-name'>
                    {player.name}
                </span>
            </div>
            <div className='infos flexRow'>
                <MiniInfo 
                    info='M. Gols'
                    stat={getGoalAverage(player)}
                />
                <MiniInfo 
                    info='Aprov'
                    stat={getSuccessRate(player)}
                />
                <MiniInfo 
                    info='Nota'
                    stat={player.score}
                />
            </div>
        </PlayerStyled>
    )
}