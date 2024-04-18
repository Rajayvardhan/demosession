import React from "react";
import { Link } from "react-router-dom";

function Grade() {
  document.title = "Bus Route";
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <div className="col-sm-12 add">
                    <form class="form-horizontal" role="form" method="post">
                      <div class="form-group">
                       <div className="row">
                       
                        <label for="routedate" class="col-sm-2 control-label">
                          <lii> Route Date</lii>
                        </label>
                        <div class="form-group col-sm-3">
                          <input
                            type="text"
                            placeholder="Select Date"
                            class="form-control"
                            id="routedate"
                            name="routedate"
                            style={{marginTop:"-24px"}}
                            // value="15-04-2023"
                          />
                        </div>
                        <div class="col-sm-3">
                          <button
                            id="get_attendancereport"
                            class="btn btn-success"
                            style={{marginTop:"-9px"}}
                          >
                            Submit
                          </button>
                        </div>
                        <div className="col-sm-3">
                        <button class="btn btn-success" style={{ marginTop:"-9px"}}>
                          <Link
                            to="/viho/transport/busroute/monthly"
                            style={{color: "white "}}
                          >
                            Monthly Route
                          </Link>
                        </button>
                       
                        </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Bus Route</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Bus Name</th>
                        <th>Device ID</th>
                        <th>Route Name</th>
                        <th>Route Distance</th>
                        <th>Shift</th>
                        <th className="text-center">Action</th>
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
                        <td>{}</td>
                        <td className="text-center">
                          <Link to="/viho/transport/busroute/view">
                            <i
                              className="fa fa-eye view"
                              style={{ fontSize: "18px" }}
                            ></i>{" "}
                          </Link>
                          {/* <Link to="/busattendance/edit">
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
                          </Link> */}
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
    </>
  );
}

export default Grade;
