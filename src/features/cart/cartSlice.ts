import { createSelector, createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CartItems, checkout } from '../../app/api'

type CheckoutState = 'Loading' | 'Ready' | 'Error'

// an interface is common way of defining the shape of an object in ts

export interface CartState {
  items: { [productID: string]: number },
  // {  'id':123} key is string and val is number to expect
  checkOut: CheckoutState,
  errorMessage: string | undefined

}
const initialState: CartState = {
  items: {},
  checkOut: 'Ready',
  errorMessage: ''

}
// we can only dispatch action object into redux store but thunk allows to 
//  dispatch multiple actions functions overtime

export const checkoutCart = createAsyncThunk('cart/checkout', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const items = state.cart.items;
  const response = await checkout(items)
  return response
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      // we'd adding id to the cart
      const id = action.payload
      // we include one item into cart
      if (state.items[id]) {
        // inc if exists
        state.items[id]++
      } else {
        state.items[id] = 1
      }
    }
    ,
    deleteItem(state, action: PayloadAction<string>) {
      delete state.items[action.payload]
    },
    updateItemQuantity(state, action: PayloadAction<{ id: string, quantity: number }>) {
      const { id, quantity } = action.payload
      state.items[id] = quantity
    }
  },
  extraReducers: function (builder) {
    builder.addCase(checkoutCart.pending, (state) => {
      state.checkOut = 'Loading'
    })
    builder.addCase(checkoutCart.fulfilled, (state, action: PayloadAction<{ success: boolean }>) => {
      const { success } = action.payload;
      if (success) {

        state.checkOut = 'Ready';
        state.items = {}
      } else {
        state.errorMessage = 'Error'
      }
    })
    builder.addCase(checkoutCart.rejected, (state, action) => {
      state.checkOut = 'Error';
      state.errorMessage = action.error.message
    })

  }

})

// => in redux reducer func processes action passed in redux store and potentialy returns an  updated version of state
// => we break out our store in slices and each slices's reducer is responsible for hadling updates through reducers, (that part of store)
export default cartSlice.reducer

export const { addToCart, deleteItem, updateItemQuantity } = cartSlice.actions

//selector
// a func that taked redux state and any value we want
// useAppSelector allows to pass in a function (selector) and grab values from redux state
// => rerenders our comp everytime state changes 
export function getNumItems(state: RootState) {
  console.log('calling selector')
  let numItems = 0
  for (const id in state.cart.items) {
    numItems += state.cart.items[id]
  }
  return numItems
}

// create memozed selector same as above

export const getMemoizedNumItems = createSelector((state: RootState) => state.cart.items, (items) => {
  console.log('memoized')
  let getNum = 0;
  for (let id in items) {
    getNum += items[id]
  }
  return getNum
})

// getTotal price

export const getTotalPrice = createSelector((state: RootState) => state.cart.items, (state: RootState) => state.products.products, (items, products) => {
  let totalPrice = 0;
  for (let id in items) {
    totalPrice += products[id].price * items[id]
  }
  return totalPrice.toFixed(2) //round to nearest two decimal places
})