import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import useStyles from './styles'

const Navi = () => {
    const classes = useStyles()

    return (
            <Navbar collapseOnSelect expand="lg"  className={classes.glassEffect} sticky="top" >
                <Navbar.Brand href="/" className="h1">SpaceX-DasH</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                   <Nav.Link   className="font-weight-bold text-dark"  ><Typography component={Link} to="/all-launches" variant="button" color="textPrimary" style={{textDecoration:'none', fontWeight:'bold'}}>All Launches</Typography></Nav.Link>
                    <Nav.Link   className="font-weight-bold text-dark" ><Typography component={Link} to="/ships" variant="button" color="textPrimary" style={{textDecoration:'none', fontWeight:'bold'}}>Ships</Typography></Nav.Link>
                    <Nav.Link   className="font-weight-bold text-dark" ><Typography component={Link} to="/rockets" variant="button" color="textPrimary" style={{textDecoration:'none', fontWeight:'bold'}}>Rockets</Typography></Nav.Link>
                    <Nav.Link   className="font-weight-bold text-dark" ><Typography component={Link} to="/launchpads" variant="button" color="textPrimary" style={{textDecoration:'none', fontWeight:'bold'}}>Launchpads</Typography></Nav.Link>
                    <Nav.Link   className="font-weight-bold text-dark" ><Typography component={Link} to="/landpads" variant="button" color="textPrimary" style={{textDecoration:'none', fontWeight:'bold'}}>Landpads</Typography></Nav.Link>
                    <Nav.Link   className="font-weight-bold text-dark" ><Typography component={Link} to="/crew" variant="button" color="textPrimary" style={{textDecoration:'none', fontWeight:'bold'}}>Crew</Typography></Nav.Link>
                    <Nav.Link  className="font-weight-bold text-dark" ><Typography component={Link} to="/company-info" variant="button" color="textPrimary" style={{textDecoration:'none', fontWeight:'bold'}}>About SpaceX</Typography></Nav.Link>
                </Nav> 
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navi