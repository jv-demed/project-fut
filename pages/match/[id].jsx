import { useEffect, useState } from 'react';
import { MainBox } from '../../src/components/boxes/MainBox';
import { MatchHeader } from '../../src/components/headers/MatchHeader';
import { getRecordById, getTableAsc } from '../../src/services/supabaseService';
import { getMatchTime } from '../../src/scripts/dateScripts';
import { MatchTabs } from '../../src/components/headless/MatchTabs';

export default function Match({ match, matchLog }){

    const [time, setTime] = useState(match.startDate);
    const [teamA, setTeamA] = useState(matchLog[0].teamA);
    const [teamB, setTeamB] = useState(matchLog[0].teamB);
    const [bench, setBench] = useState(matchLog[0].bench);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getMatchTime(match.startDate));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {

    }, []);

    

    console.log(teamA);

    return(
        <main>
            <MainBox>
                <MatchHeader 
                    match={match} 
                    time={time}
                />
                <MatchTabs 
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

export async function getServerSideProps(context){
    const match = await getRecordById('projectFut-matches', '*', context.params.id);
    const matchLog = await getTableAsc('projectFut-inMatch', '*', 'time');
    return {
        props: {
            match: match,
            matchLog: matchLog
        }
    }
}