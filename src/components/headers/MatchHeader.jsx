import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getTableAsc, insertRecord } from '../../services/supabaseService';
import { ImCancelCircle } from 'react-icons/im';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { Button } from '../buttons/Button';
import { InputText } from '../inputs/InputText';
import { getMatchTime } from '../../scripts/dateScripts';

const MatchHeaderStyled = styled.header`
    align-items: center;
    background-color: #545668;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    .score{
        align-items: center;
        gap: 5px;
        .team{
            align-items: center;
            gap: 5px;
            .goals{
                border: 1px solid gray;
                padding: 2px 8px;
            }
        }
    }
    .time{
        font-size: 1.5rem;
    }
`

export function MatchHeader({ match, time }){
    return(
        <MatchHeaderStyled>
            <div className='score flexRow'>
                <div className='team flexRow'>
                    <span>Time A</span>
                    <span className='goals'>3</span>
                </div>
                <span>x</span>
                <div className='team flexRow'>
                    <span className='goals'>3</span>
                    <span>Time B</span>
                </div>
            </div>
            <div className='time'>
                <span>{time}</span>
            </div>
        </MatchHeaderStyled>
    )
}