import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';



const Header = () => {

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='my-4 d-flex bg-secondary p-2'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-white' speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

    
        </Container>
    );
};

export default Header;