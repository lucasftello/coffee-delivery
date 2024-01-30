import { Item, Order } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  CHECKOUT = 'CHECKOUT',
}

export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function decrementItemAction(itemId: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function incrementItemAction(itemId: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function checkoutAction(order: Order) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      order,
    },
  }
}
