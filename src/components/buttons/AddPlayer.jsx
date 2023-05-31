import styled from 'styled-components';

const AddPlayerStyled = styled.div`
    align-items: center;
    border: 1px gray solid;
    border-radius: 2px;
    display: flex;
    height: 50px;
    justify-content: center;
`

export function AddPlayer({ addPlayer, team, setTeam }){
    return(
        <AddPlayerStyled onClick={() => addPlayer(team, setTeam)}>
            Add
        </AddPlayerStyled>
    )
}