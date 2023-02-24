import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Product from '../components/product';
import Cart from '../components/cart';
import Details from '../components/details';

function router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Product />}  />
                <Route path='cart' element={<Cart />}  />
                <Route path='details' element={<Details />}  />
            </Routes>
        </BrowserRouter>
    );
}

export default router;