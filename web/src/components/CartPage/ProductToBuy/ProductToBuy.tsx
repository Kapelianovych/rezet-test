import './ProductToBuy.css';
import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductToBuyController } from '../ProductToBuyController/ProductToBuyController';
import {
  removeProduct,
  ProductToBuyItem,
} from '../../../app/slices/basketSlice';

export function ProductToBuy({ item, count }: ProductToBuyItem) {
  const dispatch = useDispatch();

  return (
    <div className="product-to-buy-item">
      <div className="left-col">
        <div className="image">
          <img src={item.avatar} alt={item.name} />
        </div>
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-description">{item.description}</div>
        </div>
      </div>
      <div className="right-col">
        <ProductToBuyController id={item.id} count={count} />

        <div className="price-block">
          <span className="price-value">{item.price}</span>
          <span className="currency">€</span>
        </div>

        <FontAwesomeIcon
          onClick={() => dispatch(removeProduct(item.id))}
          className="remove-item"
          icon={faTrash}
        />
      </div>
    </div>
  );
}
