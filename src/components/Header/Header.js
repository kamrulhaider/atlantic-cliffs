import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold">Atlantic Cliffs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/services">Services</Link>

                            {user?.email ?
                                <Nav.Link as={Link} to="/orders">Total Orders</Nav.Link>
                                :
                                <></>
                            }

                            {user?.email ?
                                <Nav.Link as={Link} to="/myOrder">My Orders</Nav.Link>
                                :
                                <></>
                            }

                            {user?.email ?
                                <Nav.Link as={Link} to="/new">Add new</Nav.Link>
                                :
                                <></>
                            }

                        </Nav>
                    </Navbar.Collapse>
                    <div className="me-auto">
                        <Navbar.Text className="text-warning fw-bold">{user?.displayName}</Navbar.Text>
                        {user?.email ?
                            <button onClick={logOut} className="btn btn-outline-success ms-3 my-3">Logout</button> :
                            <Nav.Link as={Link} className="text-success" to="/login">Login</Nav.Link>
                        }
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;