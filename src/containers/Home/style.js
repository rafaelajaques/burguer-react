import styled from "styled-components";


export const Container = styled.div`
    background: #0A0A10;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Image = styled.img`
    height: 40%;
`

export const ContainerItems = styled.div`
    padding: 30px;
    width: 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 30px;
`

export const InputLabel = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    padding-left: 20px;
    color: #EEEEEE;
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    padding: 20px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    margin-bottom: 30px;
`

export const Button = styled.button`
    width: 100%;
    height: 60px;
    background: #D93856;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    color: #FFFFFF;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`
