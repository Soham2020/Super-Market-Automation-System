import React from "react";
import { useStateValue } from "../../StateProvider";
import CartProduct from '../Cart/CartProduct';
import './Payment.css';

function Payment () {
    const [ { cart, user }, dispatch ] = useStateValue();
    return(
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Name</p>
                        <p>StreetName</p>
                        <p>Mobile</p>
                        <p>PinCode</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Yours Items</h3>
                    </div>
                    <div className="payment__items">
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

                {/* Payment method using Stripe */}
            </div>
        </div>
    )
}

export default Payment;