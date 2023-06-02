import { useState } from 'react';
import { getTableAsc } from '../src/services/supabaseService';
import { MainBox } from '../src/components/boxes/MainBox';
import { PlayerList } from '../src/components/lists/PlayerList';
import { GameSection } from '../src/components/sections/GameSection';
import { BenchList } from '../src/components/lists/BenchList';

export default function Home({ data }){

    const [players, setPlayers] = useState(data);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [bench, setBench] = useState([]);
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
                    bench={bench}
                    setBench={setBench}
                    players={players}
                    setPlayers={setPlayers}
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
                    players={players}
                    setPlayers={setPlayers}
                />
                <PlayerList 
                    players={players} 
                    setPlayers={setPlayers}
                    selected={selected} 
                    setSelected={setSelected}
                    teamA={teamA}
                    setTeamA={setTeamA}
                    teamB={teamB}
                    setTeamB={setTeamB}  
                    bench={bench}
                    setBench={setBench}              
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