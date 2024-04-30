import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './DetailsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import DOMPurify from 'dompurify';
import DetailsPageBanner from './DetailsPageBanner';
import PageEnd from '../Home_Page/PageEnd';
import CartFunctionality from './CartFunctionality';

export default function DetailsPage() {
  const productDetails = useSelector(state => state.products.products);
  const { productId } = useParams();
  const productIdNumber = Number(productId);
  const product = productDetails.find(product => product.id === productIdNumber);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Sanitize description only if product exists
  const sanitizedDescription = DOMPurify.sanitize(product.description);

  return (
    <div className='mt-5'>
      <h1 className='product-name'>{product.name}</h1>
      <div className="row mb-2">
        <div className="col-md-6">
          <img src={product.api_featured_image} alt={product.name} className='img-fluid details-img' />
        </div>
        <div className="col-md-6">
          <h1 className='product-name py-4'>{product.name}</h1>
          <div className="row">
            <div className="d-flex align-items-center pb-4 col-sm-6">
              <span className='gray circle' style={{left: '12px'}}><FontAwesomeIcon className='circle-icon' icon={faCircle} /></span>
              <span className='price standard-text fs-5'>
                {product.price}€
              </span>
            </div>
            <div className="col-sm-6">
              <div className="row justify-content-between ailgn-items-center">
                <CartFunctionality product={product} />
              </div>
            </div>
            {/* Add to cart and counter */}
          </div>
          {product.product_colors.length !== 0 ? (
            <div className="row pb-4">
              <h1 className='standard-text fs-6'>Available in</h1>
              <div className="row px-4">
                {product.product_colors.map((color) => (
                  <OverlayTrigger
                    key={color.hex_value} // Added key prop
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        {color.colour_name}
                      </Tooltip>
                    }>
                    <div className="col-auto color-options" >
                      <FontAwesomeIcon style={{ color: `${color.hex_value}` }} icon={faCircle} className='border rounded-circle border-dark-subtle' />
                    </div>
                  </OverlayTrigger>
                ))}
              </div>
            </div>
          )
            : null // Simplified empty condition
          }
          <div className="row">
            <h1 className='product-name'>Product Description</h1>
            <p className='standard-text lh-lg' dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <PageEnd />
        <DetailsPageBanner />
      </div>
    </div>
  )
}
