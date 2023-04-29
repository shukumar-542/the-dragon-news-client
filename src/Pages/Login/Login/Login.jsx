import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const { loggedInUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/category/8"
    console.log(from);

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        setSuccess('')
        loggedInUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, {replace:true})
                setSuccess('user Logged in successfully')

                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {success}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;