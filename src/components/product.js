import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './Navbar/navbar';
import './Navbar/navbar.css';
import { useNavigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';


function Product() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const handleGetData = () => {
        axios.get('https://fakestoreapi.com/products/')
            .then((res) => {
                setData(res.data);
                setIsLoading(false);

            }).catch((err) => {
                console.log(err);
                setIsLoading(false);
            })

    }
    useEffect(() => {
        handleGetData();
    }, []);

    const detailCard = (e) => {
        navigate("details", {
            state: e
        })

    }
    const cart = (e) => {
        console.log(e);
        navigate("cart", {
            state: e
        })
    }
    return (

        <div>
            <NavBar />
            {isLoading ? <LinearProgress /> :
                <div className='main-parent'>
                    {
                        data.map((x, i) => {
                            return (
                                <div className="productsCard" key={i}  >
                                    <div className='insideProductCart'>
                                        <div onClick={() => { detailCard(x) }}>
                                        <img src={x.image} />
                                        <div className="title">
                                            {x.title} <br />
                                            {/* <b>sku 000{x.id}</b> */}    
                                        </div>
                                        </div>
                                        <div className='Price'><b><span>Rs: {x.price}</span></b></div>
                                        <div className="btn"> <button onClick={() => { cart(x) }}>Add to cart</button></div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            }
        </div>
    );
}

export default Product;