import React, { useEffect, useState } from 'react';
import { addToCart } from '../../features/cartSlice';
import { Link } from 'react-router-dom';
import { faCircle, faCartShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CartFunctionality({product}) {
    const dispatch = useDispatch();
    const [productQuantity, setProductQuantity] = useState(1);
    const productsInCart = useSelector(state => state.cartContents.cart);

    useEffect(() => {
        const isInCart = productsInCart.find((item) => item.id === product.id)
        if (isInCart) {
            setProductQuantity(isInCart.quantity);
        } else {
            setProductQuantity(1);
        }
    }, [productsInCart, product.id])

    const increaseQuantity = (e) => {
        e.preventDefault(); 
        setProductQuantity(prevQuantity => prevQuantity + 1);
    }
    
    const decreaseQuantity = (e) => {
        e.preventDefault();
        setProductQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : prevQuantity);
    }    

    const addProductToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart({...product, quantity: productQuantity}));
    }    

  return (
    <>
        <div className="col-sm-5">
        <div className="row d-flex ailgn-items-center text-align-center ">
            <div className="col-4 d-flex justify-content-center">
                {/* <button onClick={decreaseQuantity}>-</button> */}
                <FontAwesomeIcon icon={faMinus} className='cursor plus-minus-icon p-1' onClick={decreaseQuantity} />
            </div>
            <div className="col-4 d-flex justify-content-center">
                <p>{productQuantity}</p>
            </div>
            <div className="col-4 d-flex justify-content-center" >
                {/* <button onClick={increaseQuantity}>+</button> */}
                <FontAwesomeIcon icon={faPlus} className='cursor plus-minus-icon p-1' onClick={increaseQuantity} />
            </div>
        </div>
        </div>
        <div className="col-sm-6">

            <div 
            onClick={addProductToCart}
            className='add-to-cart cursor'>
                <FontAwesomeIcon icon={faCircle} className='yellow fs-5'/>
                <FontAwesomeIcon icon={faCartShopping} className='z-2 cart-icon'/>
                <span>Add to Cart</span>
            </div>
            <Link to='/CartPage' className='link-to-cart cursor ps-5'>
                <span>Go to Cart</span>
            </Link>

        </div>
    </>
  )
}
