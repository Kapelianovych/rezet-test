import './MainPage.css';
import React, { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { ProductItem } from './ProductItem/ProductItem';
import { SkeletonProductItem } from './SkeletonProductItem/SkeletonProductItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
  ProductLoadingStatus,
  selectProductErrorMessage,
  selectProductLoadingStatus,
} from '../../app/slices/productSlice';

export function MainPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductLoadingStatus);
  const error = useSelector(selectProductErrorMessage);

  useEffect(() => {
    if (status === ProductLoadingStatus.Idle) {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className={'main-page ' + status}>
      {status === ProductLoadingStatus.Loading ? (
        <div className="products skeleton">
          {Array(20)
            .fill(null)
            .map(() => (
              <SkeletonProductItem key={nanoid()} />
            ))}
        </div>
      ) : status === ProductLoadingStatus.Succeeded ? (
        <div className="products">
          {products.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        error
      )}
    </div>
  );
}
