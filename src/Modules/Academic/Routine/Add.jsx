import React from "react";
import { Link } from "react-router-dom";

function Add() {
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
            <Link to="/routine"> Routine </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add
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
                      Routine
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        encType="multipart/form-data"
                        role="form"
                        method="post"
                      >
                        <div class="form-group">
                          <div className="row">
                          <label
                            for="s2id_autogen1"
                            class="col-sm-2 control-label"
                          >
                            School Year{" "}
                          </label>
                          <div class="col-sm-6">
                            
                            <select
                              name="schoolyearID"
                              id="schoolyearID"
                              class="form-control select2 select2-offscreen"
                              tabindex="-1"
                            >
                              <option value="0">Select School Year</option>
                              <option value="9" selected="selected">
                                2021-2022 - (Default)
                              </option>
                              <option value="8">2020-2021</option>
                              <option value="7">2019-2020</option>
                              <option value="1">2017-2018</option>
                            </select>{" "}
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Class{" "}
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="classesID"
                                id="classesID"
                                className="form-control select2 select2-offscreen"
                                tabIndex="-1"
                              >
                                <option value="0">Select Class</option>
                                <option value="1">I</option>
                                <option value="5">II</option>
                              </select>{" "}
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="s2id_autogen2"
                              class="col-sm-2 control-label"
                            >
                              Section
                            </label>
                            <div class="col-sm-6">
                              <select
                                name="sectionID[]"
                                id="sectionID"
                                class="form-control select2 select2-offscreen"
                                tabIndex="-1"
                              >
                                <option value="">Select Section</option>
                                <option value="2">A</option>
                                <option value="3">B</option>
                                <option value="4">C</option>
                                <option value="5">D</option>
                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                       
                        <div className="form-group ">
                          <div className="row">
                            <label
                              htmlFor="file"
                              className="col-sm-2 control-label"
                            >
                              File{" "}
                            </label>
                            <div className="col-sm-6">
                              <div
                                className="input-group image-preview"
                                data-original-title=""
                                title=""
                              >
                                <input
                                  type="text"
                                  className="form-control image-preview-filename"
                                  disabled="disabled"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="button"
                                    className="btn btn-default image-preview-clear"
                                    style={{ display: "none" }}
                                  >
                                    <span className="fa fa-remove"></span>
                                    Clear{" "}
                                  </button>
                                  <div className="btn btn-success image-preview-input">
                                    <span className="fa fa-repeat"></span>
                                    <span className="image-preview-input-title">
                                      File Browse
                                    </span>
                                    <input
                                      type="file"
                                      accept="image/png, image/jpeg, image/gif, application/pdf, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf"
                                      name="file"
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>

                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Add Routine"
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
