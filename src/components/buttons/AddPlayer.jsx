import styled from 'styled-components';

const AddPlayerStyled = styled.div`
    align-items: center;
    border: 1px gray solid;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    height: 50px;
    justify-content: center;
`

export function AddPlayer({ addPlayer }){
    return(
        <AddPlayerStyled onClick={addPlayer}>
            Add
        </AddPlayerStyled>
    )
}