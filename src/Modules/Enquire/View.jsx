import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import request from "../../Apis/request";
import { BaseURL, schoolyearID } from '../../api/DataApis';

// import { useParams  } from "react-router-dom";

function View(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const params = useParams();

  let Enquiredata = location.state.students;
  let EnquiryID = params.eid;
  let classesID = params.cid;

  console.log(Enquiredata, "enquiredata");
  const [loading, setLoading] = useState(false);
  const [EnquiryyData, setEnquiryyData] = useState({});
  const [EnquiryStatus, setEnquiryStatus] = useState('Open');
  const [EnquiryExtraDetails, setEnquiryExtraDetails] = useState([]);

  const fetchData = async () => {
    const apiEndpoint = `${BaseURL}/enquiry/viewEnquiries`;

    console.log("function call");
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);
    console.log("enquireID", Enquiredata.enquiryID);
    console.log("classId", Enquiredata.classesID);
  let res = await request({
      url:`${apiEndpoint}/${EnquiryID}/${classesID}`,
      
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "schoolyearID":schoolyearID,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    if (res && res.student) {

      const statusString = res.student.status.toString(); // Convert to string if needed
      if (statusString === '0') {
          setEnquiryStatus('Open');
      } else if (statusString === '1') {
          setEnquiryStatus('Closed');
      }

      setEnquiryyData(res.student);
      setEnquiryExtraDetails(res.detail);
       }
     return [];
}
useEffect(() => {
  fetchData ();
}, []);
console.log("enquiry-data", EnquiryyData);
console.log("enquiry-status", EnquiryStatus);
console.log("extra-enquiryData", EnquiryExtraDetails);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ms-4">
            <i className="fa fa-laptop"></i>
            <Link to="/"> Dashboard</Link>
            {/* <i className="fa fa-circle"></i> */}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/enquire"> Enquire </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            View
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div id="printablediv">
                <section className="panel">
                  {/* <h4 className="mx-3">Student Details</h4>
                    <hr /> */}
                  {/* <div className="profile-view-head">
                    <a href="#">
                      <img
                        className="imagev"
                        src="http://localhost/schoolcode/uploads/images/defualt.png"
                        alt=""
                      />
                    </a>

                    <h5>Manan choudhary</h5>
                    <p>Class II</p>
                  </div> */}
                  <div className="panel-body profile-view-dis">
                    <h3>Personal Information</h3>
                    <div className="row">
                      <div className="profile-view-tab">
                        <p>
                          <span>Enquiry Number </span>: <b>{Enquiredata?.enquiryID}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Token No </span>:<b>{Enquiredata?.formNO}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span> Name </span>:<b> {Enquiredata.name}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Father's Name</span>:   <b>{Enquiredata.father_name}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Mother's Name </span>: <b>{Enquiredata.mother_name}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Enquiry for class </span>:<b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Address </span>:<b>{Enquiredata?.address}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>District </span>:<b>{Enquiredata?.district}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Locality </span>: <b>{Enquiredata?.locality}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Area/Village  </span>:<b>{Enquiredata?.address}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Pin </span>:<b>{Enquiredata?.pincode}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Country </span>:<b>{Enquiredata?.country}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>State</span>:<b> {Enquiredata?.state}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Mobile </span>:<b> {Enquiredata?.phone}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Contact Person </span>:<b>{Enquiredata.contact_person}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Relation </span>: <b>{Enquiredata.relation}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Father's Mobile No </span>:<b>{Enquiredata.father_phone}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Mother's Mobile No </span>:<b> {Enquiredata?.mother_phone}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Previous School Name </span>:<b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Previous  Class</span>:<b>{Enquiredata?.p_class}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Percentage </span>:<b>{Enquiredata?.percentage}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Medium</span>:<b> {Enquiredata?.medium}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Board/College</span>: <b>{Enquiredata?.board}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Reference</span>:<b>{Enquiredata?.reference}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Reference Remark </span>:<b>{Enquiredata?.remark}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Is Hostel required?</span>:<b> {Enquiredata?.hostel === '1' ? 'Yes' : Enquiredata?.hostel === '0' ? 'No' : ''}</b>
                              
                        </p>    
                      </div>
                      <div className="profile-view-tab">
                        <p>              
                          <span>Is Transport Required? </span>:<b>{Enquiredata?.hostel === '1' ? 'Yes' : Enquiredata?.hostel === '0' ? 'No' : ''} </b>
                          {/* {Enquiredata?.hostel === '1' ? 'Yes' : Enquiredata?.hostel === '0' ? 'No' : ''} */}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Gender</span>: <b>{Enquiredata?.sex}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Email</span>: <b>{Enquiredata?.email}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Enquiry Type</span>:<b>{Enquiredata?.email}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Date of Birth</span>: <b>{Enquiredata?.dob}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Remark </span>: <b>{Enquiredata?.remark}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Fees Details </span>:<b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Course Fees </span>:<b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Hostel Fees </span>: <b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Transport Fees  </span>:<b>{EnquiryExtraDetails?.transportFee}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Total Fees</span>:<b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>ScholarShip(if any) </span>:<b></b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span >Extra ScholarShip(if any) </span>: <b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Extra ScholarShip Reason </span>: <b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Hostel Facility </span>:<b></b>
                          {/* {EnquiryExtraDetails.status === '1' ? 'Yes' : EnquiryExtraDetails.status === '0' ? 'No' : ''} */}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Transport Stoppage</span>: <b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Enquiry Status </span>: <b>{EnquiryStatus}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Close Reason</span>: <b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Reminder Date </span>:<b>{ }</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Assign To </span>:<b>{ }</b>
                        </p>
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
}

export default View;
