import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';




const NavigationBar = () => {
const {user,logOut} = useContext(AuthContext)

const handleLogOut =()=>{
    logOut()
    .then(()=>{
        console.log('logOutSuccess');
    })
    .catch(error => console.log(error))
}

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                                <Link to='/category/8'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            </Nav.Link>
                                {
                                    user ? <Button variant='secondary' onClick={handleLogOut}>Logout</Button> :
                                        <Link to='/login'><Button variant='secondary'>Login</Button></Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;