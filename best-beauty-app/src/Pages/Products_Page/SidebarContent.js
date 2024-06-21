import './Products.css';
import { useDispatch } from 'react-redux';
import { allProducts } from '../../features/productsSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, tags } from './Product_Types/ProductSearchParameters';

export default function SidebarContent() {
  const dispatch = useDispatch();
  const [isActivecategory, setIsActivecategory] = useState(null);
  // const [selectedProductType, setSelectedProductType] = useState(null);
  // const [selectedTags, setSelectedTags] = useState([]);

  const filterProducts = (productType, index) => {
    setIsActivecategory(index);
    dispatch(allProducts( productType));
  }

  // const toggleTag = (tag) => {
  //   const productTags = selectedTags.includes(tag)
  //     ? selectedTags.filter(selectedTag => selectedTag !== tag)
  //     : [...selectedTags, tag];
  //   setSelectedTags(productTags);
  //   dispatch(allProducts({ productType: selectedProductType, productTags: productTags }));
  // }

  return (
    <div>
      <ul className='sidebar-list ps-2'>
        <li>
          <span className='fw-bolder'>Categories</span>
          <ul className="sidebar-list ps-0">
            {categories.map((category, index) => (
              <Link to='/Products' className='category-links' key={index}>
                <li className={`py-2 ps-3 cursor sidebar-item${index === isActivecategory ? '-selected' : ''}`} onClick={() => filterProducts(category.value, index)} >
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        {/* <li className=' pt-3'>
          <span className='fw-bolder'>Tags</span>
          <ul className="sidebar-list ps-0">
            {tags.map((tag, index) => (
              <Link to='/Products' className='category-links' key={index}>
                <li className={`py-1 ps-3 cursor sidebar-item${selectedTags.includes(tag.value) ? '-selected' : ''}`}
                  // onClick={() => toggleTag(tag.value)}
                  >
                  {tag.name}
                </li>
              </Link>
            ))}
          </ul>
        </li> */}
      </ul>
    </div>
  );
}