// import React, { Fragment } from 'react';
import React, { Fragment, useState, useEffect } from 'react';

import { Btn, H4, H5, P, H6, UL, LI } from '../../../AbstractElements';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import { useNavigate } from 'react-router';
import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <Row>
                    <Col>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Login;