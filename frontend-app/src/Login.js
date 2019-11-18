import React from 'react';
import './App.css';
import LoginForm from "./Login-Form";


function Login() {
    return (
        <div className="login">

            <header className="login-header">
                <h1 className={"login-welcome"}> Welcome Back</h1>
                <p className={"login-text"}>Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
            </header>
            <div className={"login-body"}>
                <div className={"login-form-section"}>
                    <LoginForm/>
                </div>
                <div className={"login-form-links"}>
                    <div><a href="http://www.google.com"> Forgot Password?</a> </div>
                    <p>New to LaBori? <a href="http://google.com">Join now</a></p>
                </div>
            </div>
        </div>
);
}

export default Login;