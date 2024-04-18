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
                      Assign Grade Details
                    </h4>
                  </div>
                </div>
                <div className="box-body">
                  <hr style={{marginTop:"-5px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        style={{marginTop:"-23px"}}
                      >
                        <div className="row px-3">
                          <div className="col-md-10">
                            <div className="row ">
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen1"
                                    className="control-label"
                                  >
                                    Term{" "}
                                  </label>
                                  <select
                                    name="termID"
                                    id="termID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select Term
                                    </option>
                                    <option value="1">Term 1</option>
                                    <option value="2">Term 2</option>
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
                                    style={{ marginTop: "28px" }}
                                  >
                                    Grade
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div class="callout callout-danger">
                        <p>
                          <b>Note:</b> Create term, class, section &amp; subject
                          before add mark
                        </p>
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
