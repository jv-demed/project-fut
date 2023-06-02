import { useState } from 'react';
import { useRouter } from 'next/router';
import { generateId, getTableAsc } from '../src/services/supabaseService';
import { GiWhistle } from 'react-icons/gi';
import { MainBox } from '../src/components/boxes/MainBox';
import { PlayerList } from '../src/components/lists/PlayerList';
import { GameSection } from '../src/components/sections/GameSection';
import { BenchList } from '../src/components/lists/BenchList';
import { Button } from '../src/components/buttons/Button';
import { createMatch } from '../src/data/inMatchData';

export default function Home({ data }){

    const router = useRouter();

    const [players, setPlayers] = useState(data);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [bench, setBench] = useState([]);
    const [selected, setSelected] = useState(null);

    return(
        <main>
            <MainBox>
                <Button
                    disabled={teamA.length === 0 || teamB.length === 0 ? true : false}
                    onClick={async () => {
                        const id = await generateId('projectFut-matches');
                        await createMatch(id, teamA, teamB, bench)
                        .then(() => router.push(`/match/${id}`));
                    }}
                >
                    APITO INICIAL
                    <GiWhistle className='icon' />
                </Button>
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