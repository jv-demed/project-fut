import styled from 'styled-components';

const AddPlayerStyled = styled.div`
    align-items: center;
    border: 1px gray solid;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    height: 35px;
    justify-content: center;
    transition: all 0.2s;
    :hover{
        background-color: #545668;
    }
`

export function AddPlayer({ selected, setSelected, team, setTeam, players, setPlayers }){
    return(
        <AddPlayerStyled onClick={() => {
            if(selected){
                setTeam([...team, selected])
                setPlayers(players.filter(p => p.id != selected.id));
                setSelected(null);
            }
        }}>
            Add
        </AddPlayerStyled>
    )
}