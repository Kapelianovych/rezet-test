import './CartPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProductToBuy } from './ProductToBuy/ProductToBuy';
import {
  selectProductsToBuy,
  selectCommonPriceOfProductsToBuy,
} from '../../app/slices/basketSlice';

export function CartPage() {
  const productsToBuy = useSelector(selectProductsToBuy);
  const productsToBuyPrice = useSelector(selectCommonPriceOfProductsToBuy);

  return (
    <div className="cart-page">
      {productsToBuy.length > 0 ? (
        <div className="buy-form">
          {productsToBuy.map((productInfo) => (
            <ProductToBuy key={productInfo.item.id} {...productInfo} />
          ))}
          <p className="common-price">
            {productsToBuyPrice}
            <span className="currency">€</span>
          </p>
          <Link className="btn buy-btn" to="/shipping">
            Buy
          </Link>
        </div>
      ) : (
        <p className="no-products-to-buy">
          You did not choose products to buy.
        </p>
      )}
    </div>
  );
}
