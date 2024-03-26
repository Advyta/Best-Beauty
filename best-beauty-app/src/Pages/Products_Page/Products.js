import React from 'react'
import ProductsBanner from './ProductsBanner';
import ProductsSidebar from './ProductsSidebar';
import ProductList from './ProductList';
import ProductSort from './ProductSort';

export default function Products() {
  return (
    <div>
      <ProductsBanner />
      <div className="row mt-4 justify-content-between">
        <div className="col-md-3">
          <ProductSort/>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2 border-end">
            <ProductsSidebar />
        </div>
        <div className="col-10">
            <ProductList />
        </div>
      </div>
    </div>
  )
}
