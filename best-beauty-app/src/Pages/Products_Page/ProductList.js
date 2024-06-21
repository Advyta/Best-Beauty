import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import './Products.css';
import PaginationComponent from './PaginationComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const productsList = useSelector(state => state.products.products);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsList.slice(indexOfFirstProduct, indexOfLastProduct);
  let totalPages = Math.ceil(productsList.length / productsPerPage);

  console.log(productsList);

  if (status === 'loading') {
    return (
      <div className="container">
        <div className="row justify-content-center my-5 py-5">
          <Spinner animation="border" />
        </div>
      </div>
    )
  } else if (status === 'failed') {
    return <div>{error}</div>;
  } else {
    return (
      <div className='row'>
        {currentProducts.map((product) => (
          <div className="col-sm" key={product.id}>
            <Card style={{ width: '15rem' }} className='shadow p-3 mb-5 bg-body-tertiary rounded border border-0 rounded-4'>
              <Card.Img variant="top" src={product.api_featured_image} className='card-img' />
              <Card.Body>
                <Card.Text className='text-capitalize'>{product.name}</Card.Text>
                <div className="row">
                  <div className="col-9">
                    <Card.Text className='text-capitalize fw-light lh-sm product-brand mb-1'>from {product.brand}</Card.Text>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <Card.Text className='m-0 pe-1'>
                      {product.rating}
                    </Card.Text>
                    <Card.Text>
                      {product.rating ? (<FontAwesomeIcon icon={faStar} className='golden' />) : ''}
                    </Card.Text>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center">
                  <div className="col-4 d-flex p-0">
                    <span className='gray circle' style={{ left: '12px' }}><i className="fa-solid fa-circle"></i></span>
                    <Card.Title>{product.price}€</Card.Title>
                  </div>
                  {/* opens product details page */}
                  <div className="col-4">
                    <Link to={`/DetailsPage/${product.id}`} className='lh-sm details fw-medium'>Details</Link>
                  </div>
                  {/* hide and show only when the item is in the cart */}
                  {/* <div className="col-3 align-items-center cart">
                      <span className='yellow circle'><i className="fa-solid fa-circle"></i></span>
                      <i className="fa-solid fa-cart-shopping z-2"></i>
                    </div> */}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
        <div className="row justify-items-center">
          <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
      </div>
    );
  }
}