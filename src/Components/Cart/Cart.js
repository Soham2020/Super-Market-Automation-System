import React from "react";
import Total from "./Total";
import './Cart.css';

function Cart () {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <h2 className="checkout__title">Your Cart</h2>
                </div>
            </div>

            <div className="checkout__right">
                <Total />
            </div>
        </div>
    )
}

export default Cart;