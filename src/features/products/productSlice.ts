import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../app/api'

export interface ProductState {
  products: { [id: string]: Product }
}

const initialState: ProductState = {
  products: {

  }
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    recievedProducts(state, action: PayloadAction<Product[]>) {
      // store products in varable;
      const products = action.payload
      // convert an arr to obj
      products.forEach(product => {
        state.products[product.id] = product;
      })
    }
  }
})

// rtk auto generates action creater for each of reducer methods we pass in 
export const { recievedProducts } = productSlice.actions
export default productSlice.reducer