import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useParams } from 'react-router-dom'
import {
  Container,
  Content,
  Heading,
  InfoItem,
  Order,
  OrderInfos,
  Icon,
} from './styles'

export function Success() {
  const { orders } = useContext(CartContext)
  const { id } = useParams()

  const paymentMethods = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  const order = orders.find((order) => order.id === Number(id))

  if (!order) {
    return
  }

  return (
    <main>
      <Container>
        <Content>
          <Order>
            <Heading>
              <h1>Uhu! Pedido confirmado</h1>
              <span>Agora é só aguardar que logo o café chegará até você</span>
            </Heading>

            <OrderInfos>
              <InfoItem>
                <Icon bgColor="purple">
                  <MapPin size={16} weight="fill" />
                </Icon>

                <div>
                  <span>
                    Entrega em{' '}
                    <strong>
                      {order.street}, {order.number}
                    </strong>
                  </span>

                  <span>
                    {order.neighborhood} - {order.city}, {order.state}
                  </span>
                </div>
              </InfoItem>

              <InfoItem>
                <Icon bgColor="yellow">
                  <Timer size={16} weight="fill" />
                </Icon>

                <div>
                  <span>Previsão de entrega</span>

                  <strong>20 min - 30 min</strong>
                </div>
              </InfoItem>

              <InfoItem>
                <Icon bgColor="yellow-dark">
                  <CurrencyDollar size={16} />
                </Icon>

                <div>
                  <span>Pagamento na entrega</span>

                  <strong>{paymentMethods[order.paymentMethod]}</strong>
                </div>
              </InfoItem>
            </OrderInfos>
          </Order>

          <img
            src="/images/delivery.svg"
            alt="Pessoa em uma moto com entregas"
          />
        </Content>
      </Container>
    </main>
  )
}
