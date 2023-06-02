import { getRecordById, insertRecord } from "../services/supabaseService";
import { getMatchTime } from "../scripts/dateScripts";

export async function createMatch(id, teamA, teamB, bench){
    await insertRecord('projectFut-matches', {
        id: id
    });
    await createMatchLog(id, [teamA, teamB, bench], 'Início da partida;');
}

async function createMatchLog(id, teams, log){
    const match = await getRecordById('projectFut-matches', '*', id);
    console.log(match);
    await insertRecord('projectFut-inMatch', {
        time: getMatchTime(match.startDate),
        idMatch: match.id,
        teamA: teams[0].map(p => p.id),
        teamB: teams[1].map(p => p.id),
        bench: teams[2].map(p => p.id),
        log: log
    });
}