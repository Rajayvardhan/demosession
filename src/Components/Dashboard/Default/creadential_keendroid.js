import React, { useState, useEffect } from 'react';
import { H5, LI, P, UL } from '../../../AbstractElements';
import { Card, CardBody, CardHeader } from 'reactstrap';

const Login = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const user_data = localStorage.getItem("userdata");
        console.log(user_data,"ergfhfdsadfnbfdasfgnbmnfdasdfnbfdafgbv");
        if (user_data) {
            setUserData(JSON.parse(user_data));
        }
    }, []);
    console.log(userData,"this mvckmsdkmfgjfdml,s.fjlvm;fmlv,c;skdflkmlcis user data");

    return (
        <Card className="latest-update-sec mt-3" style={{ width: "103%" }}>
            <CardHeader>
                <div className="header-top d-sm-flex align-items-centerss">
                    <H5>Keendroid credentials</H5>
                    <div className="center-content">
                        <UL attrUL={{ className: 'week-date flex-row' }}>
                            <LI attrLI={{ className: 'font-primary' }} >Confedential</LI>
                            <LI>not for shared</LI>
                        </UL>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="table-responsive">
                    <table className="table table-bordernone m-0">
                        <tbody>
                            {userData && (
                                <>
                                    <tr>
                                        <th>Username:</th>
                                        <td>{userData.data.username}</td>
                                    </tr>
                                   
                                    <tr>
                                        <th>Phone:</th>
                                        <td>{userData.data.phone}</td>
                                    </tr>
                                    <tr>
                                        <th>Address:</th>
                                        <td>jaipur</td>
                                    </tr>
                                    <tr>
                                        <th>Pin:</th>
                                        <td>302012</td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default Login;
