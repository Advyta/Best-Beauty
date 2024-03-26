import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PageEnd from './PageEnd';
import { Link } from 'react-router-dom';

export default function NaturalComponent() {
    const allProductsList = useSelector(state => state.products.products);
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);

    const naturalProductsList = allProductsList.filter((product) => product.tag_list.includes('Natural'));
    naturalProductsList.sort((a, b) => b.rating - a.rating);
    const displayedProducts = naturalProductsList.slice(0, 8);
    console.log(naturalProductsList);

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
      } else{
        return (
            <div className='my-5 mx-3'>
              <div className="row justify-content-between">
                <div className="col-2">
                  <h3 className='section-title'>Natural Beauty</h3>
                </div>
                <div className="col-2">
                  <button className='see-more-button'>See more</button>
                </div>
              </div>
              <div className="row mt-4">
                {displayedProducts.map((product) => (
                  <div className="col-sm" key={product.id}>
                    <Card style={{ width: '18rem' }} className='shadow p-3 mb-5 bg-body-tertiary rounded border border-0 rounded-4'>
                    <Card.Img variant="top" src={product.api_featured_image} className='card-img' />
                    <Card.Body>
                      <Card.Text>{product.name}</Card.Text>
                      <div className="row justify-content-between">
                        <div className="col-4 d-flex">
                          <span className='gray circle'><i className="fa-solid fa-circle"></i></span>
                          <Card.Title>{product.price}€</Card.Title>                      
                        </div>
                        <div className="col-4">
                          <Link to={`/DetailsPage/${product.id}`} className='lh-sm details fw-medium'>Details</Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  </div>
                ))}
                
              </div>
              <div className="row">
                <div className="col-md-6 standard-text-bg ps-0">
                  <img alt="cosmetics" className='img-fluid' src="https://media.istockphoto.com/id/1296705483/de/foto/make-up-produkte-prsented-auf-wei%C3%9Fen-podien-auf-rosa-pastell-hintergrund.jpg?s=612x612&w=0&k=20&c=g_q00ARL6-06X-UwbEhFzrVywg8CyA-osuOFWlCDtiQ="  />
                </div>
                <div className="col-md-6 standard-text-bg p-5 text-md-end">
                  <h3 className='standard-text-title'>Elegance that you deserve</h3>
                  <p className='standard-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo neque, aliquam at nulla ut, vestibulum pretium magna. Donec ac euismod urna. Nunc ac leo sit amet velit gravida sodales. 
                    Quisque nec metus massa. Fusce sed felis velit. Pellentesque semper a metus nec placerat. 
                  </p>
                  <p>
                    Mauris commodo ligula neque. Donec non aliquet sem. Integer id egestas erat. Nullam a facilisis diam, vel consectetur lorem. Vestibulum fringilla facilisis imperdiet. Aenean varius augue ultrices lacinia tincidunt. 
                    Mauris eget leo ut elit scelerisque efficitur. 
                  </p>
                </div>
              </div>
              <PageEnd />
            </div>
          )
      }
 
}
