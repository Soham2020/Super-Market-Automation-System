import React, { useEffect, useState } from "react";
import { auth, db } from '../../firebase';
import { useStateValue } from "../../StateProvider";
import { getTotal } from '../../reducer'; 
import CartProduct from '../Cart/CartProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
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
            console.log(`${user.uid}`)
        }
        catch(error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchAddress();
    }, [user])

    // Payment area ^_^
    const stripe = useStripe();
    const element = useElements();
    const [ successed, setSuccessed ] = useState(false);
    const [ processing, setProcessing ] = useState(""); 
    const [ error, setError ] = useState(null);
    const [ disabled, setDisabled ] = useState(true);
    const handleSubmit = (e) => {
        // all stripe stuffs
    }
    const handleChange = (e) => {
        // all changes in CardElement
        // display errors
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
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
                                <>
                                <p>Name: {person.creatorName}</p>
                                <p>Street: {person.road}</p>
                                <p>Pincode: {person.code}</p>
                                <p>Mobile: {person.phone}</p>
                                </>
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
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Make Payment</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                    <>
                                        <p>
                                        Subtotal ({ cart.length } items): <strong>{ value }</strong>
                                        </p>
                                    </>
                                    )}
                                    decimalScale = {2}
                                    value={getTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    intlConfig={{ locale: 'en-IN', currency: 'INR' }}
                                    prefix={'Rs '}
                                />
                                <button disabled={ processing || disabled || successed }>
                                    <span>{processing ? <p>Processing</p> : "Pay"}</span>
                                </button>
                            </div>
                            { error && <div>{error}</div> }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;