import styled from 'styled-components'

export const LI = styled.li`
margin-bottom: 10px;
display: flex;

`
export const Name = styled.span`
text-transform: capitalize;
font-size: 18px;
font-weight: 500;
margin-right: 10px;
width: 170px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`
export const Button = styled.button`
display: block;
margin-left: auto;
padding: 5px;
border-radius: 5px;
border: 0.5px solid gray;
cursor: pointer;
&:hover {
background-color: lightgray;
}
`