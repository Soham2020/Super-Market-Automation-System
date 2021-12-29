import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getTotal } from '../../reducer';
import './Total.css';

function Total () {
    const history = useHistory();
    const [ { cart }, dispatch ] = useStateValue();
    const handleClick = () => {
        history.push('/payment');
    }
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
            <button onClick={handleClick}>Proceed to Checkout</button>
        </div>
    )
}

export default Total;