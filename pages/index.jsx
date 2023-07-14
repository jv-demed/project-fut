import { getTableAsc } from '../src/services/supabaseService';
import { MainBox } from '../src/components/boxes/MainBox';
import { PlayerBox } from '../src/components/boxes/PlayerBox';

export default function Home({ players }){
    return(
        <main>
            <MainBox>
                <ul>
                    {players.map(p => {
                        return(
                            <li key={p.id}>
                                <PlayerBox p={p} />
                            </li>
                        )
                    })}
                </ul>
            </MainBox>
        </main>
    )
}

export async function getServerSideProps(){
    const players = await getTableAsc('projectFut-players', '*', 'nick');
    return {
        props: {
            players: players
        }
    }
}