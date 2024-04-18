import React from 'react'
import { Link } from "react-router-dom";

const DistanceMaster = () => {
  return (
    <>
    <div>
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
                      to="/transport/distancemaster/add"
                    >
                      <i className="fa fa-plus"></i> Add  Distance Master{" "}
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Member</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Distance Start</th>
                        <th>Distance End</th>
                        <th>Total Distance</th>
                        <th>Monthly fees</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {students &&
                        students.map((u, i) => { */}
                      {/* return ( */}
                      <tr>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>
                       
                          <Link to="/busattendance/view">
                            <i
                              className="fa fa-check-square-o"
                              style={{ fontSize: "18px" }}
                            ></i>{" "}
                          </Link>
                          <Link to="/busattendance/edit">
                            <i
                              className="fa fa-edit"
                              style={{ fontSize: "18px" }}
                            ></i>{" "}
                          </Link>
                          <Link>
                            {" "}
                            <i
                              className="fa fa-trash"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </Link>
                        </td>
                      </tr>
                      {/* ); */}
                      {/* })} */}
                    </tbody>
                   
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DistanceMaster
