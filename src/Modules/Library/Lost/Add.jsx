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
            <Link to="/marks"> Marks</Link>
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
                      Marks Details
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
                        <div className="row px-3">
                          <div className="col-md-10">
                            <div className="row ">
                                <div class="col-md-3">
                                  <div class="form-group">
                                    <label
                                      for="s2id_autogen1"
                                      class="control-label"
                                    >
                                      Exam{" "}
                                    </label>
                                   
                                    <select
                                      name="examID"
                                      id="examID"
                                      class="form-control select2 select2-offscreen"
                                      tabindex="-1"
                                    >
                                      <option value="0" selected="selected">
                                        Select Exam
                                      </option>
                                      <option value="6">PA 1</option>
                                      <option value="7">Half - Yearly</option>
                                      <option value="8">Final Exam</option>
                                      <option value="9">PA 2</option>
                                      <option value="10">P.A.-1(2021)</option>
                                      <option value="11">test</option>
                                      <option value="12">VIVA</option>
                                      <option value="13">pa-1</option>
                                      <option value="14">test</option>
                                      <option value="15">Test English </option>
                                      <option value="16">English exam</option>
                                      <option value="17">English test </option>
                                      <option value="18">English test </option>
                                      <option value="19">English test </option>
                                      <option value="20">math test</option>
                                      <option value="21">hindi test</option>
                                      <option value="22">Test math</option>
                                      <option value="23">sst test</option>
                                      <option value="24">test by demo</option>
                                      <option value="25">most exam</option>
                                      <option value="26">English test</option>
                                      <option value="27">sst exam</option>
                                      <option value="28">English test</option>
                                      <option value="29">test 5</option>
                                      <option value="30">test</option>
                                      <option value="31">Tarun test</option>
                                      <option value="32">six test</option>
                                      <option value="33">test</option>
                                      <option value="34">test3</option>
                                    </select>{" "}
                                  </div>
                                </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen2"
                                    className="control-label"
                                  >
                                    Class{" "}
                                  </label>
                                  <select
                                    name="classesID"
                                    id="classesID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select Class
                                    </option>
                                    <option value="1">I</option>
                                    <option value="5">II</option>
                                    <option value="6">III</option>
                                    <option value="7">IV</option>
                                    <option value="8">V</option>
                                    <option value="9">VI</option>
                                    <option value="10">VII</option>
                                    <option value="11">VIII</option>
                                    <option value="12">IX</option>
                                    <option value="14">X</option>
                                    <option value="2">NUR</option>
                                    <option value="3">PREP</option>
                                    <option value="4">KG</option>
                                    <option value="15">Dwps</option>
                                    <option value="16">DPWIS,SIKAR</option>
                                    <option value="17">JSP</option>
                                    <option value="18">Euro school</option>
                                    <option value="19">IMP</option>
                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label className="control-label">
                                    Section
                                  </label>
                                  <select
                                    name="sectionID"
                                    id="sectionID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select Section
                                    </option>
                                    <option value="2">A</option>
                                    <option value="3">B</option>
                                    <option value="4">C</option>
                                    <option value="5">D</option>
                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen4"
                                    className="control-label"
                                  >
                                    Subject{" "}
                                  </label>
                                  <select
                                    name="subjectID"
                                    id="subjectID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select Subject
                                    </option>
                                    <option value="38">COMPUTER</option>
                                  </select>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-12">
                            <div className="row">
                              <div className="col-md-12 col-xs-12">
                                <div className="form-group">
                                  <button
                                    type="submit"
                                    className="btn btn-success col-md-12 col-xs-12"
                                    style={{ marginTop: "20px" }}
                                  >
                                    Mark
                                  </button>
                                </div>
                              </div>
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
    </>
  );
}

export default Add;
