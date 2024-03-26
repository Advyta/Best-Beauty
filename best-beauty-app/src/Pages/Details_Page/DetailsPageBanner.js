import React from 'react'
import image from '../../Assets/pexels-suzy-hazelwood-2533266-removebg-preview.png'
import './DetailsPage.css';

export default function DetailsPageBanner() {
  return (
    <div className='pink-background d-flex justify-content-between align-items-center my-4'>
      <div className="col-md-4 d-flex justify-content-end">
        {/* quote */}
        <h1 className='product-name lh-lg'>
          Be natural, <br />
          be beautiful, <br />
          be you.
        </h1>
      </div>
      <div className="col-md-6 d-flex justify-content-end">
        <img src={image} alt='stock' className='img-fluid stock-image' />
      </div>
    </div>
  )
}
