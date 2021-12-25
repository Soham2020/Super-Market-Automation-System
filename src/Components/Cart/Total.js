import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Total.css';

function Total () {
    return(
        <div className='total'>
            <CurrencyFormat 
                renderText={(value) => (
                <>
                    <p>
                    Subtotal (0 items): <strong>0</strong>
                    </p>
                </>
                )}
                decimalScale = {2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'Rs'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Total;