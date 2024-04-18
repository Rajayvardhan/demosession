import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {getStView} from "../../Apis/StView";
import axios from "axios";
import request from "../../Apis/request";
import { useParams  } from "react-router-dom";
import image from "../../assets/images/dummy_pic.jpeg";

const StaffView = (props) => {
  const [studentss, setStudentss] = useState({});
  const params = useParams();
  let teacherID = params.tid;
  console.log("teacher_id", teacherID );
//   let classesID = params.cid;
//   console.log("studentID", studentID);
//   let navigate = useNavigate();
//   let location = useLocation();
// //   console.log('students',location.state.students);
// //   const i  =  location.state.students;
//     // const [student, setStudent] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const fetchData = async () => {
//     console.log("function call");
//     //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
//     // props.setProgress(10);
//     setLoading(true);
    
//   let res = await request({
//       url:`https://demo.keendroid.in/student/viewStudent/${studentID}/${classesID}`,
//       // url: 'posts',
//       method:"POST",
//       data: JSON.stringify({
//         "schoolyearID":9
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//      }
//     });
//     console.log("res",res)
//     if (res && res.student) {
//       //const data = res.data.student;
//        //console.log("res",res.students)
//       setStudentss(res.student);
//       //sreturn res.student;
      
//     }

  
//     return [];
// }
// useEffect(() => {
//   fetchData ();
// }, []);
// console.log("new staudens",studentss);
  return (
    <>
    <Breadcrumb title="Staff" path="/staff" subtitle="View" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div id="printablediv">
                <section className="panel">
                  {/* <h4 className="mx-3">Student Details</h4>
                    <hr /> */}
                  <div className="profile-view-head">
                    <a href="#">
                      <img
                        className="imagev"
                        src={image}
                        alt=""
                      />
                    </a>

                    <h5>{studentss?.name}</h5>
                    <p> Name :{studentss?.Name}</p>
                  </div>
                  <div className="panel-body profile-view-dis">
                    <h3>Personal Information</h3>
                    <div className="row">
                      <div className="profile-view-tab">
                        <p>
                          <span>Date of Birth</span>: {studentss?.registerNO}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Date of joining </span>: {studentss?.roll}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Date of Leaving </span>: N/A
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Gender </span>:{studentss?.dob}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Religion </span>: {studentss?.sex}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Email </span>:{studentss?.bloodgroup}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Phone</span>:{studentss?.religion}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Address </span>:{studentss?.email}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                      <p>
                          <span>State </span>:{studentss?.adddress}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                      <p>
                      <span>Username </span>: {studentss?.phone}</p>
                      </div>
                      <div className="profile-view-tab">
                      <p>
                     
                        </p>
                      </div>
                      <div className="profile-view-tab">
                      <p>
                         
                        </p>
                      </div>
                      <div className="profile-view-tab">
                      
                      </div>
                      {/* <!--<div className="profile-view-tab">-->
<!--                        <p><span>Date of Admission </span>: </p>-->
<!--                    </div>-->
<!--<div className="profile-view-tab">-->
<!--                        <p><span>Date of Leaving </span>: </p>-->
<!--                    </div>-->
<!--<div className="profile-view-tab">-->
<!--                        <p><span>Remarks </span>: </p>-->
<!--                    </div>--> */}
                      {/* </div> */}

                      <h3>Account Details</h3>

                      <div className="row">
                        <div className="profile-view-tab">
                          <p>
                            <span>Bank Name </span>:SBI 
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Bank Account </span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>IFSC Code </span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>PF Number </span>: 8560821554
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>ESI - IP/REG. No </span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Aadhar Number </span>: 8560821554
                          </p>
                        </div>
                      
                      <div className="profile-view-tab">
                          <p>
                            <span>policy number </span>:{studentss?.ssmid}
                          </p>
                        </div>
                        
                        <div className="profile-view-tab">
                          <p>
                            <span>Date of Increment/Appraisal</span>:{studentss?.ssmid}
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Increment</span>:{studentss?.ssmid}
                          </p>
                        </div>
                        </div>
                        </div>
                        <h3>Earning Details:</h3>
                        <h3>Deduction Details:</h3>
                      {/* <h3>Account Details </h3>
                      <div className="row">
                        <div className="profile-view-tab">
                          <p>
                            <span>Aadhar number </span>:{studentss?.aadhar}
                          </p>
                        </div>
                        <div className="row">
                       
                        <div className="profile-view-tab">
                          <p>
                            <span>Family SSSM ID </span>:112
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Family SSSM ID </span>:112
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffView;
