import React from 'react'
import { GiLipstick } from "react-icons/gi";

export default function PageEnd() {
  return (
    <div className="row mt-5">
                <div className="col-md-4 d-flex ">
                  <div className="d-flex align-items-center fs-2 pe-4">
                    <span className='yellow circle last-notes'><i className="fa-solid fa-circle fs-1"></i></span>
                    <i class="fa-solid fa-cart-shopping z-2"></i>
                  </div>
                  <div >
                    <h4 className='pt-1 standard-text-title'>Delivery</h4>
                    <p className='standard-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo neque, aliquam at nulla ut, vestibulum pretium magna. 
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex ">
                  <div className="d-flex align-items-center fs-2 pe-4">
                    <span className='yellow circle last-notes'><i className="fa-solid fa-circle fs-1"></i></span>
                      <span className='z-2 mb-1'><GiLipstick /></span>
                  </div>
                  <div >
                    <h4 className='pt-1 standard-text-title'>Products</h4>
                    <p className='standard-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo neque, aliquam at nulla ut, vestibulum pretium magna. 
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex ">
                  <div className="d-flex align-items-center fs-2 pe-4">
                    <span className='yellow circle last-notes'><i className="fa-solid fa-circle fs-1"></i></span>
                    <i class="fa-solid fa-comment-dollar z-2"></i>
                  </div>
                  <div >
                    <h4 className='pt-1 standard-text-title'>Payments</h4>
                    <p className='standard-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo neque, aliquam at nulla ut, vestibulum pretium magna. 
                    </p>
                  </div>
                </div>
              </div>
  )
}
