import React from 'react';
import './style.css';
import { Row, Alert, Col, Container } from 'reactstrap';

class MyApp extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 className="firstText">Hello React</h1>
                <p>lorem ipsum</p>

                <Container>
                    <Row>
                        <Col md="4">
                           <Alert color="danger">
                                  This is red Alert Component
                            </Alert>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default MyApp;