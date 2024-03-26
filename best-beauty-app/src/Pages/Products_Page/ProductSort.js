// ProductSort.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { sortProductsPrice} from '../../features/productsSlice';

export default function ProductSort() {
  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'priceLowToHigh' || selectedValue === 'priceHightoLow' || selectedValue === 'rating') {
      dispatch(sortProductsPrice(selectedValue));
    } 
  };

  return (
    <div>
      <label htmlFor="Sort" className='pe-2 standard-text' >Sort by</label>
      <select name="Sort" onChange={handleSortChange} className='p-2 rounded sorting standard-text'>
        <option value="priceLowToHigh">Prices Low to High</option>
        <option value="priceHightoLow">Prices High to Low</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  );
}
