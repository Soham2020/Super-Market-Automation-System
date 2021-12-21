import React from 'react';
import './Home.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Home () {
    return (
        <div className='home'>
            <div className='home__container'>
                {/* <img
                    className='home__image' 
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/May_brandstore/Rv1_D23375528_May_SamsungGalaxy-Brand-Store_LP_PC_2.jpg'
                    alt='banner-1'
                /> */}
                <ImageSlider slides = { SliderData } />
            </div>
        </div>
    )
}

export default Home;