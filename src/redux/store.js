import { configureStore } from '@reduxjs/toolkit'
import product from './_product.js'


export const store = configureStore({
  reducer: {
    product: product
  },
})