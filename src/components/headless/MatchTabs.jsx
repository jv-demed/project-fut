import styled from 'styled-components';
import { Tab } from '@headlessui/react';
import { GameSection } from '../sections/GameSection';
import { BenchList } from '../lists/BenchList';

const MatchTabsStyled = styled.section`
    .btns{
        gap: 2px;
        .btn{
            background-color: #343541;
            border: 1px solid gray;
            border-radius: 2px;
            height: 40px;
            width: 100%;
        }
    }
    .content{
        padding: 10px;
    }
`

export function MatchTabs({
    selected,
    setSelected,
    teamA,
    setTeamA,
    teamB,
    setTeamB,
    bench,
    setBench
}){
    return(
        <MatchTabsStyled>
            <Tab.Group>
                <Tab.List className='btns flexRow'>
                    <Tab className='btn'>Substituições</Tab>
                    <Tab className='btn'>Jogadas</Tab>
                    <Tab className='btn'>Estatísticas</Tab>
                </Tab.List>
                <Tab.Panels className='content'>
                    <Tab.Panel>
                        <GameSection 
                            selected={selected}
                            setSelected={setSelected}
                            teamA={teamA}
                            setTeamA={setTeamA}
                            teamB={teamB}
                            setTeamB={setTeamB}
                            bench={bench}
                            setBench={setBench}
                            players={[]}
                        />
                        <BenchList 
                            selected={selected}
                            setSelected={setSelected}
                            teamA={teamA}
                            setTeamA={setTeamA}
                            teamB={teamB}
                            setTeamB={setTeamB}
                            bench={bench}
                            setBench={setBench}
                            players={[]}
                        />
                    </Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </MatchTabsStyled>
    )
}