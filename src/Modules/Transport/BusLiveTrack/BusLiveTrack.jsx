import React from "react";
import { Link } from "react-router-dom";

function BusLiveTrack() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
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
                          <Link to="/buslivetrack/view">
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

export default BusLiveTrack;
