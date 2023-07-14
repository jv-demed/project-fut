import { convertToSeconds } from "../scripts/dateScripts";
import { generateId, insertRecord, updateRecord } from "../services/supabaseService";
import { createLog } from "./logData";

export async function createMatch(id, green, orange, bench){
    await insertRecord('projectFut-matches', {
        id: id
    });
    await createLog('00:00', 'Início da partida!');
    for(const p of green){
        const id = await generateId('projectFut-matchStats');
        await insertRecord('projectFut-matchStats', {
            id: id,
            idPlayer: p.id,
            nick: p.nick,
            name: p.name,
            team: 1
        });
    }
    for(const p of orange){
        const id = await generateId('projectFut-matchStats');
        await insertRecord('projectFut-matchStats', {
            id: id,
            idPlayer: p.id,
            nick: p.nick,
            name: p.name,
            team: 2
        });
    }
    for(const p of bench){
        const id = await generateId('projectFut-matchStats');
        await insertRecord('projectFut-matchStats', {
            id: id,
            idPlayer: p.id,
            nick: p.nick,
            name: p.name,
            team: 0
        });
    }
}

export async function replacement(team, n){
    for(const p of team){
        let time = null;
        if(p.team == 1){
            time = 'timeGreen';
        }else if(p.team == 2){
            time = 'timeOrange';
        }else{
            time = 'timeBench'
        }
        await updateRecord('projectFut-matchStats', {
            ...p,
            team: n,
            [time]: p[time] + convertToSeconds(new Date(p.at), new Date()),
            at: new Date()
        }, 'id', p.id);
    }
}