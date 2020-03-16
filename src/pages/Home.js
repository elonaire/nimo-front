import React, { Fragment } from "react";
import NavBar from "../components/nav/Navbar";
import ProductNav from "../components/product-nav/ProductNav";
import Product from "../components/product/Product";
import Footer from "../components/footer/Footer";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    footer: {
        position: 'fixed',
        bottom: '0'
    },
    products: {
        marginTop: '2%'
    },
    sectionHeader: {
        color: '#e08455',
        // backgroundColor: ''
    },
    product: {
        textDecoration: 'none',
        marginLeft: '2%',
        '&:hover': {
            textDecoration: 'none',
        }
    }
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <NavBar></NavBar>
            <Container maxWidth="lg">
                <ProductNav></ProductNav>
            </Container>
            <Container maxWidth="lg">
                <Card className={classes.products}>
                    <Typography className={classes.sectionHeader} variant="h4" gutterBottom>
                        Products from Nimo Naturals
                    </Typography>
                    <Divider />
                    <CardContent>
                        <Grid container spacing={1}>

                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((p, index) => (
                                    <Link key={index} className={classes.product} color="inherit" href="https://material-ui.com/">
                                        <Grid item xs>
                                            <Product />
                                        </Grid>
                                    </Link>

                                ))
                            }

                        </Grid>
                    </CardContent>
                    <CardActions disableSpacing>

                    </CardActions>
                </Card>
            </Container>
            <Divider />
            <Footer className={classes.footer}></Footer>
        </Fragment>
    );
}

export default HomePage;