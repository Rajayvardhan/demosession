import { H5, P } from '../../../AbstractElements';
import React from 'react';
import { Card, CardBody } from 'reactstrap';

const IncomeCard = ({ iconClass, amount, title, percent }) => {
    return (
        <Card className="income-card card-primary">
            <CardBody className="text-center">
                <div className="round-box">
                    {iconClass}
                </div>
                <H5>{amount}</H5>
                <P>{title}</P>
                <a className="btn-arrow arrow-primary" href="">
                    <i className="toprightarrow-primary fa fa-arrow-up me-2"></i> </a>
                <div className="parrten">
            </div>
            </CardBody>
        </Card>
    );
};

export default IncomeCard;