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
                      Import Details
                    </h4>
                  </div>
                </div>

                <div class="box-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <div className="row">
                        <form
                          action="http://localhost/schoolcode/bulkimport/teacher_bulkimport"
                          class="form-horizontal"
                          role="form"
                          method="post"
                          enctype="multipart/form-data"
                        >
                          <div class="form-group">
                            <div className="row px-3">
                              <label
                                for="photo"
                                class="col-sm-2 control-label col-md-2"
                              >
                                Add Teacher &nbsp;
                                <i
                                  class="fa fa-question-circle"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="Download the teacher sample csv file first then see the format and make a copy of that file and add your data with exact format which is used in our csv file then upload the file."
                                ></i>
                              </label>
                              {/* <div class="col-sm-2 col-md-2">
                            <input
                              class="form-control"
                              id="uploadFile"
                              placeholder="Choose File"
                              disabled=""
                            />
                          </div> */}

                              <div class="col-sm-4">
                                <div
                                  class="input-group image-preview"
                                  data-original-title=""
                                  title=""
                                >
                                  <input
                                    style={{ background: "gray" }}
                                    type="text"
                                    class="form-control image-preview-filename"
                                    disabled=""
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default image-preview-clear"
                                      style={{ display: "none" }}
                                    >
                                      <span class="fa fa-remove"></span>Clear
                                    </button>
                                    <div
                                      class="btn btn-success image-preview-input"
                                      style={{ marginLeft: "-15px" }}
                                    >
                                      <span class="fa fa-repeat"></span>
                                      <span class="image-preview-input-title">
                                        File Browse
                                      </span>
                                      <input
                                        type="file"
                                        id="image"
                                        accept="image/png, image/jpeg, image/gif"
                                        name="photo"
                                      />
                                    </div>
                                  </span>
                                </div>
                              </div>

                              <div class="col-md-2 col-sm-2 rep-mar">
                                <input
                                  type="submit"
                                  class="btn btn-success"
                                  value="Import"
                                />
                              </div>
                              <div class="col-md-3">
                                <a
                                  class="btn btn-info"
                                  href="http://localhost/schoolcode/assets/csv/sample_teacher.csv"
                                >
                                  <i class="fa fa-download"></i> Download Sample
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>

                        <form
                          enctype="multipart/form-data"
                          action="http://localhost/schoolcode/bulkimport/book_bulkimport"
                          class="form-horizontal"
                          role="form"
                          method="post"
                        >
                          <div class="form-group">
                            <div className="row px-3">
                              <label
                                for="csvBook"
                                class="col-sm-2 control-label col-xs-8 col-md-2"
                              >
                                Add Book &nbsp;
                                <i
                                  class="fa fa-question-circle"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="Download the book sample csv file first then see the format and make a copy of that file and add your data with exact format which is used in our csv file then upload the file."
                                ></i>
                              </label>
                              {/* <div class="col-sm-3 col-xs-4 col-md-3">
                            <input
                              class="form-control bookImport"
                              id="uploadFile"
                              placeholder="Choose File"
                              disabled=""
                            />
                          </div> */}

                              <div class="col-sm-4">
                                <div
                                  class="input-group image-preview"
                                  data-original-title=""
                                  title=""
                                >
                                  <input
                                    style={{ background: "gray" }}
                                    type="text"
                                    class="form-control image-preview-filename"
                                    disabled=""
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default image-preview-clear"
                                      style={{ display: "none" }}
                                    >
                                      <span class="fa fa-remove"></span>Clear
                                    </button>
                                    <div
                                      class="btn btn-success image-preview-input"
                                      style={{ marginLeft: "-15px" }}
                                    >
                                      <span class="fa fa-repeat"></span>
                                      <span class="image-preview-input-title">
                                        File Browse
                                      </span>
                                      <input
                                        type="file"
                                        id="image"
                                        accept="image/png, image/jpeg, image/gif"
                                        name="photo"
                                      />
                                    </div>
                                  </span>
                                </div>
                              </div>

                              <div class="col-md-2 rep-mar">
                                <input
                                  type="submit"
                                  class="btn btn-success"
                                  value="Import"
                                />
                              </div>

                              <div class="col-md-3">
                                <a
                                  class="btn btn-info"
                                  href="http://localhost/schoolcode/assets/csv/sample_book.csv"
                                >
                                  <i class="fa fa-download"></i> Download Sample
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                        <form
                          action="http://localhost/schoolcode/bulkimport/student_bulkimport"
                          class="form-horizontal"
                          role="form"
                          method="post"
                          enctype="multipart/form-data"
                        >
                          <div class="form-group">
                            <div className="row px-3">
                              <label
                                for="photo"
                                class="col-sm-2 control-label col-xs-8 col-md-2"
                              >
                                Add Student &nbsp;
                                <i
                                  class="fa fa-question-circle"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="Download the student sample csv file first then see the format and make a copy of that file and add your data with exact format which is used in our csv file then upload the file."
                                ></i>
                              </label>
                              {/* <div class="col-sm-3 col-xs-4 col-md-3">
                            <input
                              class="form-control student"
                              id="uploadFile"
                              placeholder="Choose File"
                              disabled=""
                            />
                          </div> */}

                              <div class="col-sm-4">
                                <div
                                  class="input-group image-preview"
                                  data-original-title=""
                                  title=""
                                >
                                  <input
                                    style={{ background: "gray" }}
                                    type="text"
                                    class="form-control image-preview-filename"
                                    disabled=""
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default image-preview-clear"
                                      style={{ display: "none" }}
                                    >
                                      <span class="fa fa-remove"></span>Clear
                                    </button>
                                    <div
                                      class="btn btn-success image-preview-input"
                                      style={{ marginLeft: "-15px" }}
                                    >
                                      <span class="fa fa-repeat"></span>
                                      <span class="image-preview-input-title">
                                        File Browse
                                      </span>
                                      <input
                                        type="file"
                                        id="image"
                                        accept="image/png, image/jpeg, image/gif"
                                        name="photo"
                                      />
                                    </div>
                                  </span>
                                </div>
                              </div>

                              <div class="col-md-2 rep-mar">
                                <input
                                  type="submit"
                                  class="btn btn-success"
                                  value="Import"
                                />
                              </div>
                              <div class="col-md-3">
                                <a
                                  class="btn btn-info"
                                  href="http://localhost/schoolcode/assets/csv/sample_student.csv"
                                >
                                  <i class="fa fa-download"></i> Download Sample
                                </a>
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
        </div>
      </div>
    </>
  );
}

export default Add;
