import { ALL_PRODUCTS_URL } from './apiConstants';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { AppStore } from '../store';

export type Product = {
  id: number;
  name: string;
  price: number;
  avatar: string;
  createdAt: string;
  description: string;
};

export type ProductState = {
  products: Array<Product>;
  status: ProductLoadingStatus;
  error?: string;
};

// Gets products from server
export const fetchProducts = createAsyncThunk<Array<Product>>(
  'products/fetchProducts',
  async () => {
    return await fetch(ALL_PRODUCTS_URL).then((responce) => responce.json());
  }
);

export enum ProductLoadingStatus {
  Idle = 'idle',
  Failed = 'failed',
  Loading = 'loading',
  Succeeded = 'succeeded',
}

const initialState: ProductState = {
  products: [],
  status: ProductLoadingStatus.Idle,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (products) => products.id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      return {
        ...state,
        status: ProductLoadingStatus.Loading,
      };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return {
        ...state,
        status: ProductLoadingStatus.Succeeded,
        products: state.products.concat(action.payload),
      };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return {
        ...state,
        status: ProductLoadingStatus.Succeeded,
        error: action.error.message,
      };
    });
  },
});

export function selectAllProducts(state: AppStore) {
  return state.products.products;
}

export function selectProductLoadingStatus(state: AppStore) {
  return state.products.status;
}

export function selectProductErrorMessage(state: AppStore) {
  return state.products.error;
}

export const { filterProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
