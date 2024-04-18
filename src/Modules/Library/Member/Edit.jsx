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
            <Link to="/marks"> Marks </Link>
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
                     Edit Marks Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                    <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                      >
                        <div class="form-group">
                          <div className="row">
                            <label for="lID" class="col-sm-2 control-label">
                              Library ID{" "}
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="lID"
                                name="lID"
                                value="1500204"
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="lbalance"
                              class="col-sm-2 control-label"
                            >
                              Library Fee{" "}
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="lbalance"
                                name="lbalance"
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
                              value="Update Member"
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
