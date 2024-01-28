import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { ShoppingCart } from '@phosphor-icons/react'
import { priceFormatter } from '../../../../utils/formatter'
import { QuantityControl } from '../../../../components/QuantityControl'
import {
  Container,
  Tags,
  Buy,
  Price,
  Title,
  Description,
  Image,
  Controls,
} from './styles'

interface Coffee {
  id: string
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

interface Props {
  coffee: Coffee
}

export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)

  const { addItem } = useContext(CartContext)

  function handleAddToCart() {
    addItem({ id: coffee.id, quantity })
    setQuantity(1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function incrementeQuantity() {
    setQuantity((state) => state + 1)
  }

  return (
    <Container>
      <Image src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <Buy>
        <Price>
          <span>R$</span>
          <span>{priceFormatter(coffee.price)}</span>
        </Price>

        <Controls>
          <QuantityControl
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementeQuantity}
          />

          <button type="button" onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </Controls>
      </Buy>
    </Container>
  )
}
