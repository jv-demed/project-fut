import styled from 'styled-components';
import { IoRemoveOutline, IoAdd } from 'react-icons/io5';

const StatInputStyled = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.4rem;
    justify-content: space-between;
    padding: 5px 0;
    div{
        align-items: center;
        display: flex;
        gap: 10px;
    }
    .icon{
        font-size: 1.8rem;
    }
`

export function StatInput({ legend, stat, player, setPlayer }){
    return(
        <StatInputStyled>
            <span>{legend}:</span>
            <div>
                <IoRemoveOutline className='icon' 
                    onClick={() => {
                        setPlayer({
                            ...player,
                            [stat]: player[stat]-1
                        })
                    }}
                />
                <span>{player[stat]}</span>
                <IoAdd className='icon' 
                    onClick={() => {
                        setPlayer({
                            ...player,
                            [stat]: player[stat]+1
                        })
                    }} 
                />
            </div>
        </StatInputStyled>
    )
}