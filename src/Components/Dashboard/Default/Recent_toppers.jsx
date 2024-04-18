import { H5, Image, P } from '../../../AbstractElements';
import { RecentOrders } from '../../Common/Data/Dashboard';
import { Card, CardBody } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../../assets/images/dummy_pic.jpeg";


const RecentOrderClass = () => {
    return (
        <Card className="mt-4">
            <CardBody>
                <div className="table-responsive">
                    <H5>Recent Toppers</H5>
                    <table className="table table-bordernone">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>percentage</th>
                                <th>exam</th>
                                <th>Graph</th>
                                <th>prize</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                RecentOrders.map((items) =>
                                    <tr key={items.id}>
                                        <td>
                                            <div className="media">
                                                <Image attrImage={{ className: 'img-fluid rounded-circle', src: image, alt: '', title: '' }} />
                                                <div className="media-body">
                                                    <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product`} ><span>{items.name}</span></Link></div>
                                            </div>
                                        </td>
                                        <td>
                                            <P>{items.percentage}</P>
                                        </td>
                                        <td>
                                            <P>{items.exam}</P>
                                        </td>
                                        <td>
                                            <Image attrImage={{ className: 'img-fluid', src: `${items.value}`, alt: '', title: '' }} />
                                        </td>
                                        <td>
                                            <P>{items.prize}</P>
                                        </td>
                                        <td>
                                            <P>{items.status}</P>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default RecentOrderClass;