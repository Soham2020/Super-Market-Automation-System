import React from "react";
import Total from "./Total";
import './Cart.css';
import { useStateValue } from "../../StateProvider";
import CartProduct from "./CartProduct";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cart () {
    const [ { cart, user }, dispatch ] = useStateValue();
    const history = useHistory();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <h2 className="checkout__title">Your Cart</h2>
                    <p>Hello, { user?.email } </p>
                    <small>Didn't Add your Address still now <button className="checkout__btn"
                        onClick={e => history.push('/address')}
                    >Click Here</button></small>
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