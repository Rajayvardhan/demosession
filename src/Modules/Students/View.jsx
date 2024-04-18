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
import { BaseURL, schoolyearID } from "../../api/DataApis";
const View = (props) => {
  const [studentss, setStudentss] = useState({});
  const params = useParams();
  let studentID = params.sid;
  let classesID = params.cid;
  console.log("studentID", studentID);
  let navigate = useNavigate();
  let location = useLocation();
  // console.log('students',location.state.students);
  const i  =  location.state.students;
  console.log("studentDataaata", i);
  
    // const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    const apiEndpoint = `${BaseURL}/student/viewStudent`;
    console.log("function call");
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);
    
  let res = await request({
      url:`${apiEndpoint}/${studentID}/${classesID}`,
      
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
    if (res && res.student) {
      //const data = res.data.student;
       //console.log("res",res.students)
      setStudentss(res.student);
      //sreturn res.student;
      
    }

  
    return [];
}
useEffect(() => {
  fetchData ();
}, []);
console.log("new staudens",studentss);
  return (
    <>
    <Breadcrumb title="Student" path="/students" subtitle="View" />
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
                    <p> Class :<b>{studentss?.classesID}</b></p>
                  </div>
                  <div className="panel-body profile-view-dis">
                    <h3>Personal Information</h3>
                    <div className="row">
                      <div className="profile-view-tab">
                        <p>
                          <span>Register NO </span>: <b>{studentss?.registerNO}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Roll </span>:<b> {studentss?.roll}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Section </span>: N/A
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Date of Birth </span>: <b>{studentss?.dob}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Gender </span>: <b>{studentss?.sex}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Blood Group </span>:<b>{studentss?.bloodgroup}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Religion </span>:<b>{studentss?.religion}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Email </span>:<b>{studentss?.email}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Phone </span>:<b> {studentss?.phone}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Address </span>: <b>{studentss?.adddress}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>State </span>:<b>{studentss?.state}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Country </span>:<b>{studentss?.country}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Username </span>:<b> {studentss?.phone}</b>
                        </p>
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

                      <h3>Parents Information</h3>

                      <div className="row">
                        <div className="profile-view-tab">
                          <p>
                            <span>Father Name </span>:<b>abcd</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Mother's Name </span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Email </span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Phone </span>: <b>8560821554</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Address </span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Username </span>:<b> 8560821554</b>
                          </p>
                        </div>
                      </div>
                      <h3>Account Details </h3>
                      <div className="row">
                        <div className="profile-view-tab">
                          <p>
                            <span>Aadhar number </span>:<b>{studentss?.aadhar}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>SSSM ID </span>:<b>
                            {studentss?.ssmid}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Family SSSM ID </span>:<b> 112</b>
                          </p>
                        </div>
                      </div>
                    </div>
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

export default View;
