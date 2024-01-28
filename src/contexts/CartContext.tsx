import { ReactNode, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Item {
  id: string
  quantity: number
}

interface Order {
  id: number
  items: Item[]
  value: number
  cep: string
  street: string
  number: string
  fullAddress?: string | undefined
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

interface CartContextType {
  items: Item[]
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

  const [items, setItems] = useState<Item[]>(itemsInStorage)
  const [orders, setOrders] = useState<Order[]>(ordersInStorage)

  const navigate = useNavigate()

  function addItem(item: Item) {
    const itemExists = items.find((itemInCart) => itemInCart.id === item.id)

    if (itemExists) {
      itemExists.quantity += item.quantity
    } else {
      setItems((state) => [...state, item])
    }
  }

  function removeItem(itemId: string) {
    const itemsWithoutRemoved = items.filter((item) => item.id !== itemId)

    setItems(itemsWithoutRemoved)
  }

  function decrementItemQuantity(itemId: string) {
    const itemToDecrement = items.find((item) => item.id === itemId)

    if (itemToDecrement && itemToDecrement.quantity > 1) {
      itemToDecrement.quantity -= 1
    }

    setItems((state) => [...state])
  }

  function incrementItemQuantity(itemId: string) {
    const itemToIncrement = items.find((item) => item.id === itemId)

    if (itemToIncrement) {
      itemToIncrement.quantity += 1
    }

    setItems((state) => [...state])
  }

  function checkout(order: Order) {
    setOrders((state) => [...state, order])
    setItems([])

    navigate(`/order/${order.id}/success`)
  }

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:cart', JSON.stringify(items))
    localStorage.setItem('@coffee-delivery:orders', JSON.stringify(orders))
  }, [items, orders])

  return (
    <CartContext.Provider
      value={{
        items,
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
