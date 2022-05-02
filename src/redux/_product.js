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
      state.listProductAdd.push(action.payload)
    },
    deleteCardProduct: (state, action) => {
      state.listProductAdd.splice(action.payload, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { getDataProduct, addCardProduct, deleteCardProduct } = counterSlice.actions

export default counterSlice.reducer