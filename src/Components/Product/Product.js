import React from "react";
import './Product.css';

function Product ({ name, price, image }) {
    return(
        <div className="product">
            <div className="product__info">
                <strong> { name } </strong>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong> { price } </strong>
                </p>
            </div>
            <img 
                src={ image }
                alt="p-img"
            />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product;