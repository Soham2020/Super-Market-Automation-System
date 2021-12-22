import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Home.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import {db} from '../../firebase';

function Home () {
    
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        // App component will once run when it gets loaded
        db.collection('products').onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(doc => doc.data()))
        }) 
    }, [])
    return (
        <div className='home'>
            <div className='home__container'>
                {/* <img
                    className='home__image' 
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/May_brandstore/Rv1_D23375528_May_SamsungGalaxy-Brand-Store_LP_PC_2.jpg'
                    alt='banner-1'
                /> */}
                <ImageSlider slides = { SliderData } />
                
                <div className='home__row'>
                    {
                        products.map(({ name, price, image }) => (
                            <Product 
                                name = { name }
                                price = { price }
                                image = { image }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;