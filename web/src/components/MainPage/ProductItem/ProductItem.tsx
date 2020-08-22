import './ProductItem.css';
import React from 'react';
import { addProduct } from '../../../app/slices/basketSlice';
import { useDispatch } from 'react-redux';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Product, filterProducts } from '../../../app/slices/productSlice';

export function ProductItem({
  id,
  name,
  price,
  avatar,
  createdAt,
  description,
}: Product) {
  const dispatch = useDispatch();

  function selectProduct() {
    dispatch(
      addProduct({
        item: { id, avatar, name, description, price, createdAt },
        count: 1, // TODO: Maybe it should be refined.
      })
    );
    dispatch(filterProducts(id));
  }

  return (
    <div className="product-item" onClick={selectProduct}>
      <div className="product-item-img">
        <img src={avatar} alt={name} />
        <p className="product-item-name">{name}</p>
        <FontAwesomeIcon className="add-icon" icon={faPlusSquare} />
      </div>
      <div className="product-item-body">
        <p className="product-item-description">{description}</p>
      </div>
    </div>
  );
}
