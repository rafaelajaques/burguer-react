import styled from "styled-components"

export const Button = styled.button`
width: 100%;
height: 60px;
background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
font-size: 17px;
line-height: 2px;
text-align: center;
color: #FFFFFF;
margin-top: 50px;
border: none;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}
`

export default Button