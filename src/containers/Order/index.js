import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Container, Image, ContainerItems, Paragraph, Person, OrderContainer } from './style';
import H1 from '../../components/Title'
import Button from '../../components/Button'

import Order from '../../assets/burger2.svg'
import Trash from '../../assets/trash.svg'

function Orders() {
  const [clients, setClients] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchOrders() {

      const { data: allOrder } = await axios.get('https://hamburgueria-khaki.vercel.app/order')

      setClients(allOrder)
    }

    fetchOrders()

  }, [])

  async function deleteOrder(clientId) {
    await axios.delete(`https://hamburgueria-khaki.vercel.app/order/${clientId}`)

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
        <Button isBack={true} onClick={goBackPage}>Voltar</Button>
      </ContainerItems>
    </Container>

  )
}

export default Orders