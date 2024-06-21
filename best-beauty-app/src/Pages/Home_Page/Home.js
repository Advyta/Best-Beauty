import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import './Home.css';
import NaturalComponent from './NaturalComponent';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const allProductsList = useSelector(state => state.products.products);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);
  const carouselProductsId = [73, 383, 449];
  const carouselProducts = allProductsList.filter(product => carouselProductsId.includes(product.id));

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
      <>
        <Carousel className='mt-5'>
          {carouselProducts.map((carousel) => (
            <Carousel.Item interval={null} key={carousel.id}>
              <img src={carousel.image_link} alt={carousel.name} className="img-fluid py-4 d-flex carousel-img" />
              <Carousel.Caption className="align-self-center">
                <h3 className="mt-3">{carousel.name}</h3>
                <p className="mb-3">{carousel.description}</p>
                <Button as={NavLink} to={`/DetailsPage/${carousel.id}`} className='see-more-button'>See more</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <NaturalComponent />
      </>
    );
  }
}