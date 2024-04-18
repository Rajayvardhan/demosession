import React, {useState, useEffect} from 'react'
import _, { transform } from "lodash";
import { getUserList } from "../../../Apis/employee";
import {Link} from "react-router-dom";
import axios from "axios";
import request from "../../../Apis/request";
import { BaseURL, schoolyearID } from '../../../api/DataApis';
function ExamSchedule() {
  document.title = "Exam Schedule";
  // const [classs, setClasses] = useState([]);
  const [classs, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [paginatedstudents, setPaginatedStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [searchTerm, setSearchTerm] = useState("");
  const[ExamSchedule, setexamScheduleState] = useState([]);

  const fetchedData = async (e) => {

    var class_id = e.target.value;
    // alert("okk"+class_id);
    // console.log("function call");
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);
    
  let res = await request({
      url:`${BaseURL}/examschedule/getExamSchedule/`+class_id,
      // url: 'posts',
      method: "POST",
      data: JSON.stringify({
        "schoolyearID": schoolyearID,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    if (res && res.examschedules) {
      //const data = res.data.student;
       console.log("res",res.examschedules)
       setexamScheduleState(res.examschedules);  
      //sreturn res.student;
      }

  return [];
}

useEffect(() => {
  fetchedData ();
}, []);

const fetchData = async () => {
    await axios
      .get(`${BaseURL}/classes/getClasses`)
      .then((resp) => {
        setClasses(resp.data.classes);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const studentList = (e) => {
    if (e.target.value == students.length) {
      setPaginatedStudents(ExamSchedule);
    } else if (e.target.value != students.length) {
      requestData(e.target.value);
      setPageSize(pageSize);
      setPaginatedStudents(_(students).slice(0).take(pageSize).value());
    }
  };
  const requestData = async (class_id) => {
    setTimeout(() => {
      if (getUserList.length == 0) {
        // props.setProgress(70);
        setLoading(false);
        // props.setProgress(100);
      }
    }, 1000);
    // props.setProgress(20);
    setLoading(true);
    // props.setProgress(40);
    const data = await getUserList(class_id);
    // props.setProgress(70);
    setTimeout(() => {
      if (data) {
        setLoading(false);
        setStudents(data);
        // console.error("students", data);
        setPaginatedStudents(_(data).slice(0).take(pageSize).value());
      }
      // props.setProgress(100);
    }, 1000);
  };
function AlertData() {
  console.warn("Hello");
}
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
                <select className= "select1" style={{padding:"6px 10px",borderRadius:"40px",marginLeft:"348px",marginTop:"13px"}}
                      >
                      <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      {classs.map((classes) => {
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}>{classes.classes}</option>
                            );
                      })}
                    </select>
                  </div>
              <div className="col-sm-4 add">
              <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" style={{width:'', marginLeft: "-702px"}} to="/viho/examschedule/add"><i className="fa fa-plus"></i>  Add a Exam Schedule  </Link>
              </div>
              </div>
              <div>
                <hr/>
              </div>
                <h5 style={{marginBottom:"12px",marginLeft:"5px"}}>All Exam schedule</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive" style={{marginTop:"-23px"}}>
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Exam Name</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Room</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {ExamSchedule &&
                      ExamSchedule.map((e, i) => {
                          return (
                            <tr>
                              <td>{i+1}</td>
                              <td>{e.exam}</td>
                              <td>{e.classes}</td>
                              <td>{e.sectionID}</td>
                              <td>{e.subject}</td>
                              <td>{e.date}</td>
                              <td>{e.classInSTime}</td>
                              <td>{e.room}</td>
                              <td>
                                <Link to="/viho/examschedule/edit"><i className="fa fa-edit edit" style={{fontSize:"18px"}}></i> </Link>
                                <Link> <i className="fa fa-trash delete" style={{fontSize:"18px"}}></i></Link>
                              </td>
                            </tr>
                            );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExamSchedule;
