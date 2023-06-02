import styled from 'styled-components';

const InputTextStyled = styled.input`
    background-color: #e9e9e9;
    border: 1px solid gray;
    color: black;
    font-size: 1.4rem;
    height: 50px;
    padding: 0 8px;
    width: 100%;
`;

export function InputText({
    type, 
    required, 
    placeholder, 
    info, 
    obj, 
    setObj
}){
    return(
        <InputTextStyled 
            type={type ? type : 'text'} 
            required={required ? required : false}
            placeholder={placeholder} 
            value={obj[info]}
            onChange={(e) => setObj({
                ...obj,
                [info]: e.target.value
            })}
        />
    )
}