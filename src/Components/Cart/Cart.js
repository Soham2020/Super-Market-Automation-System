import React from "react";
import Total from "./Total";
import './Cart.css';
import { useStateValue } from "../../StateProvider";
import CartProduct from "./CartProduct";

function Cart () {
    const [ { cart }, dispatch ] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <h2 className="checkout__title">Your Cart</h2>
                    {
                        cart.map(item => (
                            <CartProduct 
                                name={item.name}
                                price={item.price}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="checkout__right">
                <Total />
            </div>
        </div>
    )
}

export default Cart;