import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getTableAsc, insertRecord } from '../../services/supabaseService';
import { ImCancelCircle } from 'react-icons/im';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { Button } from '../buttons/Button';
import { InputText } from '../inputs/InputText';

const NewPlayerSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    .inputs{
        gap: 5px;
        .actions{
            gap: 5px;
        }
    }
`

export function NewPlayerSection({ setPlayers }){
    
    const [addMode, setAddMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [newPlayer, setNewPlayer] = useState({
        name: '',
        nick: ''
    });

    useEffect(() => {
        getTableAsc('projectFut-players', '*', 'nick')
        .then(res => setPlayers(res));
    }, [isLoading]);

    return(
        <NewPlayerSectionStyled>
            {!addMode ?
                <Button onClick={() => setAddMode(true)}>
                    <AiOutlineUsergroupAdd className='icon' />
                </Button> :
                <form className='inputs flexColumn'
                    onSubmit={async (e) => {
                        e.preventDefault();
                        setIsLoading(true);
                        await insertRecord('projectFut-players', newPlayer)
                        .then(() => {
                            setIsLoading(false);
                            setAddMode(false);
                            setNewPlayer({
                                name: '',
                                nick: ''
                            })
                        });
                    }}
                >
                    <InputText 
                        required={true}
                        placeholder='Nome do Jogador...'
                        info='name'
                        obj={newPlayer}
                        setObj={setNewPlayer}
                    />
                    <InputText 
                        required={true}
                        placeholder='Apelido...'
                        info='nick'
                        obj={newPlayer}
                        setObj={setNewPlayer}
                    />
                    <div className='actions flexRow'>
                        <Button 
                            type='button'
                            color='tomato'
                            onClick={() => setAddMode(false)}
                        >
                            <ImCancelCircle className='icon' />
                        </Button>
                        <Button>
                            <AiOutlineUsergroupAdd className='icon' />
                        </Button>
                    </div>
                </form>
            }
        </NewPlayerSectionStyled>
    )
}