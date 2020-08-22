import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from './productSlice';
import type { AppStore } from '../store';

export type ProductToBuyItem = { count: number; item: Product };

export type BasketState = {
  productsToBuy: Array<ProductToBuyItem>;
};

const initialState: BasketState = {
  productsToBuy: [],
};

const basketSlice = createSlice({
  name: 'basketProduct',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ProductToBuyItem>) {
      state.productsToBuy.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.productsToBuy = state.productsToBuy.filter(
        (productToBuyInfo) => productToBuyInfo.item.id !== action.payload
      );
    },
    incrementCount(state, action: PayloadAction<number>) {
      state.productsToBuy = state.productsToBuy.map((productToBuyInfo) => {
        if (productToBuyInfo.item.id === action.payload) {
          productToBuyInfo.count++;
        }
        return productToBuyInfo;
      });
    },
    decreaseCount(state, action: PayloadAction<number>) {
      state.productsToBuy = state.productsToBuy.map((productToBuyInfo) => {
        if (productToBuyInfo.item.id === action.payload) {
          productToBuyInfo.count--;
        }
        return productToBuyInfo;
      });
    },
  },
});

export function selectProductsToBuy(state: AppStore) {
  return state.basketProducts.productsToBuy;
}

export function selectCommonPriceOfProductsToBuy(state: AppStore) {
  return state.basketProducts.productsToBuy.reduce(
    (sum, { count, item }) => sum + count * item.price,
    0
  );
}

export const {
  addProduct,
  decreaseCount,
  removeProduct,
  incrementCount,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
