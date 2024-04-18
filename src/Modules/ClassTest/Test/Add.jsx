import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import request from "../../../Apis/request";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
import Swal from "sweetalert2";

function Add() {
  const [TermState, setTermState] = useState('');
  const [AssessmentState, setAssessmentState] = useState('');
  // const [SectionState, setSectionState]= useState('');
  const [ClassState, setClassState] = useState([]);
  const [ExamState, setExamState] = useState([]);
  const [StartDateState, setStartDateState] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [PassMarkState, setPassMarkState] = useState('');
  const [noteState, setNoteState] = useState([]);
  const [ExamFinalMark, setExamFinalMark] = useState([]);

document.title = "Exam | Add";

  let navigate = useNavigate();
  const redirect = () => {
    let path = `/exam`;
    navigate(path);
  };
  const handleTermChange = (event) => {
    setTermState(event.target.value);
  };
  const handleAssessmentChange = (event) => {
    setAssessmentState(event.target.value);
  };

  const handleClassChange = (event) => {
    setClassState(event.target.value);
  };
  const handleExamChange = (event) => {
    setExamState(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setStartDateState(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const handlePassMarkStateChange = (event) => {
    setPassMarkState(event.target.value);
  };
  const handleFinalMarkStateChange = (event) => {
    setExamFinalMark(event.target.value);
  };
  const handleNoteChange = (event) => {
    setNoteState(event.target.value);
  };
  const AddExamData = async ( e ) => {
  const data = {
    "examID": "15",
            "exam": ExamState,
            "classes":[ClassState],
            "passmark": PassMarkState,
            "finalmark": ExamFinalMark,
            "date": StartDateState,
            "end_date": "0",
            "note": noteState,
            "subject_type": "0",
            "term":TermState ,
            "exam_type": "0",
            "parentStatus": "0",
            "assessment": AssessmentState,
            "schoolyearID": schoolyearID
  };
  e.preventDefault();
  let response = await request({
    url: `${BaseURL}/exam/addExam`,
    // url: 'posts',
    method:"POST",
    data: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
  Swal.fire({
    icon: "added",
    title: "added exam",
    
  })
  navigate("/classtest")



}
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
                      Exam Details
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
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        style={{marginTop:"-23px"}}
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
                              <select value= {TermState}
                                name="term"
                                id="term"
                                class="form-control select2"
                                onChange={handleTermChange}
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
                              <select value= {AssessmentState}
                                name="assessment"
                                id="assessment"
                                class="form-control select2"
                                onChange={handleAssessmentChange}
                               
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
                        <select value= {ClassState}
                                name="classes"
                                id="classes"
                                class="form-control select2"
                                onChange={handleClassChange}
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
                              Exam Name{" "}
                            </label>
                            <div class="col-sm-6">
                              <input 
                                type="text"
                                class="form-control"
                                id="exam"
                                name="exam"
                                value= {ExamState}
                                onChange={handleExamChange}
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
                              <input value= {StartDateState}
                                type="date"
                                class="form-control"
                                id="date"
                                name="date"
                                onChange={handleStartDateChange}
                              
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
                                value={EndDate}
                                onChange={handleEndDateChange}
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
                              <input value= {PassMarkState}
                                type="text"
                                class="form-control"
                                id="passmark"
                                name="passmark"
                                onChange={handlePassMarkStateChange}
                                
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
                                value={ExamFinalMark}
                                onChange={handleFinalMarkStateChange}
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label for="note" class="col-sm-2 control-label">
                              Note
                            </label>
                            <div class="col-sm-6">
                              <textarea value= {noteState}
                                style={{ resize: "none" }}
                                class="form-control"
                                id="note"
                                name="note"
                                onChange={handleNoteChange}
                              ></textarea>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        {/* <div className="row">
                        <div class="col-sm-2 control-label">
                        <label for="select_examtype">Select Exam Type <span class="text-red">*</span></label><br/>
                        </div>
                        <div class="col-sm-8 control-label">
                        <input type="checkbox" name="scholastic_exam" id="scholastic_exam" value=""/> Scholastic Exam <br/>
                        <input type="checkbox" name="coscholastic_exam" id="coscholastic_exam" value=""/> Co-scholastic Exam <br/>
                        <input type="checkbox" name="additional_exam" id="additional_exam" value=""/> Additional Subject Exam 
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
                              value="Add Exam"
                              onClick={AddExamData}
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

export default Add;
