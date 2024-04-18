import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import request from "../../../Apis/request";
import Swal from "sweetalert2";
import { BaseURL, schoolyearID } from "../../../api/DataApis";


function Edit(props) {
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


  console.log("propppps",props );
  let navigate = useNavigate();
  let location = useLocation();
  let examdata  =  location.state.exam;
  console.log("examdataaaaaa", examdata); 
  document.title = "Exam | Edit";
  
  useEffect(() => {
    setExamFinalMark(examdata?.finalmark);
    setTermState(examdata?.term)
    setAssessmentState(examdata?.assessment);
    setClassState(examdata?.classesID);
    setExamState(examdata?.exam);
    setStartDateState(examdata?.date);
    setEndDate(examdata?.end_date);
    setPassMarkState(examdata?.passmark);
    setNoteState(examdata?.note);


  }, []);

  //setExamFinalMark("456");

  const redirect = () => {
    // let path = `/viho/exam`;
    // navigate(path);
  };
 
  const handleTermChange = (event) => {
    setTermState(event.target.value);
  };
  const handleAssessmentChange = (event) => {
    setAssessmentState(event.target.value);
  };

  const handleClassChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setClassState(selectedOptions);
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
  const UpdateExamData = async ( e ) => {

  const data = {
            "exam": ExamState,
            "classesID":ClassState,
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
            "schoolyearID": schoolyearID,
  };
  e.preventDefault();
  const apiEndpoint = `${BaseURL}/exam/editExam`;
    // const editEnquiryEndPoint =`${BaseURL}/exam/editExam`
  let response = await request({
    url: `${apiEndpoint}/${examdata?.examID}`,
    // ${apiEndPoint}/${examdata?.examID}
    // url: 'posts',
    method:"POST",
    data: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });

  if( response.status == "200" ) {
    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text:'Exam Updated Successfully...',
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/exam');
  } else {
    alert(response.message);
  }



}
// console.log("response", response);
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
                      {/* <button className="btn btn-success" onClick={redirect}> */}
                        {/* Back</button> */}
                    
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
                               onChange={handleTermChange}
                                name="term"
                                id="term"
                                class="form-control select2"
                                value= {TermState}
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
                                value={AssessmentState}
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
                              <select
                              value={ClassState}
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
                            <label htmlFor="exam" class="col-sm-2 control-label">
                              Exam Name
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="exam"
                                name="exam"
                                value={ExamState}
                                onChange={handleExamChange}
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label htmlFor="date" class="col-sm-2 control-label">
                              Start Date
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="date"
                                class="form-control"
                                id="date"
                                name="date"
                                value={StartDateState}
                                onChange={handleStartDateChange}
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label htmlFor="date2" class="col-sm-2 control-label">
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
                              <input
                                type="text"
                                class="form-control"
                                id="passmark"
                                name="passmark"
                                value={PassMarkState}
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
                            <label htmlFor="note" class="col-sm-2 control-label">
                              Note{" "}
                            </label>
                            <div class="col-sm-6">
                              <textarea
                                style={{ resize: "none" }}
                                class="form-control"
                                id="note"
                                name="note"
                                value={noteState}
                                onChange={handleNoteChange}
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
                              onClick={UpdateExamData}
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
