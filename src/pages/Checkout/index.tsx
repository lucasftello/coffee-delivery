import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { coffees } from '../../../data.json'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  ShoppingCart,
  Trash,
} from '@phosphor-icons/react'
import {
  Address,
  AddressForm,
  AddressHeader,
  CheckoutButton,
  CheckoutInfos,
  CheckoutSummary,
  Container,
  Content,
  Input,
  Payment,
  PaymentHeader,
  PaymentMethods,
  Summary,
  SummaryInfos,
  SummaryItems,
  CartEmpty,
  CartItem,
  Controls,
  Infos,
  Price,
  PaymentButton,
} from './styles'
import { NavLink } from 'react-router-dom'
import { QuantityControl } from '../../components/QuantityControl'
import { priceFormatter } from '../../utils/formatter'

const orderFormSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  fullAddress: zod.string().optional(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.enum(['credit', 'debit', 'cash']),
})

type OrderFormInputs = zod.infer<typeof orderFormSchema>

export function Checkout() {
  const {
    items,
    removeItem,
    decrementItemQuantity,
    incrementItemQuantity,
    checkout,
  } = useContext(CartContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<OrderFormInputs>({
    resolver: zodResolver(orderFormSchema),
  })

  const coffeesInCart = items.map((item) => {
    const coffeeData = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeData) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeData,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0)
  const shippingPrice = 3.5
  const totalOrderPrice = totalItemsPrice + shippingPrice

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  function handleCheckout(data: OrderFormInputs) {
    const newOrder = {
      id: new Date().getTime(),
      items,
      value: totalOrderPrice,
      ...data,
    }

    checkout(newOrder)
  }

  return (
    <main>
      <Container>
        <Content>
          {items.length > 0 ? (
            <>
              <CheckoutInfos>
                <h2>Complete seu pedido</h2>

                <form id="order" onSubmit={handleSubmit(handleCheckout)}>
                  <Address>
                    <AddressHeader>
                      <MapPin size={22} />
                      <div>
                        <span>Endereço de Entrega</span>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                      </div>
                    </AddressHeader>

                    <AddressForm>
                      <Input
                        type="text"
                        placeholder="CEP"
                        required
                        style={{ gridArea: 'cep' }}
                        {...register('cep')}
                      />
                      <Input
                        type="text"
                        placeholder="Rua"
                        required
                        style={{ gridArea: 'street' }}
                        {...register('street')}
                      />
                      <Input
                        type="number"
                        placeholder="Número"
                        required
                        style={{ gridArea: 'number' }}
                        {...register('number')}
                      />
                      <Input
                        type="text"
                        placeholder="Complemento"
                        style={{ gridArea: 'fullAddress' }}
                        {...register('fullAddress')}
                      />
                      <Input
                        type="text"
                        placeholder="Bairro"
                        required
                        style={{ gridArea: 'neighborhood' }}
                        {...register('neighborhood')}
                      />
                      <Input
                        type="text"
                        placeholder="Cidade"
                        required
                        style={{ gridArea: 'city' }}
                        {...register('city')}
                      />
                      <Input
                        type="text"
                        placeholder="UF"
                        required
                        maxLength={2}
                        style={{ gridArea: 'state' }}
                        {...register('state')}
                      />
                    </AddressForm>
                  </Address>

                  <Payment>
                    <PaymentHeader>
                      <CurrencyDollar size={22} />
                      <div>
                        <span>Pagamento</span>
                        <p>
                          O pagamento é feito na entrega. Escolha a forma que
                          deseja pagar
                        </p>
                      </div>
                    </PaymentHeader>

                    <Controller
                      control={control}
                      name="paymentMethod"
                      render={({ field }) => {
                        return (
                          <PaymentMethods>
                            <PaymentButton
                              htmlFor="credit"
                              selected={field.value === 'credit'}
                            >
                              <input
                                type="radio"
                                {...register('paymentMethod')}
                                id="credit"
                                value="credit"
                                onChange={field.onChange}
                              />
                              <CreditCard size={16} />
                              <span>Cartão de crédito</span>
                            </PaymentButton>

                            <PaymentButton
                              htmlFor="debit"
                              selected={field.value === 'debit'}
                            >
                              <input
                                type="radio"
                                {...register('paymentMethod')}
                                id="debit"
                                value="debit"
                                onChange={field.onChange}
                              />
                              <Bank size={16} />
                              <span>Cartão de débito</span>
                            </PaymentButton>

                            <PaymentButton
                              htmlFor="cash"
                              selected={field.value === 'cash'}
                            >
                              <input
                                type="radio"
                                {...register('paymentMethod')}
                                id="cash"
                                value="cash"
                                onChange={field.onChange}
                              />
                              <Money size={16} />
                              <span>Dinheiro</span>
                            </PaymentButton>
                          </PaymentMethods>
                        )
                      }}
                    />
                  </Payment>
                </form>
              </CheckoutInfos>

              <CheckoutSummary>
                <h2>Cafés selecionados</h2>

                <Summary>
                  <SummaryItems>
                    {coffeesInCart.map((coffee) => (
                      <CartItem key={coffee.id}>
                        <img src={coffee.image} alt={coffee.title} />

                        <Infos>
                          <span>{coffee.title}</span>

                          <Controls>
                            <QuantityControl
                              quantity={coffee.quantity}
                              decrementQuantity={() =>
                                handleItemDecrement(coffee.id)
                              }
                              incrementQuantity={() =>
                                handleItemIncrement(coffee.id)
                              }
                            />
                            <button
                              type="button"
                              onClick={() => handleItemRemove(coffee.id)}
                            >
                              <Trash />
                              <span>Remover</span>
                            </button>
                          </Controls>
                        </Infos>

                        <Price>R$ {priceFormatter(coffee.price)}</Price>
                      </CartItem>
                    ))}
                  </SummaryItems>

                  <SummaryInfos>
                    <div>
                      <span>Total de itens</span>
                      <span>R$ {priceFormatter(totalItemsPrice)}</span>
                    </div>

                    <div>
                      <span>Entrega</span>
                      <span>R$ {priceFormatter(shippingPrice)}</span>
                    </div>

                    <div>
                      <span>Total</span>
                      <span>R$ {priceFormatter(totalOrderPrice)}</span>
                    </div>
                  </SummaryInfos>

                  <CheckoutButton
                    type="submit"
                    form="order"
                    disabled={isSubmitting}
                  >
                    Confirmar pedido
                  </CheckoutButton>
                </Summary>
              </CheckoutSummary>
            </>
          ) : (
            <CartEmpty>
              <h2>O seu carrinho está vazio.</h2>
              <NavLink to="/">
                <ShoppingCart size={28} weight="fill" />
                <span>Continuar comprando</span>
              </NavLink>
            </CartEmpty>
          )}
        </Content>
      </Container>
    </main>
  )
}
