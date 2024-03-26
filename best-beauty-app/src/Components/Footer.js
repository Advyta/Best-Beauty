import React from 'react'
import './ComponentsStyle.css'
export default function Footer() {
  return (
    <footer className='m-0 p-5'>
      <div className="row">
        <div className="col-sm-2 col-6 d-flex">
            <h1 className='align-self-center brand'>Best Beauty</h1>
        </div>
        <div className="col-sm-2 col-6 ps-4">
            <h6>About</h6>
            <h6>Careers</h6>
        </div>
        <div className="col-sm-2 col-6">
            <h6>Brands</h6>
            <ul className='footer-list ps-0 cursor'>
                <li>Maybelline</li>
                <li>L’Oréal</li>
                <li>NYX</li>
                <li>Covergirl</li>
                <li>Revlon</li>
                <li>Essie</li>
                <li>Milani</li>
                <li>Physicians Formula</li>
                <li>Wet n Wild</li>
                <li>And many more...</li>
            </ul>
        </div>
        <div className="col-sm-2 col-6">
            <h6>Makup</h6>
            <ul className='footer-list ps-0 cursor'>
                <li>Blush</li>
                <li>Bronzer</li>
                <li>Eyebrow</li>
                <li>Eyeliner</li>
                <li>Eyeshadow</li>
                <li>Foundation</li>
                <li>Lip Liner</li>
                <li>Lipstick</li>
                <li>Mascara</li>
                <li>Nail Polish</li>
            </ul>
        </div>
        <div className="col-sm-2 col-6">
            <h6>Contact</h6>
            <ul className='footer-list ps-0'>
                <li>Carla-Böttcher-Straße 3/4</li>
                <li>24188</li>
                <li>0451 3611840</li>
                <li>eheim@gmail.com</li>
            </ul>
        </div>
        <div className="col-sm-2 col-6">
            <ul className='footer-list text-align-center'>
                <li><i className="fa-brands fa-facebook-f brand-icon"></i></li>
                <li><i className="fa-brands fa-x-twitter brand-icon"></i></li>
                <li><i className="fa-brands fa-instagram brand-icon"></i></li>
            </ul>
        </div>
      </div>
      <p className='d-flex mt-4 mb-0 justify-content-center footnote'>Company Name © 2019</p>
    </footer>
  )
}
