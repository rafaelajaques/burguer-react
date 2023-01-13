import styled from "styled-components";


export const Container = styled.div`
    background: #0A0A10;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Image = styled.img`
    width: 20%;
`

export const ContainerItems = styled.div`
    padding: 30px;
    width: 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;
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