import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const {createUser}  = useContext(AuthContext)
    const [error, setError ] = useState('');
    const [success, setSuccess] =  useState('');
    const [accepted, setAccepted] = useState(false)
    const handleRegisterForm = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        form.reset('')
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('')

            
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage)
        })

        // console.log(name, email, password, photo);
    }
    const handleTermsCondition =(e)=>{
        setAccepted(e.target.checked);
    }

    return (
        <Container className='w-25 mx-auto'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegisterForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo URL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" onClick={handleTermsCondition} name="accept" label={<>Accept <Link to='/terms'>Terms and Conditions</Link> </>} />
            </Form.Group>
            <Button variant="primary" disabled={!accepted} type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="text-secondary">
                Already Have an Account? <Link to="/login">Login</Link>
            </Form.Text>
            <br />
            <Form.Text className="text-success">
                {error}
            </Form.Text>
            <Form.Text className="text-danger">

            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;