import { generateId, insertRecord } from "../services/supabaseService";

export async function createLog(time, log){
    const id = await generateId('projectFut-matchLog');
    await insertRecord('projectFut-matchLog', {
        id: id,
        time: time,
        log: log
    });
}