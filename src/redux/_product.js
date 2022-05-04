import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listProduct : [],
  couter: 0,
  listProductAdd: []
}

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getDataProduct: (state, action) => {
      
      state.listProduct = action.payload
    },
    addCardProduct: (state, action) => {
      const product = {
        product: action.payload.item,
        quality: action.payload.quanlity
      }
      const result = state.listProductAdd.filter((product) => {
        return product.product.id === action.payload.item.id
      })
      if(result.length === 0) {
        state.listProductAdd.push(product)
      }
    },
    deleteCardProduct: (state, action) => {
      state.listProductAdd.splice(action.payload, 1)
    },
    updateQuantity: (state, action) => {
      // state.listProductAdd.product.quality = action.payload
      // console.log(state.listProductAdd.product);
    }
  },
})

// Action creators are generated for each case reducer function
export const { getDataProduct, addCardProduct, deleteCardProduct, updateQuantity } = counterSlice.actions

export default counterSlice.reducer