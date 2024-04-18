import React from "react";
import { Link } from "react-router-dom";
import { BaseURL } from "../../../api/DataApis";

function ExamAttendance() {
  document.title = "Exam Attendance | Listing";
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
                      to="/eattendance/add"
                    >
                      <i className="fa fa-plus"></i> Add Exam Attendance
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Exam Attendance</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Email</th>
                        <th>Status</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        {/* <td>
                          <Link to="/examattendance/edit">
                            <i
                              className="fa fa-edit edit"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </Link>
                          <Link>
                            <i
                              className="fa fa-trash delete"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </Link>
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

export default ExamAttendance;
