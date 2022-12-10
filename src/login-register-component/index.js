import React from 'react';
import {Link} from "react-router-dom";
import NavBar from "../navbar-component";

function LoginRegister() {
    return (
        <>
            <h1>Login or register</h1>
            <Link to="/profile">Login to go to profile</Link>
        </>
    )
}

export default LoginRegister;