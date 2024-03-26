import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const PRODUCTS_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json';
export const allProducts = createAsyncThunk('products/allProducts', async (productType) => {
    try {
        const response = await axios.get(productType ? `${PRODUCTS_URL}?product_type=${productType}` : PRODUCTS_URL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})
const productsSlice = createSlice({
    name: 'products',
    initialState: {products: [], status: 'idle', error: null},
    reducers:{
        sortProductsPrice: (state, action) => {
            const sortedProducts = [...state.products].sort((a, b) => {
                if (action.payload === 'priceLowToHigh') {
                  return a.price - b.price;
                } else if (action.payload === 'priceHightoLow') {
                  return b.price - a.price;
                } else if (action.payload === 'rating'){
                  return b.rating - a.rating;
                }
                else {
                  return a.id - b.id;
                }
              });
              return { ...state, products: sortedProducts };
        },
        
    },
    extraReducers: (builders) => {
        builders
        .addCase(allProducts.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(allProducts.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.products = action.payload;
            // console.log(state.products);
        })
        .addCase(allProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})
export const {sortProductsPrice} = productsSlice.actions;
export default productsSlice.reducer;