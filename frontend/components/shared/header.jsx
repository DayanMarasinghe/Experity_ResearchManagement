import React from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

function Header(){
    return(
        <div>
            <Navbar color="light"
                expand="md">
                <NavbarBrand>
                    <h2 style={{color:"#0d6efd"}}><b>Experity</b></h2>
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

       
                            <NavLink href="/studentdashboard">
                                Student Dahboard

                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/pmdashboard">
                                Panel Member Dashboard
                            </NavLink>
                        </NavItem>

                            <NavLink href="/">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/userreg">
                                SignUp
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavItem>
                            <NavLink href="/">
                                Logout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        
    );
}

export default Header;