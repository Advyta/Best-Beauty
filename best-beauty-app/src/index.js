import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { allProducts } from './features/productsSlice';
import { RouterProvider, Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home_Page/Home';
import Products from './Pages/Products_Page/Products';
import DetailsPage from './Pages/Details_Page/DetailsPage';
import NotFoundPage from './Pages/NotFoundPage';
import CartPage from './Pages/Cart/CartPage';

store.dispatch(allProducts());
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home/>} />
      <Route path='Products' element = {<Products/>} />
      <Route path='DetailsPage/:productId' element = {<DetailsPage/>} />
      <Route path='CartPage' element = {<CartPage />} />
      <Route path='*' element = {<NotFoundPage/>} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();