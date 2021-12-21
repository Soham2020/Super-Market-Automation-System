import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { SliderData } from './SliderData';
import './ImageSlider.css'

function ImageSlider({ slides }) {
    const [ current, setCurrent ] = useState(0);
    const length = slides.length;

    useEffect(() => {
        if(current < 0)
            setCurrent(length - 1);
        if(current > length-1)
            setCurrent(0);
    }, [ current, length-1 ])

    useEffect(() => {
        let slider = setInterval(() => {
            setCurrent(current + 1)
        }, 4500);
        return () => clearInterval(slider)
    }, [current])

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
  return (
    <>
        <FaAngleLeft className='left-arrow' onClick={prevSlide} />
        <FaAngleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slider, key) => {
            return (
                <div className={key === current ? 'slide active' : 'slide'} key={key}>
                    {key === current && (
                        <img src={slider.img} alt='travel image' className='logo' />
                    )}
                </div>
            )
        })}
    </>
  );
}

export default ImageSlider;
