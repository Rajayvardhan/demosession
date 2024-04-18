import React from 'react';
import { Link } from "react-router-dom";

function Edit() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ms-4">
            <i className="fa fa-laptop"></i>
            <Link to="/"> Dashboard</Link>
            {/* <i className="fa fa-circle"></i> */}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/transportmember"> Transport Member </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                     Edit Transport Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                    <form class="form-horizontal" role="form" method="post">
                        <div class="form-group">
                          <div className="row">
                          <label
                            for="s2id_autogen1"
                            class="col-sm-2 control-label"
                          >
                            Route Name{" "}
                          </label>
                          <div class="col-sm-6">
                            
                            <select
                              name="transportID"
                              id="transportID"
                              class="form-control select2 select2-offscreen"
                              tabindex="-1"
                            >
                              <option value="0">Select Route</option>
                              <option value="203">Route No 13</option>
                              <option value="210"></option>
                              <option value="211"></option>
                            </select>{" "}
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                          <div className="row">
                          <label for="tbalance" class="col-sm-2 control-label">
                            Transport Fee{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="tbalance"
                              name="tbalance"
                              value="0.00"
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              class="btn btn-success"
                              value="Add Member"
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

export default Edit;
