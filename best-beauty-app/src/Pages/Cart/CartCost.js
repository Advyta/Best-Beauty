import React from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { costOfProduct } from '../../features/cartSlice';

export default function CartCost() {
    const totalProductCost = useSelector(costOfProduct);
    console.log(totalProductCost);
  return (
    <div className='row justify-content-around mb-5 mt-4 align-items-center'>
      <div className="col-md-4 align-items-center">
        <p className='standard-text m-0 fs-5'>Total: <span className='ps-2'>{totalProductCost}€</span></p>
      </div>
      <div className="col-md-2">
        <Button variant="secondary">Checkout</Button>
      </div>
      <hr className='mt-4' />
    </div>
  )
}
