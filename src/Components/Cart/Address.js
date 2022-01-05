import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { useStateValue } from "../../StateProvider";
import './Address.css';

function Address () {
    const [ { cart, user }, dispatch ] = useStateValue();
    const history = useHistory();
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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(`${name} + ${street} + ${pin} + ${mobile}`);
    //     history.push('/header');

    // }

    const createAddress = async (e) => {
        e.preventDefault();
        try{
            // const newClass = await db.collection("classes").add({
            //     creatorUid: user.uid,
            //     newName: name,
            //     creatorName: user.displayName,
            // });
            const userRef = await db
                .collection("users")
                .where("uid", "==", user.uid)
                .get();
            
            const docId = userRef.docs[0].id;
            const userData = userRef.docs[0].data();
            let userAddress = userData.addressField;

            userAddress.push({
                id: user?.uid,
                newName: name,
                road: street,
                code: pin,
                phone: mobile,
                creatorName: user.displayName,
            });

            const docRef = await db.collection("users").doc(docId);

            await docRef.update({
                addressField: userAddress,
            })
            history.push('/cart');
            console.log("Successfully added adress!");
        } catch(err) {
            history.push('/payment');
            console.log("Error in creating address!");
        }
    }
    return (
        <div className="address">
            <div className="address__container">
                <h2>Address Form</h2>
                <form onSubmit={createAddress}>
                    <h5>Name</h5>
                    <input type='text' name="name" value={name} onChange={handleChangeName}/>

                    <h5>Street-Name</h5>
                    <input type='text' name="street" value={street} onChange={handleChangeStreet}/>

                    <h5>Pincode</h5>
                    <input type='number' name="pinocde" value={pin} onChange={handleChangePin}/>

                    <h5>Mobile No.</h5>
                    <input type= 'number' name="mobile" value={mobile} onChange={handleChangeMobile}/>
                    <button type='submit' className='address__Button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Address;