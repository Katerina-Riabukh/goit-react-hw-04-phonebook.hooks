import styled from 'styled-components'

export const FORM = styled.form`
margin-bottom: 60px
`

export const LABEL = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`

export const Input = styled.input`
font-size: 20px;
font-size: 20px;
border: 0.5px solid gray;
border-radius: 5px;
   outline: transparent;
 &:focus{
   border-color: red;
  };
`

export const BUTTON = styled.button`
padding: 5px;
border-radius: 5px;
border: 0.5px solid gray;
 &:hover {
   background-color: lightgray;
  }

`