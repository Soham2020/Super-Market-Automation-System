import React from "react";
import './CartProduct.css';

function CartProduct ({ name, price, image }) {
    return (
        <div className="cartProduct">
            <img
                className="cartProduct__image"
                src={ image }
            />
            <div className="cartProduct__info">
                <p className="checkProduct__name">{ name }</p>
                <p className="checkProduct__price"><small>Rs. </small><strong>{ price }</strong></p>
                <button>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CartProduct;