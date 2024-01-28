import { Minus, Plus } from '@phosphor-icons/react'
import { Button, Container, Counter } from './styles'

interface Props {
  quantity: number
  decrementQuantity: () => void
  incrementQuantity: () => void
}

export function QuantityControl({
  quantity,
  decrementQuantity,
  incrementQuantity,
}: Props) {
  return (
    <Container>
      <Button type="button" onClick={decrementQuantity}>
        <Minus size={13} weight="bold" />
      </Button>

      <Counter>{quantity}</Counter>

      <Button type="button" onClick={incrementQuantity}>
        <Plus size={13} weight="bold" />
      </Button>
    </Container>
  )
}
