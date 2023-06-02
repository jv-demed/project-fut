import styled from 'styled-components';

export const Button = styled.button`
    align-items: center;
    background-color: ${props => props.color ? props.color : '#70c591'};
    border: none;
    border-radius: 2px;
    cursor: pointer;
    gap: 5px;
    display: flex;
    flex-grow: 1;
    height: 50px;
    justify-content: center;
    .icon{
        font-size: 1.6rem;
    }
    :disabled{
        background-color: gray;
    }
`