import React from "react";
import { useStateValue } from "../../StateProvider";
import './CartProduct.css';

function CartProduct ({ name, price, image }) {
    const [ { cart }, dispatch ] = useStateValue();
    const removeItem = () => {
        // reomve from the cart
        dispatch({
            type: "REMOVE_FROM_CART",
            name: name,
        })
    }
    return (
        <div className="cartProduct">
            <img
                className="cartProduct__image"
                src={ image }
            />
            <div className="cartProduct__info">
                <p className="checkProduct__name">{ name }</p>
                <p className="checkProduct__price"><small>Rs. </small><strong>{ price }</strong></p>
                <button onClick={removeItem}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CartProduct;