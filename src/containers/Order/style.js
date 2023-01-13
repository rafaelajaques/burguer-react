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

export const Button = styled.button`
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.14);
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

export const Person = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
    height: 100px;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 20px;
    
    button{
        background: transparent;
        border: none;
        cursor: pointer;
}
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    flex-wrap: wrap;
    width: 80%;
    border: 1px solid orange;
`

export const Paragraph = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    color: red;
    border: 1px solid cyan;
`
