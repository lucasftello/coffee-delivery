import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  CartButton,
  Container,
  Content,
  Nav,
  Location,
  Counter,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <Container>
      <Content>
        <NavLink to="/">
          <img src="/images/logo.svg" alt="" />
        </NavLink>

        <Nav>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>

          <CartButton to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            <Counter>{cart.length}</Counter>
          </CartButton>
        </Nav>
      </Content>
    </Container>
  )
}
