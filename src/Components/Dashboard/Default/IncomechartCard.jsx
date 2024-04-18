import { Currentlysale } from '../../Common/Data/ApexChart';
import CardHeaderComponent from '../Common/CardHeader';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import { UserChart } from '../../Common/Data/ApexChart';

const IncomeChartClass = () => {
    return (
        <Fragment>
            <Col xl="12" className="box-col-12 des-xl-100 dashboard-sec">
                <Card className="income-card mt-3" style={{width:"101%"}}>
                    <CardHeader>
                        <CardHeaderComponent title='2023 financial year' subtitle="86% More than Last year" settingIcon={true} />
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
export default IncomeChartClass;