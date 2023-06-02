import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gslgflzuxvsngdyoutwr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzbGdmbHp1eHZzbmdkeW91dHdyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NTMyMzc2NywiZXhwIjoyMDAwODk5NzY3fQ.-2ZM5_uAP6T-vG9CTNbESUyfcMYbWMuoBmu-ExyO93o';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getTableAsc(table, select, order){
    const res = await supabase.from(table).select(select)
    .order(order, { ascending: true });
    if(res.status != 200){
        console.log(res.error);
    }return res.data;
}

export async function insertRecord(table, obj){
    const { status, error } = await supabase.from(table)
    .insert(obj);
    if(status != 201){
        console.log(error);
    }
}