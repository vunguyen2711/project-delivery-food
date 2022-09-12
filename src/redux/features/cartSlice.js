import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmountItems: 0,
  totalPriceItems: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const existedItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );
      state.totalAmountItems++;

      if (!existedItem) {
        state.cartItems.push(payload);
      } else {
        existedItem.totalAmount++;
        existedItem.totalPrice += existedItem.price;
      }
      state.totalPriceItems = state.cartItems.reduce((arr, curr) => {
        return arr + curr.totalPrice;
      }, 0);
    },
    deleteItem: (state, { payload }) => {
      const indexDeletedItem = state.cartItems.findIndex(
        (cartItem) => cartItem.id === payload
      );
      state.totalPriceItems -= state.cartItems[indexDeletedItem].totalPrice;
      state.totalAmountItems -= state.cartItems[indexDeletedItem].totalAmount;
      state.cartItems.splice(indexDeletedItem, 1);
    },
    decreaseItem: (state, { payload }) => {
      const existedItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload
      );
      if (existedItem.totalAmount === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem !== existedItem
        );
        state.totalAmountItems -= 1;
        state.totalPriceItems -= existedItem.price;
      } else {
        existedItem.totalAmount -= 1;
        existedItem.totalPrice -= existedItem.price;
        state.totalAmountItems -= 1;
        state.totalPriceItems -= existedItem.price;
      }
    },
  },
});
export const getAllCart = (state) => state.cartReducer;
export const { addItem, decreaseItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
