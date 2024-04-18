import React from "react";
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
            <Link to="/lost/tom"> Lost </Link>
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
                      Edit Lost Books Details
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
                            for="book"
                            class="col-sm-2 control-label"
                          ></label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="book"
                              name="book"
                              value="hgjhg"
                              readonly=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                          <div className="row">
                          <label
                            for="author"
                            class="col-sm-2 control-label"
                          ></label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="author"
                              name="author"
                              value="hjhjh"
                              readonly=""
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
                          ></label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="subject_code"
                              name="subject_code"
                              value="vjhvuhgug"
                              readonly=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                          <div className="row">
                          <label
                            for="book_number"
                            class="col-sm-2 control-label"
                          ></label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="book_number"
                              name="book_number"
                              value="1"
                              readonly=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                          <div className="row">
                          <label
                            for="lost_book_quantity"
                            class="col-sm-2 control-label"
                          ></label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="lost_book_quantity"
                              name="lost_book_quantity"
                              value="0"
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
                              value=""
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
