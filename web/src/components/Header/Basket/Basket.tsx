import './Basket.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { selectProductsToBuy } from '../../../app/slices/basketSlice';

export function Basket() {
  const productsToBuy = useSelector(selectProductsToBuy);

  return (
    <Link to="/cart" className="basket-container">
      <span className="products-count">{productsToBuy.length}</span>
      <FontAwesomeIcon className="basket" icon={faShoppingBasket} />
    </Link>
  );
}
