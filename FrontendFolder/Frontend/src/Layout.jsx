//App.js
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function GFGHome() {
    return (
        <div>
            <h2>GeeksforGeeks Home Page</h2>
            <p>Welcome to the GeeksforGeeks Home Page.</p>
        </div>
    );
}
function GFGAbout() {
    return (
        <div>
            <h2>GeeksforGeeks About Page</h2>
            <p>Learn more about GeeksforGeeks and its mission.</p>
        </div>
    );
}
function GFGContact() {
    return (
        <div>
            <h2>GeeksforGeeks Contact Page</h2>
            <p>Contact us for any inquiries or support.</p>
        </div>
    );
}
function NotFound() {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}
function GFGArticles() {
    return (
        <div>
            <h2>GeeksforGeeks Articles Page</h2>
            <p>
                Explore a wide range of informative articles on various computer
                science topics.
            </p>
        </div>
    );
}
function GFGCourses() {
    return (
        <div>
            <h2>GeeksforGeeks Courses Page</h2>
            <p>
                Enroll in comprehensive courses to enhance your coding skills
                and knowledge.
            </p>
        </div>
    );
}
const Layout = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
                <Navbar.Brand>
                    <h1 >ChatFree</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" exact>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                        <NavDropdown title="Resources">
                            <NavDropdown.Item as={Link} to="/articles">
                                Articles
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses">
                                Courses
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      <Outlet />
      {/* This is where the child routes will be rendered */}
    </div>
  );
};

export default Layout;
