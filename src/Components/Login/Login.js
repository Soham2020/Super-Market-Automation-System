import React from "react";
import './Login.css';

function Login () {
    return (
        <div className='login'>
            <img
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
            />
            
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text'  />

                    <h5>Password</h5>
                    <input type='password'  />

                    <button type='submit'  className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    New to App, then register first!
                </p>

                <button  className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;