import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import request from "../../../Apis/request";
import Swal from "sweetalert2";
import { BaseURL, schoolyearID } from "../../../api/DataApis";


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
  const [ExamType, setExamType] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);


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
  const handleExamTypeChange = (event) => {
    setExamType(event.target.value);
  };
  const fetchData = async ( ) => {
    const getclassesApi = `${BaseURL}/classes/getClasses`;
    // console.log("classID", classesID);
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}


    // props.setProgress(10);
    setLoading(true);

    var url = getclassesApi;
 
    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"GET",
   
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    if (res && res.classes) {
      //const data = res.data.student;
       //console.log("res",res.students)
      // setExamState(res.exam_list);
      setClasses(res.classes);  
      // console.log("exam state", ExamState);
      //sreturn res.student;
      }

  
    return [];
}


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
            "schoolyearID": schoolyearID,
  };
  e.preventDefault();
  const apiEndpoint = `${BaseURL}/exam/addExam`;
  

  let response = await request({
    url: apiEndpoint,
    // url: 'posts',
    method:"POST",
    data: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
  Swal.fire({
    icon: 'success',
    title: 'Added!',
    text:'Exam Added Successfully...',
    showConfirmButton: false,
    timer: 1500,
  });
  navigate('/exam');
  
}
useEffect(() => {
  fetchData ();
}, []);
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
                      {/* <button className="btn btn-success" onTouchMove={redirect}>
                        Back
                      </button> */}
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
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="termtype"
                              className="col-sm-2 control-label"
                            >
                              Term Type{" "}
                            </label>
                            <div className="col-sm-6">
                              <select value= {TermState}
                                name="term"
                                id="term"
                                className="form-control select2"
                                onChange={handleTermChange}
                              >
                                <option value="0">Select Term</option>
                                <option value="1">Term 1</option>
                                <option value="2">Term 2</option>
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="assessmenttype"
                              className="col-sm-2 control-label"
                            >
                              Assessment Type{" "}
                            </label>
                            <div className="col-sm-6">
                              <select value= {AssessmentState}
                                name="assessment"
                                id="assessment"
                                className="form-control select2"
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
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="classestype"
                              className="col-sm-2 control-label"
                            >
                              Class{" "}
                            </label>
                            <div className="col-sm-6">
                        <select value= {ClassState}
                                name="classes"
                                id="classes"
                                className="form-control select2"
                                onChange={handleClassChange}
                              >
                                <option value="0">Select Class</option>
                                {classes.map((classes) => {
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}
                          >
                            {classes.classes}
                          </option>
                        );
                      })}
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="exam" class="col-sm-2 control-label">
                              Exam Name{" "}
                            </label>
                            <div className="col-sm-6">
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
                            <label htmlFor="date" class="col-sm-2 control-label">
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
                            <label htmlFor="note" class="col-sm-2 control-label">
                              Note
                            </label>
                            <div class="col-sm-6">
                              <textarea value= {noteState}
                                style={{ resize: "none" }}
                                className="form-control"
                                id="note"
                                name="note"
                                onChange={handleNoteChange}
                              ></textarea>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label htmlFor="note" class="col-sm-2 control-label">
                            Select Exam Type 
                            </label>
                            <div class="col-sm-6">
                              <select value= {ExamType}
                                style={{ resize: "none" }}
                                class="form-control"
                                id="note"
                                name="note"
                                onChange={handleExamTypeChange}
                              >
                              <option>select exam type</option>
<option value="1">Exam For Scholastic Subjects</option>
<option value="2">Exam For Co-Scholastic Subjects</option>
<option value="3">Exam For Additional Subjects</option>

                              </select>
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
