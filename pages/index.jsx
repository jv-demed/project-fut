import styled from 'styled-components';
import { useState } from 'react';
import { getTableAsc } from '../src/services/supabaseService';
import { MainBox } from '../src/components/boxes/MainBox';
import { PlayerList } from '../src/components/lists/PlayerList';
import { InfoHeader } from '../src/components/headers/InfoHeader';
import { GameSection } from '../src/components/sections/GameSection';

export default function Home({ data }){

    const [players, setPlayers] = useState(data);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [selected, setSelected] = useState(null);

    return(
        <main>
            <MainBox>
                <GameSection 
                    selected={selected}
                    setSelected={setSelected}
                    teamA={teamA}
                    setTeamA={setTeamA}
                    teamB={teamB}
                    setTeamB={setTeamB}
                    players={players}
                    setPlayers={setPlayers}
                />
                <section>
                    <InfoHeader>
                        <span>BANCO</span>
                    </InfoHeader>
                </section>
                <PlayerList 
                    players={players} 
                    setPlayers={setPlayers}
                    selected={selected} 
                    setSelected={setSelected}
                    teamA={teamA}
                    setTeamA={setTeamA}
                    teamB={teamB}
                    setTeamB={setTeamB}                
                />
            </MainBox>
        </main>
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