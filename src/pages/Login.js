import React, { Fragment } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/Navbar";
import Login from "../components/login/Login";

const LoginPage = (props) => {
    return ( 
        <Fragment>
            <NavBar />
            <Login history={props.history} />
            <Footer />
        </Fragment>
     );
}
 
export default LoginPage;