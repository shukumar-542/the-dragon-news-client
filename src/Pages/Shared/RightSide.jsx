import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGooglePlusG, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from './Qzone';
import bg from '../../assets/bg1.png'


const RightSide = () => {
    return (
        <div>
            <h4 className='my-4'>Login With</h4>
            <Button variant="outline-primary mb-2"> <FaGooglePlusG /> Login With Google</Button>
            <Button variant="outline-secondary "><FaGithub /> Login With Github</Button>
            <div className='mt-2'>
                <h4>Find on us</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>


            </div>
            <Qzone></Qzone>

            <div className='relative'>
                <img src={bg} alt="" />
                {/* <div className='absolute'>
                    <h4>Create an Amazing Newspaper</h4>
                    <p>Discover thousands of options, easy to
                        customize layouts, one-click to import demo and much more.</p>
                        <Button variant="danger">Learn More</Button>
                </div> */}
            </div>
        </div>
    );
};

export default RightSide;