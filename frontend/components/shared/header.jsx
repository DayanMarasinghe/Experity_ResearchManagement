import React from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

function Header(){
    return(
        <div>
            <Navbar color="light"
                expand="md">
                <NavbarBrand>
                    <h2><b>Experity</b></h2>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }}></NavbarToggler>
                <Collapse navbar>
                    <Nav className="me-auto"
                        navbar>
                        <NavItem>
                            <NavLink href="/supervisordashboard">
                                Supervisor Dashboard
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Student Dahboard
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/userlogin">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/userreg">
                                SignUp
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        
    );
}

export default Header;