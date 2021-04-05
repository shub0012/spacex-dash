import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import useStyles from './styles'

const Navi = () => {
    const classes = useStyles()

    return (
            <Navbar collapseOnSelect expand="lg"  className={classes.glassEffect} sticky="top" >
                <Navbar.Brand href="/all-launches" className="h1">SpaceX-DasH</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    <Nav.Link href="/all-launches" className="font-weight-bold text-dark" >All Launches</Nav.Link>
                    <Nav.Link href="/rockets" className="font-weight-bold text-dark" >Rockets</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navi