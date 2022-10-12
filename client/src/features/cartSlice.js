import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total = action.payload.price * action.payload.quantity;
    },
    deleteItem: (state, action) => {
      // const deletingItem = state.products.find(product => product._id === action.payload.id )
      console.log("action.payload", action.payload);
      state.products = state.products.filter(
        (product) => product._id !== action.payload.product._id
      );
      state.quantity -= 1;
      state.total -=
        action.payload.product.quantity * action.payload.product.price;
    },
    incrementCartItem: (state, action) => {
      state.products = state.products.map((product) =>
        product._id === action.payload.id
          ? (product.quantity += action.payload.quantity)
          : product
      );
      console.log("cart item incremented");
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, incrementCartItem, deleteItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
