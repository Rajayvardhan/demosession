import React from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  document.title = "Exam | Edit";

  let navigate = useNavigate();
  const redirect = () => {
    let path = `/viho/exam`;
    navigate(path);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
              <div className="portlet-title row">
                  <div className="caption font-dark col-md-10">
                    <h4 className="caption-subject bold uppercase mx-3">
                     Edit Exam Details
                    </h4>
                  </div>
                  <div className="caption font-dark col-md-2">
                    <h5 className="caption-subject bold uppercase mx-3">
                      <button className="btn btn-success" onClick={redirect}>
                        Back
                      </button>
                    </h5>
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
                            <label
                              for="termtype"
                              class="col-sm-2 control-label"
                            >
                              Term Type{" "}
                            </label>
                            <div class="col-sm-6">
                              <select
                                name="term"
                                id="term"
                                class="form-control select2"
                              >
                                <option value="0">Select Term</option>
                                <option value="1">Term 1</option>
                                <option value="2">Term 2</option>
                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="assessmenttype"
                              class="col-sm-2 control-label"
                            >
                              Assessment Type{" "}
                            </label>
                            <div class="col-sm-6">
                              <select
                                name="assessment"
                                id="assessment"
                                class="form-control select2"
                              >
                                <option value="0">Select Assessment</option>
                                <option value="1">Assessment 1</option>
                                <option value="2">Assessment 2</option>
                                <option value="3">Assessment 3</option>
                                <option value="4">Assessment 4</option>
                                <option value="5">Assessment 5</option>
                                <option value="6">Assessment 6</option>
                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="classestype"
                              class="col-sm-2 control-label"
                            >
                              Class{" "}
                            </label>
                            <div class="col-sm-6">
                              <select
                                name="classes"
                                id="classes"
                                class="form-control select2"
                              >
                                <option value="0">Select Class</option>
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
                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label for="exam" class="col-sm-2 control-label">
                              Exam Name
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="exam"
                                name="exam"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label for="date" class="col-sm-2 control-label">
                              Start Date
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="date"
                                class="form-control"
                                id="date"
                                name="date"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label for="date2" class="col-sm-2 control-label">
                              End Date
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="date"
                                class="form-control"
                                id="end_date"
                                name="end_date"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="passmark"
                              class="col-sm-2 control-label"
                            >
                              Exam Pass Marks <span class="text-red">*</span>
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="passmark"
                                name="passmark"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="finalmark"
                              class="col-sm-2 control-label"
                            >
                              Exam Final Marks <span class="text-red">*</span>
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="finalmark"
                                name="finalmark"
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
                                style={{ resize: "none" }}
                                class="form-control"
                                id="note"
                                name="note"
                              ></textarea>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div class="col-sm-2 control-label">
                            <label for="select_examtype">
                              Select Exam Type <span class="text-red">*</span>
                            </label>
                            <br />
                          </div>
                          <div class="col-sm-8 control-label">
                            <input
                              type="checkbox"
                              name="scholastic_exam"
                              id="scholastic_exam"
                              value=""
                            />{" "}
                            Scholastic Exam <br />
                            <input
                              type="checkbox"
                              name="coscholastic_exam"
                              id="coscholastic_exam"
                              value=""
                            />{" "}
                            Co-scholastic Exam <br />
                            <input
                              type="checkbox"
                              name="additional_exam"
                              id="additional_exam"
                              value=""
                            />{" "}
                            Additional Subject Exam
                          </div>
                        </div> */}
                        <span class="col-sm-4 control-label"></span>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Update Exam"
                            />
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

export default Edit;
