import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../features/cartSlice';
import { NavLink } from 'react-router-dom';

export default function CartProducts() {
    const cartProducts = useSelector(state => state.cartContents.cart || []);
    const dispatch = useDispatch();
    console.log(cartProducts);

    const increaseQuantity = (e, product) => {
        e.preventDefault();
        dispatch(incrementQuantity(product));
    }
    const decreaseQuantity = (e, product) => {
        e.preventDefault();
        dispatch(decrementQuantity(product));
    }
    const remove = (e, product) => {
        e.preventDefault();
        dispatch(removeFromCart(product));
    }

    return (
        <div>
            {cartProducts.map((product) => (
                <Card as={NavLink} to={`/DetailsPage/${product.id}`} className='my-3'>
                    <Card.Header as="h5">{product.name}</Card.Header>
                    <Card.Text className='d-flex justify-content-around align-items-center py-2'>
                        <div className="col-sm-2">
                            <img src={product.api_featured_image} alt={product.name} className='cart-product-img'/>
                        </div>
                        <div className="col-sm-1 d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon icon={faMinus} className='cursor plus-minus-icon p-1' onClick={(e) => decreaseQuantity(e, product)} />
                            <p className='m-0 standard-text'>{product.quantity}</p>
                            <FontAwesomeIcon icon={faPlus} className='cursor plus-minus-icon p-1' onClick={(e) => increaseQuantity(e, product)} />
                        </div>
                        <div className="col-sm-2 d-flex justify-content-center">
                            <p className='costOfProduct'>{product.price * product.quantity}€</p>
                        </div>
                        <div className="col-sm-2 d-flex justify-content-center">
                            <Button variant="danger" onClick={(e) => remove(e, product)}>Remove</Button>
                        </div>
                    </Card.Text>
                </Card>
            ))}
        </div>
    )
}