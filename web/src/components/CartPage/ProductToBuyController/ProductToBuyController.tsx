import './ProductToBuyController.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { decreaseCount, incrementCount } from '../../../app/slices/basketSlice';

export function ProductToBuyController({
  id,
  count,
}: {
  id: number;
  count: number;
}) {
  const dispatch = useDispatch();

  const minValue = 1;
  const maxValue = 50;

  return (
    <div className="product-to-buy-controller">
      <button
        className="btn decrease-items-btn"
        onClick={() => {
          dispatch(decreaseCount(id));
        }}
        disabled={count === minValue}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input type="number" readOnly value={count} className="items-count" />
      <button
        className="btn increase-items-btn"
        onClick={() => {
          dispatch(incrementCount(id));
        }}
        disabled={count === maxValue}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
