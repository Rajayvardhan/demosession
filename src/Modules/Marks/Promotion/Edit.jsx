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
            <Link to="/grade"> Grade </Link>
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
                     Edit Grade Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form className="form-horizontal" role="form" method="post">
                      <div class="form-group">
                          <div className="row">
                            <label for="grade" class="col-sm-2 control-label">
                              Grade Name{" "}
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="grade"
                                name="grade"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label for="point" class="col-sm-2 control-label">
                              Grade Point{" "}
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="point"
                                name="point"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="gradefrom"
                              class="col-sm-2 control-label"
                            >
                              Mark From{" "}
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="gradefrom"
                                name="gradefrom"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="gradeupto"
                              class="col-sm-2 control-label"
                            >
                              Mark Upto{" "}
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="gradeupto"
                                name="gradeupto"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label for="note" class="col-sm-2 control-label">
                              Note{" "}
                            </label>
                            <div class="col-sm-6">
                              <textarea
                                style={{resize:"none"}}
                                class="form-control"
                                id="note"
                                name="note"
                              ></textarea>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              class="btn btn-success"
                              value="Update Grade"
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
