import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../../../Components/Loader/Loader";
import axios from "axios";

function Discount(props) {
    document.title = "Discount";
  const [loading, setLoading] = useState(false);

  return (
    <>
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
                      to="/discount/add"
                    >
                      <i className="fa fa-plus"></i> Add a Discount
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Discount</h5>
              </div>
              <div className="card-body">
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Registration No</th>
                        <th>School Year</th>
                        <th>Amount</th>
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
                        </tr>
                    </tbody>
                    {/* <tbody>
                      {subject &&
                        subject.map((u, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{u.subject}</td>
                              <td>{u.subject_code}</td>
                              <td>{u.classes}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-xs"
                                >
                                  {u.type == 1 ? "Mandatory" : "Optional"}
                                </button>
                              </td>
                              <td>
                                <Link to={`/subject/edit/${u.subjectID}`}>
                                  <i
                                    className="fa fa-edit edit"
                                  ></i>
                                </Link>
                                <Link
                                  onClick={() =>
                                    handleDelete(u.subjectID)
                                  }
                                >
                                  <i
                                    className="fa fa-trash delete"
                                  ></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody> */}
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

export default Discount;
