import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";

function Duefees(props) {
    document.title = "Due Fees | Listing";
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* <Breadcrumb title="Subject" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <div className="col-sm-4 add">
                    <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/viho/duefees/add"
                    >
                      <i className="fa fa-plus"></i> Add Due Fees
                    </Link>
                    <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
                    <select className= "select1" style={{padding:"8px 10px",borderRadius:"40px",marginLeft:"169px", marginTop:"9px"}}
                      onChange="">
                      <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      {/* {classes.map((classes) => {
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}
                          >
                            {classes.classes}
                          </option>
                        );
                      })} */}
                    </select>
                  </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Due Fees</h5>
              </div>
              <div className="card-body">
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Enroll Id</th>
                        <th>Student Name</th>
                        <th>Class Name</th>
                        <th>Due Amount</th>
                        <th>School Year</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <td>
                              
                                
                                  <i className="fa fa-eye view"></i>
                                
                                
                                  <i className="fa fa-trash delete"></i>
                                
                            </td> */}
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Duefees;
