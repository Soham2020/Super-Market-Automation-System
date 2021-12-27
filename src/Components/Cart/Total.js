import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getTotal } from '../../reducer';
import './Total.css';

function Total () {
    const [ { cart }, dispatch ] = useStateValue();
    return(
        <div className='total'>
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
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Total;