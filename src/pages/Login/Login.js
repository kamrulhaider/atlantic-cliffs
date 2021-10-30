import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login">
            <div>
                <button className="btn btn-warning" onClick={signInUsingGoogle}>Sing in with google</button>
            </div>
        </div>
    );
};

export default Login;