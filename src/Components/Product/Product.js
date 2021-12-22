import React from "react";
import './Product.css';

function Product () {
    return(
        <div className="product">
            <div className="product__info">
                <p>Apple iPad Air</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong>54000</strong>
                </p>
            </div>
            <img 
                src="https://m.media-amazon.com/images/I/41mowAbHhkL._AC_SY200_.jpg"
                alt="p-img"
            />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product;