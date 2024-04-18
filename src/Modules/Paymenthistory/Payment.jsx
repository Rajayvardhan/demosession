import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import { BaseURL } from "../../api/DataApis";

function Payment(props) {
  document.title = "Payment History | Listing";
  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState([""]);

  const getData = async () => {
    const arr = [];
    arr.push({
      text: "Select Class",
      value: " ",
    });
    await axios
      .get(`${BaseURL}/classes/getClasses`)
      .then((res) => {
        let result = res.data.classes;
        result.map((classs) => {
          return arr.push({
            text: classs.classes,
            value: classs.classesID,
            key: classs.classesID,
          });
        });
        setOptions(arr);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <Breadcrumb title="Subject" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <div className="col-sm-2 add">
                    {/* <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/viho/paymenthistory/add"
                    >
                      <i className="fa fa-plus"></i> Add Payment History
                    </Link> */}
                    <Select2
                      className="form-control"
                      name="classesID"
                      // value={classes}
                      data={options}
                      options={{
                        placeholder: "Select Class",
                      }}
                      // onChange={(choice) =>getData(choice.currentTarget.value)
                      // }
                    />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      value="Total Amount : 33500"
                      readOnly
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Payment History</h5>
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

export default Payment;
