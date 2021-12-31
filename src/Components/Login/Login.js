import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { auth, provider, fbprovider, db } from "../../firebase";
import './Login.css';

function Login () {
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const signIn = (e) => {
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/header')
            })
            .catch(error => alert(error.message))
    }

    const register = async(e) => {
        e.preventDefault();
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            console.log(res.user);
            const user = res.user;
            console.log(`User ID = ${user.uid}`); 
            const querySnapshot = await db
                .collection("users")
                .where("uid", "==", user.uid)
                .get();
            if(querySnapshot.docs.length === 0) {
                await db.collection("users").add({
                    uid: user.uid,
                    addressField: [],
                    createdAt: new Date(),
                    email: user.email
                })
                console.log("Success!");
            }  
            if(res)
                history.push('/header');         
        } catch(err) {
            alert(err.message);
        }
        
    }

    const signInGoogle = async(e) => {
        e.preventDefault();
        try {
            const res = await auth.signInWithPopup(provider);
            console.log(res.user);
            const user = res.user;
            console.log(`User ID = ${user.uid}`);
            const querySnapshot = await db
                .collection("users")
                .where("uid", "==", user.uid)
                .get();
            if(querySnapshot.docs.length === 0) {
                await db.collection("users").add({
                    uid: user.uid,
                    addressField: [],
                    createdAt: new Date(),
                    email: user.email
                })
                console.log("Success!");
            }
            if(res)
                history.push('/header');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='login'>
            <img
                className="login__logo"
                src='https://github.com/jcpandi/snapdeal/blob/master/img/freeze/snapdeallogo.png?raw=true' 
            />
            
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={handleChangeEmail} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={handleChangePassword} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    New to App, then register first!
                </p>

                <button type='submit' onClick={register} className='login__registerButton'>Create your Account</button>

                <u>
                    Or, Sign In with
                </u>

                <div className="login__authOption">
                    <img
                        className="login__googleAuth"
                        src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                    />
                    <span onClick={signInGoogle}>Continue With Google</span>
                </div>
            </div>
        </div>
    )
}

export default Login;