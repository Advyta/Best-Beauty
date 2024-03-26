import React from 'react'
import CartProducts from './CartProducts'
import CartCost from './CartCost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import PageEnd from '../Home_Page/PageEnd';
import Button from 'react-bootstrap/esm/Button';
import cartImg from '../../Assets/istockphoto-1257717062-1024x1024.jpg'
import { Link } from 'react-router-dom';

export function CartHeading() {
  return (
    <>
      <div className="row my-4 d-flex">
        <div className="col-1 d-flex align-items-center fs-2 pe-4">
          <span className='yellow circle last-notes'>
            <FontAwesomeIcon icon={faCircle} className='fs-1' />
          </span>
          <FontAwesomeIcon icon={faCartShopping} className='z-2' />
        </div>
        <div className="col">
          <h1 className='standard-text-title'>Your Cart</h1>
        </div>
      </div>
      
    </>
  );
}
export function EmptyCart() {
  return (
    <>
      <div className="row d-flex">
        <div className="col-md-4">
          <h3 className='standard-text ps-5'>Your cart is empty!</h3>
        </div>
        <div className="col-md">
          <Link to='/Products'>
            <Button className='yellow-bg border-0'>Continue Shopping</Button>
          </Link>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <img src={cartImg} alt="cart" className='img-fluid cart-image' />
      </div>
    </>
  );
}

export default function CartPage() {
  const cartProducts = useSelector(state => state.cartContents.cart || []);
  
  if (cartProducts.length === 0) {
    return (
      <>
        <CartHeading />
        <EmptyCart />
        <PageEnd />
      </>
    )
  } else {
    return (
      <>
        <CartHeading />
        <CartProducts/>
        <CartCost/>
        <PageEnd />
      </>
    )
  }
}
