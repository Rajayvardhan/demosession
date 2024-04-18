import React from "react";
import { Link } from "react-router-dom";

function BusMaster() {
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
                      to="/transport/busmaster/add"
                    >
                      <i className="fa fa-plus"></i> Add a Bus Master{" "}
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
                      <th>Sr.No.</th>
                        <th>Bus Name</th>
                        <th>Bus Start</th>
                        <th>Bus End</th>
                        <th>Bus No</th>
                        <th>Driver Name</th>
                        <th>Driver Phone No</th>
                        {/* <th>Bus No</th> */}
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
                       
                          {/* <Link to="/busattendance/view">
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
                          </Link> */}
                          {/* <Link>
                            {" "}
                            <i
                              className="fa fa-trash"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </Link> */}
                        </td>
                        <td>{}</td>
                        <td>    <Link to="/busattendance/view">
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
                          </Link></td>
                      </tr>
                      {/* ); */}
                      {/* })} */}
                    </tbody>
                    <tfoot>
                     
                    </tfoot>
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

export default BusMaster;
