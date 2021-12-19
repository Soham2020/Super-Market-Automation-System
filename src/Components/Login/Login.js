import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { auth, provider, fbprovider } from "../../firebase";
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

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth) {
                    history.push('/header');
                }
            })
            .catch(error => alert(error.message))
        
    }

    const signInGoogle = (e) => {
        auth
            .signInWithPopup(provider)
            .then((auth) => {
                console.log(auth);
                history.push('/header');
            })
            .catch(error => alert(error.message))
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