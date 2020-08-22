import { configureStore } from '@reduxjs/toolkit';
import { basketReducer, BasketState } from './slices/basketSlice';
import { productReducer, ProductState } from './slices/productSlice';

export type AppStore = {
  products: ProductState;
  basketProducts: BasketState;
};

export default configureStore<AppStore>({
  reducer: {
    products: productReducer,
    basketProducts: basketReducer,
  },
});
