import React from "react";
import { Link } from "react-router-dom";

function Add() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Bus Master
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form class="form-horizontal" role="form" method="post" style={{marginTop:"-23px"}}>
                        <div class="form-group">
                        <div className="row">
                          <label for="deviceid" class="col-sm-2 control-label">
                            Bus Name
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="deviceid"
                              name="deviceid"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="bus_name" class="col-sm-2 control-label">
                            Bus Start
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="bus_name"
                              name="bus_name"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="bus_name" class="col-sm-2 control-label">
                            Bus End
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="bus_name"
                              name="bus_name"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="bus_name" class="col-sm-2 control-label">
                            Driver Name
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="bus_name"
                              name="bus_name"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="bus_name" class="col-sm-2 control-label">
                            Driver Phone Number
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="bus_name"
                              name="bus_name"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="routename" class="col-sm-2 control-label">
                            Bus No.
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="routename"
                              name="routename"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                          <div className="row">
                          <label for="shiftID" class="col-sm-2 control-label">
                            Bus Route
                          </label>
                          <div class="col-sm-6">
                            <div class="input-group">
                              <select
                                name="shiftID"
                                id="shiftID"
                                class="form-control select2"
                              >
                                <option value="0">Select Bus Route</option>
                                <option value="1">Route no.1</option>
                                <option value="0">Route no.2</option>
                                <option value="1">Route no.3</option>
                                <option value="0">Route no.4</option>
                                <option value="1">Route no.5</option>
                              </select>{" "}
                              {/* <span class="input-group-addon btn btn-danger">
                                <a href="http://localhost/schoolcode/shift/add/class">
                                  <i class="fa fa-plus"></i>
                                </a>
                              </span> */}
                            </div>
                          </div>
                          
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              class="btn btn-success"
                              value="Add Bus"
                            />
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
      </div>
    </>
  );
}

export default Add;
