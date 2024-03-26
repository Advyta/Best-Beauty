import './Products.css'
import stock_image from '../../Assets/pexels-ray-piedra-2721977.jpg'

export default function ProductsBanner() {
  return (
    <div className='row product-banner p-4 justify-content-around align-items-center'>
      <div className="col-sm-6 text-md-center">
        <h3>Be the best you!</h3>
        <p>Skin & Beauty</p>
      </div>
      <div className="col-sm-2">
        <img className='img-fluid banner-img' src={stock_image} alt="stock cosmetics" />
      </div>
    </div>
  )
}
