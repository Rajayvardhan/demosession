import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import {getStView} from "../../Apis/StView";
import axios from "axios";
import request from "../../../Apis/request";
import { useParams  } from "react-router-dom";
import image from "../../../assets/images/dummy_pic.jpeg";
// import image from "../../../../assets/images"
import { BaseURL, schoolyearID } from "../../../api/DataApis";
const View = (props) => {
  const [studentPaymentHistoryData, setStudentPaymentHistoryData] = useState({});
  const [StudentName, setStudentName] = useState("");
  const [DepositedAamount, setDepositedAmount] = useState("");
  const [PaymentHistory, setPaymentHistory] = useState([]);
  const [dueAmount, setDueAmount] = useState(0);
  const[PaymentStatus, setPaymentStatus]=  useState("");
  const[AdvanceReceiptViewData, setAdvanceReceiptViewData] = useState([]);
   
  const params = useParams();
  let studentID = params.sid;
  let classesID = params.cid;
  console.log("studentID", studentID);
  let navigate = useNavigate();
  let location = useLocation();
  // console.log('students',location.state.students);
   const RegistrationNumberss  = location.state ? location.state.StudentRegistrationNumber : null;
   const AdvanceReceiptData = location.state.students;
    // const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);

 console.log("registrationNumberprops",RegistrationNumberss);
//  const schoolyearID = schoolyearID;
 var urll = `${BaseURL}/advance/printPreview/${schoolyearID}/${AdvanceReceiptData.id}`;
 
 

const ViewReceipt = ()  =>  {
  window.location.href = urll;


}
 const fetchData = async () => {
  const apiEndpoint = `${BaseURL}/advance/viewAdvance`;

  console.log("function call");
  //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
  // props.setProgress(10);
  setLoading(true);
  // console.log("enquireID", Enquiredata.enquiryID);
  // console.log("classId", Enquiredata.classesID);
let res = await request({
    url:`${apiEndpoint}/${AdvanceReceiptData.id}`,
    
    // url: 'posts',
    method:"POST",
    data: JSON.stringify({
      "schoolyearID":schoolyearID
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
   }
  });
  console.log("res",res);
  if (res && res.advance) {

    const statusString = res.advance.paidstatus.toString(); // Convert to string if needed
    if (statusString === '0') {
      setPaymentStatus('Open');
    } else if (statusString === '1') {
      setPaymentStatus('Closed');
    }

    setAdvanceReceiptViewData(res.advance);
    // setEnquiryExtraDetails(res.detail);
     }
   return [];
}
useEffect(() => {
fetchData ();
}, []);

// Use another useEffect hook to log studentPaymentHistoryData
useEffect(() => {
  console.log("studentPaymentHistoryData", studentPaymentHistoryData);
  console.log("depositedAmount", DepositedAamount);
  console.log("paymentHistory", PaymentHistory);
  console.log("DueAmount", dueAmount);
}, [studentPaymentHistoryData,DepositedAamount, PaymentHistory, dueAmount]);

console.log("advanceTReceiptData", AdvanceReceiptData);




  return (
    <>
    {/* <Breadcrumb title="Student" path="/students" subtitle="View" /> */}
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

                    <h5></h5>
                    <p><b>{StudentName}</b></p>
                  </div>
                  <div className="panel-body profile-view-dis">
                    <h3> Student Details</h3>
                    <div className="row">
                      <div className="profile-view-tab">
                        <p>
                          <span>Name</span>: <b>{AdvanceReceiptData?.srname}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Father's Name </span>:<b> {studentPaymentHistoryData.father_name}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Phone(username)</span>:<b> {studentPaymentHistoryData.phone}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Medium </span>: <b>English</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Student Bar Code</span>: <b> {AdvanceReceiptData?.srregisterNO}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>class</span>: <b> {AdvanceReceiptData?.srclasses}</b>
                        </p>
                      </div>
                      <h3>Advance Receipt Data (Receipt No: {AdvanceReceiptData.id})</h3>
                     <div className="row">
                        <div className="profile-view-tab">
                          <p>
                            <span>Fee Types</span>:<b> {AdvanceReceiptViewData?.feetype}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Total Fee</span>: {}
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Advance Amount</span>:<b> {AdvanceReceiptViewData?.advance_amount}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Discount</span>: <b>{AdvanceReceiptViewData.discount  }</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Due Amount </span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Receipt Date</span>:<b> {AdvanceReceiptViewData?.create_date}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Due Date</span>:<b> {AdvanceReceiptViewData?.due_date}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Payment Status</span>:<b> {PaymentStatus}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span><input
                              type="button"
                              className="btn btn-success"
                              onClick={ViewReceipt}
                              value="Preview Receipt"
                            /></span>
                          </p>
                        </div>
                      </div>
                         <div>
                    
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
