import React, { Fragment } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/Navbar";
import Login from "../components/login/Login";

const LoginPage = () => {
    return ( 
        <Fragment>
            <NavBar />
            <Login />
            <Footer />
        </Fragment>
     );
}
 
export default LoginPage;