import React, { useEffect, useState } from "react";
import { auth, db } from '../../firebase';
import { useStateValue } from "../../StateProvider";
import CartProduct from '../Cart/CartProduct';
import './Payment.css';

function Payment () {
    const [ { cart, user }, dispatch ] = useStateValue();
    const [ add, setAdd ] = useState([]);
    const fetchAddress = async () => {
        try {
            await db
                .collection("users")
                .where("uid", "==", user.uid)
                .onSnapshot((snapShot) => {
                    setAdd(snapShot?.docs[0]?.data()?.addressField)
                })
            console.log("Success!");
        }
        catch(error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchAddress();
    }, [user])
    return(
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        {
                            add.map((person) => (
                                <p>{person}</p>
                            ))
                        }
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