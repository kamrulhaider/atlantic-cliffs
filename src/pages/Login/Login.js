import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <div className="login">
            <div>
                <button className="btn btn-warning fw-bold fs-1" onClick={handleGoogleLogin}>Sing in with google</button>
            </div>
        </div>
    );
};

export default Login;