import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import request from "../../../Apis/request";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
import Swal from "sweetalert2";
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams  } from "react-router-dom";


function Edit(props) {
  document.title = "transport Member | Edit";

  let navigate = useNavigate();
  const redirect = () => {
    // let path = `/advance`;
    // navigate(path);
  };

  const [options, setOptions] = useState([""]);
  const [students, setStudents] = useState([""]);
  const [Routes, setRoutes] = useState([]);
  // const [selectedRoute, setSelectedRoute] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [StudentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [TransportAmount, setTransportAmount] = useState([]);
  const [DateList, setDateList]= useState('');



  
  let location = useLocation();
  const { TmemberData, studentName} = location.state;

  const params = useParams();
  let studentID = params.sid;
  let classesID = params.cid;


  
  const HandleTransportAmount = (e) => {
    setTransportAmount(e.target.value);

  }
 
  const schoolyearID = schoolyearID;

  const   AddTransport = async () => {

    let response = await request({
      url: `${BaseURL}/tmember/editTmember/${studentID}/${classesID}`,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
       "schoolyearID" : schoolyearID,
       "transportID" :selectedRoute ,
       "studentID" : studentID,
       "amount" : TransportAmount,
    }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  
     if( response.status == "200" ) {
      Swal.fire({
        icon: "success",
        title: "success!",
        text: "Transport Member Updated Successfully...",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`/transport/transport/member`);
      // var receiptID = response.receiptID;
      // var schoolyearID = response.schoolyearID;
      // var urll = `${BaseURL}/feecollection/printPreview/${schoolyearID}/${receiptID}`;

      // window.location.href = urll;
      // fetchData();
    } 
    
          //  alert("Data submitted successfully!!");fee_list
          // let feetypenamedata = response.fee_list
          // console.log(feetypenamedata, "feetypenamedata");
          // setFeeNameListing(response?.fee_list)
                      //  console.log("response", response.fee_list);
          //  fetch("http://www.swarnkarsamajindia.com/api/add-karyakarini");
    // } 
  
}

useEffect(() => {
  AddTransport();
}, []);




  const fetchData = async ( selectedClass ) => {
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);

    var url = `${BaseURL}/student/getStudents/-1`;
    // if( selectedClass ) {
      // url = `${BaseURL}/student/getStudents/`+selectedClass;
    // } 

    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "schoolyearID": schoolyearID
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    // setClasses(res.classes); 
    if (res && res.students)  {
      //const data = res.data.student;
       //console.log("res",res.students)
       setStudentList(res.students);
       
      
      //sreturn res.student;
      }
      


  
    return [];
}
 useEffect(() => {
  fetchData();
 }, []);


 const fetchRouteNumber = async () => {
  //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
  // props.setProgress(10);
  setLoading(true);

  var url = `${BaseURL}/tmember/addTmember`;
  // if( selectedClass ) {
    // url = `${BaseURL}/student/getStudents/`+selectedClass;
  // } 

  let res = await request({
    
    url:url,
    // url: 'posts',
    method:"POST",
    data: JSON.stringify({
      // "schoolyearID": 10
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
   }
  });
  console.log("res",res)
  setRoutes(res.transports); 
  if (res && res.students)  {
    
    //const data = res.data.student;
     //console.log("res",res.students)
     setStudentList(res.students);
     
    
    //sreturn res.student;
    }
    



  return [];
}
useEffect(() => {
  fetchRouteNumber();
}, []);


console.log("selectedRoute", selectedRoute);
console.log("selectedStudent", selectedStudent);
console.log("transport Fees", TransportAmount);


 
  // const getData = async (class_id) => {
  //   setClasses(class_id);
  //   const arr = [];
  //   await axios
  //     .get("https://demo.keendroid.in/classes/getClasses")
  //     .then((res) => {
  //       let result = res.data.classes;
  //       result.map((classs) => {
  //         return arr.push({
  //           text: classs.classes,
  //           value: classs.classesID,
  //           key: classs.classesID,
  //         });
  //       });
  //       setOptions(arr);
  //     });
  //   const arrStudent = [];
  //   await axios
  //     .post("https://demo.keendroid.in/student/getStudents/" +class_id, {
  //       schoolyearID: 9,
  //     })
  //     .then((res) => {
  //       let result = res.data.students;
  //       result.map((student) => {
  //         return arrStudent.push({
  //           text: student.name,
  //           value: student.studentID,
  //           key: student.studentID,
  //         });
  //       });
  //       setStudents(arrStudent);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  
    };
    const handleStudentListChange = (event) => {
      setSelectedStudent(event.target.value);
  };

  // console.log("classid", classes.classesID);
console.log("tmemberData", TmemberData);
console.log("studentID", studentID);
console.log("classID", classesID)

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
                    Edit Transport Member Details
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
                        encType="multipart/form-data"
                        role="form"
                        method="post"
                        style={{marginTop:"-20px"}}
>   
                          <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Student
                            </label>
                            <div className="col-sm-6">
                            <input value= {studentName} onChange = {handleStudentListChange} 
                                    type="text"
                                    className="form-control"
                                    id="studentID"
                                    name="studentID"
                                    readOnly
                                    
                                 />
                       
                        
                      
                            
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Route Name
                            </label>
                            <div className="col-sm-6">
                            <select onChange= {handleRouteChange} value={selectedRoute} className="form-control" id="name_id" name="name">
                                  <option value="0" >Select Route</option>
                                  { Routes && Routes.map((R) => {
                        return (
                          <option
                            key={R.transportID}
                            value={R.transportID}
                          >
                            {R.bus_name}
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
                            <label
                              htmlFor="s2id_autogen2"
                              className="col-sm-2 control-label"
                            >
                              Transport Fees
                            </label>
                            <div className="col-sm-6">
                              <input
                                className="form-control"
                                type="text"
                                onChange= {HandleTransportAmount}
                                
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="button"
                              className="btn btn-success"
                              onClick={AddTransport}
                              value="Add Transport"
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

export default Edit;
