import { Currentlysale } from '../../Common/Data/ApexChart';
import CardHeaderComponent from '../Common/CardHeader';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import { UserChart } from '../../Common/Data/ApexChartt';

const StudentAtt = () => {
    return (
        <Fragment>
            <Col xl="12" className="box-col-12 des-xl-100 dashboard-sec mt-3" style={{width:"120%",marginLeft:"-13px"}}>
                <Card className="income-card" style={{height:"337px",marginBottom:"12px", width:"108%"}}>
                    <CardHeader>
                        <CardHeaderComponent title='Today`s Attendance' subtitle="" settingIcon={true} />
                    </CardHeader>
                    <CardBody className="p-0">
                        <div id="chart-timeline-dashbord">
                                <Chart options={UserChart.options} series={UserChart.series} type="bar" height={240} /> 
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default StudentAtt;