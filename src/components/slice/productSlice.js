import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id);
      if(findProduct !== -1){
        state.cartItem[findProduct].qun += 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }else{
          state.cartItem = [...state.cartItem, action.payload]
          localStorage.setItem("cart", JSON.stringify(state.cartItem))

      }
    },

    productIncrement: (state, action)=>{
      state.cartItem[action.payload].qun += 1
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },

    productDecrement: (state, action)=>{
        state.cartItem[action.payload].qun > 1 ? state.cartItem[action.payload].qun -= 1 : "", localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },

    productRemove: (state, action) =>{
      state.cartItem.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, productIncrement, productDecrement, productRemove } = productSlice.actions

export default productSlice.reducer