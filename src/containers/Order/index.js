import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Container, Image, ContainerItems, H1, Paragraph, Button, Person, OrderContainer } from './style';

import Order from '../../assets/burger2.svg'
import Trash from '../../assets/trash.svg'

function Orders() {
  const [clients, setClients] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchOrders() {

      const { data: allOrder } = await axios.get('http://localhost:3001/order')

      setClients(allOrder)
    }

    fetchOrders()

  }, [])

  async function deleteOrder(clientId) {
    await axios.delete(`http://localhost:3001/order/${clientId}`)

    const newOrders = clients.filter(client => client.id !== clientId)

    setClients(newOrders)
  }

  function goBackPage() {
    navigate('/')
  }

  return (

    <Container>
      <Image alt="logo hamburgueria" src={Order} />
      <ContainerItems>
        <H1>Pedidos</H1>

        <ul>
          {clients.map((client) => (
            <Person key={client.id}>
              <OrderContainer>
                <Paragraph> {client.order}</Paragraph>
                <Paragraph> {client.name}</Paragraph>
              </OrderContainer>
              <button onClick={() => deleteOrder(client.id)}><img alt="lixeira" src={Trash} /></button>
            </Person>
          ))}
        </ul>
        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItems>
    </Container>

  )
}

export default Orders