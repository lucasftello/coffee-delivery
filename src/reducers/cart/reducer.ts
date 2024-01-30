import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Item {
  id: string
  quantity: number
}

export interface Order {
  id: number
  items: Item[]
  cep: string
  street: string
  number: string
  fullAddress?: string | undefined
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemExists = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemExists) {
          itemExists.quantity += action.payload.item.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemove = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draft.cart.splice(itemToRemove, 1)
      })
    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToDecrement && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1
        }
      })
    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToIncrement) {
          itemToIncrement.quantity += 1
        }
      })
    case ActionTypes.CHECKOUT:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.cart = []
      })
    default:
      return state
  }
}
