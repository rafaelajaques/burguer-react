import React, { useState, useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button, } from './style';

import newOrder from '../../assets/burger1.svg'

function App() {
  const [clients, setClients] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const navigate = useNavigate();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post('http://localhost:3001/order', { order: inputOrder.current.value, name: inputName.current.value })

    console.log(inputOrder.current.value)
    console.log(inputName.current.value)

    setClients([...clients, newOrder])

    navigate('/order')
  }

  return (

    <Container>
      <Image alt="logo hamburgueria" src={newOrder} />
      <ContainerItems>
        <H1>Faça seu pedido</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Faça seu pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome do cliente" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItems>
    </Container>

  )
}

export default App