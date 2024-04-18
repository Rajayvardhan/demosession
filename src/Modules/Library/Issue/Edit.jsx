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
            <Link to="/marks"> Issue </Link>
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
                     Edit Issue Details
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
                          <label for="lid" class="col-sm-2 control-label">
                            Library ID{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="lid"
                              name="lid"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label
                            for="s2id_autogen1"
                            class="col-sm-2 control-label"
                          >
                            Book{" "}
                          </label>
                          <div class="col-sm-6">
                            <select
                              name="book"
                              id="book"
                              class="form-control select2 select2-offscreen"
                              tabindex="-1"
                            >
                              <option value="0">Select Book</option>
                              <option value="1">hgjhg</option>
                            </select>{" "}
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="author" class="col-sm-2 control-label">
                            Author{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="author"
                              name="author"
                              readonly="readonly"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label
                            for="subject_code"
                            class="col-sm-2 control-label"
                          >
                            Subject Code{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="subject_code"
                              name="subject_code"
                              readonly="readonly"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="serial_no" class="col-sm-2 control-label">
                            Serial No{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="serial_no"
                              name="serial_no"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="due_date" class="col-sm-2 control-label">
                            Due Date{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="due_date"
                              name="due_date"
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
                            <input
                              type="text"
                              class="form-control"
                              id="note"
                              name="note"
                              value=""
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
                              value="Update Issue"
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
