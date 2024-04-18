import React from "react";
import { Link } from "react-router-dom";

function View() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ms-4">
            <i className="fa fa-laptop"></i>
            <Link to="/"> Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/busattendance"> Bus Attendance </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            View
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div Id="hide-table">
              <h1 className="page-title"></h1>
              <div
                id="example1_wrapper"
                className="dataTables_wrapper form-inline no-footer"
              >
                <section class="panel">
                  <div class="panel-body profile-view-dis">
                    <div class="box-body">
                      <div class="row">
                        <div>
                          <div class="row">
                            <div id="mapDiv">
                              <div id="routebox" class="col-lg-12">
                                <input
                                  type="hidden"
                                  placeholder=" "
                                  class="form-control"
                                  id="device"
                                  name="device"
                                  value="404701099354424"
                                />
                                <input
                                  type="hidden"
                                  placeholder=" "
                                  class="form-control"
                                  id="routedate"
                                  name="routedate"
                                  value="05-01-2023"
                                />
                                <input
                                  type="hidden"
                                  id="lat"
                                  name="lat"
                                  value="26.910323"
                                />

                                <input
                                  type="hidden"
                                  id="lng"
                                  name="lng"
                                  value="75.693338"
                                />
                                <ul id="speed">
                                  <li> Last Update : 05-01-2023 08:06:09 AM</li>
                                  <li> Last Speed : 1.17 kmph</li>
                                </ul>
                                <div
                                  class="row"
                                  style={{
                                    textAlign: "center",
                                    margin: "20px",
                                  }}
                                >
                                  <a
                                    class="btn btn-success"
                                    onclick="window.location.reload()"
                                    href=""
                                  >
                                    Refresh
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
