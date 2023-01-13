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
    width: 10%;
`

export const ContainerItems = styled.div`
    padding: 30px;
    width: 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;
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
    align-items: left; 
    flex-wrap: wrap;
    width: 80%;
`

export const Paragraph = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
`
