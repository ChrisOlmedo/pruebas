import React from 'react';
//import { GoogleLogin } from 'react-google-login';

const Login = () => {
    /*const handleLoginSuccess = (response) => {
        console.log('Login Success:', response.profileObj);
        // Handle login success (e.g., save user info, redirect, etc.)
    };

    const handleLoginFailure = (response) => {
        console.log('Login Failed:', response);
        // Handle login failure
    };*/

    return (
        <div className="login-container">
            <h2>Login</h2>
            {/*<GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Login with Google"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={'single_host_origin'}
            />*/}
        </div>
    );
};

export default Login;