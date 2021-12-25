import React from "react";

function Cart () {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <h2 className="checkout__title">Your Cart</h2>
                </div>
            </div>

            <div className="checkout__right">
                <h2>Total Amount</h2>
            </div>
        </div>
    )
}

export default Cart;