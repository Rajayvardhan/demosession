import React from "react";
import { Link } from "react-router-dom";

function Grade() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  {/* <div className="col-sm-12 add">
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
                            value="15-04-2023"
                          />
                        </div>
                        <div class="col-sm-3">
                          <button
                            id="get_attendancereport"
                            class="btn btn-success"
                          >
                            {" "}
                            Submit
                          </button>
                        </div>
                        <div className="col-sm-4">
                        <button class="btn btn-success" style={{ float: "right" }}>
                          <Link
                            to="/busroute/monthly"
                            style={{color: "white "}}
                          >
                            Monthly Route{" "}
                          </Link>
                        </button>
                       
                        </div>
                        </div>
                      </div>
                    </form>
                  </div> */}
                </div>
                <div>
                <h5>All Bus Route</h5>
                  <hr />
                </div>
               
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
                        <td>
                          <Link to="/listtmember/view">
                            <i
                              className="fa fa-eye"
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

export default Grade;
