import { Icon1, Icon2 } from "../../Common/Data/SvgIcons";
import IncomeCard from "./IncomeCard";
import IncomeChartClass from "./IncomechartCard";
import ProfileGreeting from "./ProfileGreetingCard";
import GrowthOverview from "./GrownCard";
import Login from "./creadential_keendroid";
import RecentToppers from "./Recent_toppers";
import UserCard from "./UserCard";
import TransactionCard from "./TransactionCard";
import { Container, Row, Col } from "reactstrap";
import image from "../../../assets/images/dummy_pic.jpeg";
import { HiOutlineUserCircle, HiOutlineUser } from "react-icons/hi";
import StudentAtt from "./StudentAtt";
import Progress from "./ProgressReport"; 
import { BaseURL, Token, schoolyearID } from "../../../api/DataApis";    
import request from "../../../Apis/request";                                                                              
// import {  } from "react-icons/fa";
import React from 'react';
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [dashboardWidgetData, setDashboardWidgetData] = useState({});

    const fetchData = async (selectedClass) => {
        setLoading(true);
      
        var url = `${BaseURL}/dashboard/getDash`;
      
        let res = await request({
            url: url,
            method: "POST",
            data: JSON.stringify({
                "schoolyearID": schoolyearID
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Token":Token
            }
        });
      
        console.log("res", res);
      
        if (res && res.dashboardWidget) {
            setDashboardWidgetData(res.dashboardWidget);
        }
      
        setLoading(false); // Set loading to false after data is fetched
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
console.log("dashboardData", dashboardWidgetData);
    return (
        <Container fluid={true} className="dashboard-default-sec">
            <Row>
                {/* <Col xl="5" className="box-col-12 des-xl-100"> */}
                    <Row>
                        <div className="col-md-3 mb-3">
                    {/* <Image attrImage={{ className: 'img-fluid rounded-circle', src: image, alt: '', title: '' }} /> */}
                        {/* <IncomeCard image  className="img-fluid rounder-circle" src= {image}  amount='8,50,49' title='Total Students'/> */}
                        {/* <IncomeCard iconClass={<Icon1 />} amount='8,50,49' title='Total Students' percent="95.54%" /> */}
                        {/* <IncomeCard iconClass={<Icon1 />} amount='8,50,49' title='Total Students' /> */}
                            <IncomeCard iconClass={<HiOutlineUserCircle/>} amount={dashboardWidgetData?.students} title='Total Students' />
                    
                            </div>

                           <div className="col-md-3">
                            <IncomeCard iconClass={<HiOutlineUserCircle/>} amount='$73,845' percentage="98%" title='Total Fee collection'
                            />
                           </div>

                            <div className="col-md-3">
                            <IncomeCard iconClass={<HiOutlineUserCircle/>} amount='7358' title='Total New Admissions' />
                        </div>
                       
                            <div className="col-md-3">
                            <IncomeCard iconClass={<HiOutlineUserCircle/>} amount={dashboardWidgetData?.teachers} title='Total Staff' />
                            </div>
                        </Row>

                        <Row>
                        <div className="col-md-3">
                    {/* <Image attrImage={{ className: 'img-fluid rounded-circle', src: image, alt: '', title: '' }} /> */}
                        {/* <IncomeCard image  className="img-fluid rounder-circle" src= {image}  amount='8,50,49' title='Total Students'/> */}
                        {/* <IncomeCard iconClass={<Icon1 />} amount='8,50,49' title='Total Students' percent="95.54%" /> */}
                        {/* <IncomeCard iconClass={<Icon1 />} amount='8,50,49' title='Total Students' /> */}
                            <IncomeCard iconClass={<HiOutlineUserCircle/>} amount='73,580' title='SMS Report' />
                            </div>

                           <div className="col-md-3">
                            <IncomeCard iconClass={<HiOutlineUserCircle/>} amount='7384' percentage="98%" title='Attendance Report'
                            />
                           </div>

                            <div className="col-md-3">
                            <IncomeCard iconClass={<HiOutlineUserCircle/>} amount='7358' title='Staff Attendance Report' />
                        </div>
                       
                            <div className="col-md-3">
                            <IncomeCard iconClass={<HiOutlineUserCircle/>} amount='7358' title='Classwise Student Strength' />
                            </div>
                        </Row>

                {/* </Col> */}
                <IncomeChartClass />
                <Col xl="8" className="box-col-12 des-xl-100">
                    <Row>
                        <Col xl="6" className="col-50 box-col-6 des-xl-50">
                            {/* <GrowthOverview /> */}<StudentAtt/>
                        </Col>
                        <Col xl="6" className="col-50 box-col-6 des-xl-50">
                            <Login />
                        </Col>
                        {/* <Col xl="8" className="recent-order-sec"> */}
                            {/* <RecentToppers /> */}
                        {/* </Col> */}
                    </Row>
                </Col>
                <Col xl="4" className="box-col-12 des-xl-100">
                    <Row>
                        <Col xl="12" className="box-col-6 des-xl-50">
                            {/* <UserCard /> */}
                        </Col>
                        <Col xl="12" className="box-col-6 des-xl-50">
                            {/* <Progress/> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
