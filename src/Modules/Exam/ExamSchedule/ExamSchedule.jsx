import React, { useState, useEffect } from 'react'
import _, { transform } from "lodash";
import { getUserList } from "../../../Apis/employee";
import { Link } from "react-router-dom";
import axios from "axios";
import request from "../../../Apis/request";
import { Class } from 'leaflet';
import { BaseURL, schoolyearID } from '../../../api/DataApis';

function ExamSchedule() {
  document.title = "Exam Schedule";
  // const [classs, setClasses] = useState([]);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [paginatedstudents, setPaginatedStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [searchTerm, setSearchTerm] = useState("");
  const [ExamSchedule, setexamSchedule] = useState([]);
  const [clss, setClss] = useState([]);
  const [selectClassid, setSelectClassid] = useState("");
  const [isToggled, setToggled] = useState(false);

  // const fetchedData = async (e) => {

  //   // var class_id = e.target.value;
  //   // alert("okk"+class_id);
  //   // console.log("function call");
  //   //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
  //   // props.setProgress(10);
  //   setLoading(true);

  //   let res = await request({
  //     url: `https://demo.keendroid.in/examschedule/getExamSchedule/`+selectClassid,
  //     // url: 'posts',
  //     method: "POST",
  //     data: JSON.stringify({
  //       "schoolyearID": 9
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     }
  //   });
  //   console.log("res", res)
  //   if (res && res.examschedules) {
  //     //const data = res.data.student;
  //     console.log("res", res.examschedules)
  //     setexamScheduleState(res.examschedules);
  //     //sreturn res.student;
  //   }

  //   return [];
  // }

  // useEffect(() => {
  //   fetchedData();
  // }, []);

  const handleToggle = () => { 
    if( ExamSchedule.status=1)
    setToggled(isToggled);
     else
     setToggled (!isToggled);
  };

  const SelectClassHandler = (e) => {
    setSelectClassid(e.target.value);
     fetchData( e.target.value );
 
   }
  const fetchData = async ( classesID ) => {
    const apiEndpoint = `${BaseURL}/examschedule/getExamSchedule`;

  setLoading(true);

    var url = apiEndpoint;
    if( classesID ) {
      url = `${apiEndpoint}/${classesID}`;
    } 

    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "schoolyearID": schoolyearID,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    setClasses(res.classes); 
  
 console.log("res",res)
// console.log("enquiry_status",EnquiryStatus);
    if (res && res.examschedules) {
     
      setexamSchedule(res.examschedules);
    
      console.log("student_list", ExamSchedule );
      // (res.students);

      }

  
    return [];
}




useEffect(() => {
  fetchData ();
}, []);



  console.log("classID",selectClassid );
  console.log("examschedule",ExamSchedule );
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <div className="col-sm-4 add">
                    <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/examschedule/add"
                    >
                      <i className="fa fa-plus"></i> Add Exam Schedule
                    </Link>
                  </div>
                  <div className='col-sm-4'>

                  </div>
                  <div className="col-sm-4 ">
                    <select onChange={SelectClassHandler} className="form-control text-center form_select_new" style={{width:"47%",marginLeft:"189px",borderRadius:"28px",border:"1px solid",position:"relative",top:"6px"}}>
                      <option value="">Select Class</option>
                      <option value="-1">View All</option>
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
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Exam Schedule</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
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
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {ExamSchedule &&
                        ExamSchedule.map((e, i) => {
                          return (
                            <tr>
                              <td>{i + 1}</td>
                              <td>{e.exam}</td>
                              <td>{e.classes}</td>
                              <td>{e.sectionID}</td>
                              <td>{e.subject}</td>
                              <td>{e.date}</td>
                              <td>{e.classInSTime}</td>
                              <td>{e.room}</td>
                              <td>
                                <Link to="/examschedule/edit"><i className="fa fa-edit edit" style={{ fontSize: "18px" }}></i> </Link>
                                <Link> <i className="fa fa-trash delete" style={{ fontSize: "18px" }}></i></Link>
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
  );
}

export default ExamSchedule;
