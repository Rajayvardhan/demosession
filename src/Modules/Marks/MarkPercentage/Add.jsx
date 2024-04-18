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
                      Mark Percentage Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        style={{marginTop:"-23px"}}
                      >
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="markpercentagetype"
                              class="col-sm-2 control-label"
                            >
                              Mark Percentage Type{" "}
                            </label>
                            <div class="col-sm-4">
                              <input
                                type="text"
                                class="form-control"
                                id="markpercentagetype"
                                name="markpercentagetype"
                                value=""
                              />
                            </div>
                            <span class="col-sm-6 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                         <div className="row">
                          <label
                            for="percentage"
                            class="col-sm-2 control-label"
                          >
                            Percentage{" "}
                          </label>
                          <div class="col-sm-4">
                            <input
                              type="text"
                              class="form-control"
                              id="percentage"
                              name="percentage"
                              value=""
                            />
                          </div>
                          <span class="col-sm-6 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-8 add-class">
                            <input type="submit" class="btn btn-success" value="Add Mark Percentage"/>
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
