import styled from 'styled-components'

export const FilterContact = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 20px;

`
export const Filter = styled.input`
font-size: 20px;
border: 0.5px solid gray;
border-radius: 5px;
   outline: transparent;
&:focus{
  border-color: red;
}
`