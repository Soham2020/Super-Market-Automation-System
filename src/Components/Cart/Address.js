import React, { useState } from "react";
import './Address.css';

function Address () {
    const [ name, setName ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ pin, setPin ] = useState(0);
    const [ mobile, setMobile ] = useState(0);

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeStreet = (e) => {
        setStreet(e.target.value);
    }
    const handleChangePin = (e) => {
        setPin(e.target.value);
    }
    const handleChangeMobile = (e) => {
        setMobile(e.target.value);
    }
    return (
        <div className="address">
            <div className="address__container">
                <h2>Address Form</h2>
                <form>
                    <h5>Name</h5>
                    <input type='text' value={name} onChange={handleChangeName}/>

                    <h5>Street-Name</h5>
                    <input type='text' value={street} onChange={handleChangeStreet}/>

                    <h5>Pincode</h5>
                    <input type='number' value={pin} onChange={handleChangePin}/>

                    <h5>Mobile No.</h5>
                    <input type= 'number' value={mobile} onChange={handleChangeMobile}/>
                    <button type='submit' className='address__Button'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Address;