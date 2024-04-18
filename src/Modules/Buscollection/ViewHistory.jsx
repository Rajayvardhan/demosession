import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import Breadcrumb from "../../../../Components/BreadCrumb/Breadcrumb";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import {getStView} from "../../Apis/StView";
import axios from "axios";
import request from "../../Apis/request";
import { useParams  } from "react-router-dom";
import image from "../../assets/images/dummy_pic.jpeg";
// import image from "../../../../assets/images"
import { BaseURL, schoolyearID } from "../../api/DataApis";
const View = (props) => {
  const [studentPaymentHistoryData, setStudentPaymentHistoryData] = useState({});
  const [StudentName, setStudentName] = useState("");
  const [DepositedAamount, setDepositedAmount] = useState("");
  const [PaymentHistory, setPaymentHistory] = useState([]);
  const [dueAmount, setDueAmount] = useState(0);
  const [studentIDD, setstudentID] = useState([]);
   //
  const params = useParams();
  let studentID = params.sid;
//   setstudentID(studentID);
  let classesID = params.cid;
  console.log("studentID", studentID);
  let navigate = useNavigate();
  let location = useLocation();
  // console.log('students',location.state.students);
  const { PaymentHist, studentName, fatherName } = location.state;
    // const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);

 console.log("PaymentHistoryprops",PaymentHist);
console.log("fathername", fatherName);
console.log("studentName", studentName);

 const fetchData = async () => {
//   const apiEndpoint = `${BaseURL}/feecollection/getFeeHistory/Academic`;
  console.log("function call");
  setLoading(true);
  
  try {
    let res = await request({
    //   url: `${apiEndpoint}/${RegistrationNumberss}`,
      method: "POST",
      data: JSON.stringify({
        "schoolyearID": schoolyearID,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    console.log("res", res);
    setStudentName(res.students.name);
    
    if (res && res.student_parent_by_reg) {
      setStudentPaymentHistoryData(res.student_parent_by_reg);
    }
    if (res && res.paidAmount) {
      setDepositedAmount(res.paidAmount);
    }
    if (res && res.paymentHistory) {
      setPaymentHistory(res.paymentHistory);
    }
    if (res && res.historyArray && res.historyArray.length >= 5) {
      setDueAmount(res.historyArray[4].difference); // Assuming 'difference' is at index 4
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchData();
}, []);

// Use another useEffect hook to log studentPaymentHistoryData
useEffect(() => {
  console.log("studentPaymentHistoryData", studentPaymentHistoryData);
  console.log("depositedAmount", DepositedAamount);
  console.log("paymentHistory", PaymentHistory);
  console.log("DueAmount", dueAmount);
}, [studentPaymentHistoryData,DepositedAamount, PaymentHistory, dueAmount]);






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
                    <p><b>{studentName}</b></p>
                  </div>
                  <div className="panel-body profile-view-dis">
                    <h3 style={{background:"#46474c",color:"#fff",padding:"3px",borderRadius:"5px",width:"33%",position:"relative",textAlign:"center", left:"303px"}}> Student Details</h3>
                    <div className="row">
                      <div className="profile-view-tab">
                        <p>
                          <span>Name</span>: <b>{studentName}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Father's Name </span>:<b> {fatherName}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Phone(username)</span>:<b> {studentPaymentHistoryData.phone}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Medium </span>: <b></b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Student Bar Code</span>: <b>{studentID}</b>
                        </p>
                      </div>
                     
                 

                      <h3 style={{background:"#46474c",color:"#fff",padding:"3px",borderRadius:"5px",width:"98%"}} >Student Session (2023-2024)</h3>

                      <div className="row">
                        <div className="profile-view-tab">
                          <p>
                            <span>Class</span>:<b></b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Total Fee</span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Deposited Fee</span>:<b> {DepositedAamount}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Due Fee</span>: <b>{dueAmount}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Total Rebate </span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Username </span>:<b> {studentPaymentHistoryData.phone}</b>
                          </p>
                        </div>
                      </div>

                      <div>
                    
                      {  PaymentHist && PaymentHist?.map((payment, index) => (
                      <div key={index} className="row">
                         <h3 style={{background:"#46474c",color:"#fff",padding:"3px",borderRadius:"5px",width:"98%"}}>Payment History-{index + 1}</h3>
                        <div className="profile-view-tab">
                          <p>
                            <span>Receipt No </span>:<b>{payment?.receiptNO}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Other Fee Head</span>:<b>
                          </b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                        <p>
            <span>Other Fee Amount</span>:
            <b>{payment.otherFeeA !== 0 ? payment.otherFeeA : "No other fee amount"}</b>
          </p>
                        </div>
                       
                        <div className="profile-view-tab">
                          <p>
                            <span>Deposit Amount</span>:<b> {payment?.dAmount}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                        {payment.comments ? (
            <p>
              <span>Remark</span>:<b>{payment?.comments}</b>
            </p>
          ) : (
            <p>
              <span>Remark</span>:<b>No Remarks</b>
            </p>
          )}
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Payment Method</span>:<b>{payment.paymentMethod}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Date</span>:<b>{payment.creationDate}</b>
                          </p>
                        </div>
                        
                        
                      </div>
                       ))}
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
