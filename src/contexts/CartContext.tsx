import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { Item, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addItemAction,
  checkoutAction,
  decrementItemAction,
  incrementItemAction,
  removeItemAction,
} from '../reducers/cart/actions'

interface CartContextType {
  cart: Item[]
  addItem: (item: Item) => void
  removeItem: (itemId: string) => void
  decrementItemQuantity: (itemId: string) => void
  incrementItemQuantity: (itemId: string) => void
  checkout: (order: Order) => void
  orders: Order[]
}

interface CarProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider({ children }: CarProviderProps) {
  const itemsInStorage = JSON.parse(
    localStorage.getItem('@coffee-delivery:cart') || '[]',
  )
  const ordersInStorage = JSON.parse(
    localStorage.getItem('@coffee-delivery:orders') || '[]',
  )

  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: itemsInStorage,
    orders: ordersInStorage,
  })

  const { cart, orders } = cartState

  const navigate = useNavigate()

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: string) {
    dispatch(removeItemAction(itemId))
  }

  function decrementItemQuantity(itemId: string) {
    dispatch(decrementItemAction(itemId))
  }

  function incrementItemQuantity(itemId: string) {
    dispatch(incrementItemAction(itemId))
  }

  function checkout(order: Order) {
    dispatch(checkoutAction(order))

    navigate(`/order/${order.id}/success`)
  }

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:cart', JSON.stringify(cart))
    localStorage.setItem('@coffee-delivery:orders', JSON.stringify(orders))
  }, [cart, orders])

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        decrementItemQuantity,
        incrementItemQuantity,
        checkout,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
