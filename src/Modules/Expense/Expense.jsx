import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";

function Expense(props) {
    document.title = "Expense | Listing";
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
                      to="/viho/expense/add"
                    >
                      <i className="fa fa-plus"></i> Add a Expense
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>Expense</h5>
              </div>
              <div className="card-body">
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Bill Number</th>
                        <th>Bill Date</th>
                        <th>Payment Date</th>
                        <th>User</th>
                        <th>Amount</th>
                        <th>Note</th>
                        <th>Action</th>
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
                            <td></td>
                            <td></td>
                            <td>
                              
                                
                                  <i className="fa fa-eye view"></i>
                                
                                
                                  <i className="fa fa-trash delete"></i>
                                
                            </td>
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

export default Expense;
