import React, { Fragment } from 'react';
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/Navbar";
import Registration from "../components/registration/Registration";

const RegistrationPage = () => {
    return (
        <Fragment>
            <NavBar />
            <Registration />
            <Footer />
        </Fragment>
    );
}

export default RegistrationPage;