import './Products.css';
import { useDispatch } from 'react-redux';
import { allProducts } from '../../features/productsSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SidebarContent() {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState();

    const catagories = [
      {
        name: 'Eyeliner',
        value: 'eyeliner'
      },
      {
        name: 'Eyeshadow',
        value: 'eyeshadow'
      },
      {
        name: 'Mascara',
        value: 'mascara'
      },
      {
        name: 'Blush',
        value: 'blush'
      },
      {
        name: 'Bronzer',
        value: 'bronzer'
      },
      {
        name: 'Foundation',
        value: 'foundation'
      },
      {
        name:'Lip Liner',
        value: 'lip_liner'
      },
      {
        name: 'Lipstick',
        value: 'lipstick'
      },
      {
        name: 'Nail Polish',
        value: 'nail_polish'
      }
    ];

    const filterProducts = (productType, index) => {
      console.log(productType);
      dispatch(allProducts(productType));
      setIsActive(index);
    }
    return (
      <div>
        <ul className="sidebar-list ps-0">
          {catagories.map((catagory, index) => (
            <Link to='/Products' className='catagory-links'>
              <li key={index} className={`py-2 ps-3 cursor sidebar-item${index === isActive ? '-selected' : ''}`} onClick={() => filterProducts(catagory.value, index)} >
                {catagory.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }