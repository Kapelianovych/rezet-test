import React from 'react';
import Skeleton from 'react-loading-skeleton';

export function SkeletonProductItem() {
  return (
    <div className="product-item">
      <div className="product-item-img">
        <Skeleton style={{ minHeight: '200px' }} height={'100%'} />
      </div>
      <div className="product-item-body">
        <Skeleton />
      </div>
    </div>
  );
}
