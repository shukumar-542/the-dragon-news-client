import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../Pages/Shared/LeftSide';
import RightSide from '../Pages/Shared/RightSide';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}><RightSide></RightSide></Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;