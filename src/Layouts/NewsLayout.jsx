import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../Pages/Shared/LeftSide';
import RightSide from '../Pages/Shared/RightSide';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
              <Header></Header>
            <Container>
                <Row>
                    
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}><RightSide></RightSide></Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;