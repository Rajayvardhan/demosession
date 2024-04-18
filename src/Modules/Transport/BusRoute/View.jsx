import React from "react";
import { Link } from "react-router-dom";

function View() {
  document.title = "Bus Route | View";
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div Id="hide-table">
              <h1 className="page-title"></h1>
              <div
                id="example1_wrapper"
                className="dataTables_wrapper form-inline no-footer"
              >
               
                  <div class="row">
                    <div class="col-sm-12">
                      <form class="form-horizontal" role="form" method="post">
                        <div class="form-group">
                         <div className="row">
                          <label for="routedate" class="col-sm-5 control-label">
                            Route Date
                          </label>
                          <div class="col-sm-7">
                            <input
                              type="date"
                              placeholder="Select Date"
                              class="form-control"
                              id="routedate"
                              name="routedate"
                              value="15-04-2023"
                            />
                            <input
                              type="hidden"
                              placeholder=" "
                              class="form-control"
                              id="device"
                              name="device"
                              value="404701099354424"
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                          <div class="col-sm-offset-2 col-sm-12 add-class">
                            <input
                              type="submit"
                              id="RouteFind"
                              class="btn btn-success"
                              value="Find Route"
                            />
                          </div>
                          </div>
                        </div>
                        <div class="row">
                          <div id="mapDiv">
                            <div id="routebox" class="col-sm-3">
                              <ul id="routeList" style={{textAlign: "center"}}>
                                <li> No Record Found </li>
                              </ul>
                              <div style={{display:"none"}} id="routeData"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default View;
