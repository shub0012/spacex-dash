import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
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
                    <Nav.Link href="/all-launches" className="font-weight-bold text-dark" >All Launches</Nav.Link>
                    <Nav.Link href="/ships" className="font-weight-bold text-dark" >Ships</Nav.Link>
                    <Nav.Link href="/rockets" className="font-weight-bold text-dark" >Rockets</Nav.Link>
                    <Nav.Link href="/launchpads" className="font-weight-bold text-dark" >Launchpads</Nav.Link>
                    <Nav.Link href="/landpads" className="font-weight-bold text-dark" >Landpads</Nav.Link>
                    <Nav.Link href="/crew" className="font-weight-bold text-dark" >Crew</Nav.Link>
                    <Nav.Link href="/company-info" className="font-weight-bold text-dark" >About SpaceX</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navi