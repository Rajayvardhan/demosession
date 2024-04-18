import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../Components/BreadCrumb/Breadcrumb";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import {getStView} from "../../Apis/StView";
import axios from "axios";
import request from "../../../../Apis/request";
import { useParams  } from "react-router-dom";
import image from "../../../../assets/images/dummy_pic.jpeg";
import { BaseURL, schoolyearID } from "../../../../api/DataApis";
// import image from "../../../../assets/images"

const View = (props) => {
  const [studentPaymentHistoryData, setStudentPaymentHistoryData] = useState({});
  const [StudentName, setStudentName] = useState("");
  const [DepositedAamount, setDepositedAmount] = useState("");
  const [PaymentHistory, setPaymentHistory] = useState([]);
  const [dueAmount, setDueAmount] = useState(0);
  const[PaymentStatus, setPaymentStatus]=  useState("");
  const[InvoiceViewData, setInvoiceViewData] = useState([]);
  const [PaymentArray, setPaymentArray] = useState([]);
   
  const params = useParams();
  let studentID = params.sid;
  let classesID = params.cid;
  console.log("studentID", studentID);
  let navigate = useNavigate();
  let location = useLocation();
  // console.log('students',location.state.students);
   const RegistrationNumberss  = location.state ? location.state.StudentRegistrationNumber : null;
   const InvoiceData = location.state.InvoiceData;
    // const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);

 console.log("registrationNumberprops",RegistrationNumberss);
 const schoolyearID = schoolyearID;
//  var urll = `${BaseURL}/advance/printPreview/${schoolyearID}/${InvoiceData?.id}`;
 
 

const ViewReceipt = ()  =>  {
//   window.location.href = urll;


}
 const fetchData = async () => {
  const apiEndpoint = `${BaseURL}/invoice/viewInvoice`;

  console.log("function call");
  //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
  // props.setProgress(10);
  setLoading(true);
  // console.log("enquireID", Enquiredata.enquiryID);
  // console.log("classId", Enquiredata.classesID);
let res = await request({
    url:`${apiEndpoint}/${InvoiceData.invoiceID}`,
    
    // url: 'posts',
    method:"POST",
    data: JSON.stringify({
      "schoolyearID":schoolyearID
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
   }
  });
  console.log("res",res)
  if (res && res.invoices) {

     const statusString = res.invoices[0].paidstatus.toString(); // Convert to string if needed
     if (statusString === '0') {
      setPaymentStatus('Open');
    } else if (statusString === '1') {
      setPaymentStatus('Closed');
     }
     else if (statusString === '2') {
        setPaymentStatus('In progress');
       }

    setInvoiceViewData(res.invoices[0]);
    // setEnquiryExtraDetails(res.detail);
     }

     if(res && res.paymentArray) {
        setPaymentArray(res.paymentArray);
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

console.log("InvoiceData", InvoiceData);
console.log("invoiceViewData", InvoiceViewData);
console.log("PaymentArray", PaymentArray);

console.log("depositedAmount",InvoiceViewData.amount)

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
                    <p><b>{InvoiceData?.srname}</b></p>
                  </div>
                  <div className="panel-body profile-view-dis">
                    <h3> Student Details</h3>
                    <div className="row">
                      <div className="profile-view-tab">
                        <p>
                          <span>Name</span>: <b>{InvoiceData?.srname}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Father's Name </span>:<b> {studentPaymentHistoryData?.father_name}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Phone(username)</span>:<b> {studentPaymentHistoryData?.phone}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Medium </span>: <b>English</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Student Bar Code</span>: <b> {InvoiceData?.srregisterNO}</b>
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>class</span>: <b> {InvoiceData?.srclasses}</b>
                        </p>
                      </div>
                      
                      <h3 style={{background:"#46474c",color:"#fff",padding:"3px",borderRadius:"5px",width:"98%"}}>Invoice Details (Invoice No: {InvoiceData?.invoiceID})</h3>
                     <div className="row">
                        <div className="profile-view-tab">
                          <p>
                            <span>Fee Types</span>:<b> {InvoiceData?.feetype}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Deposited Amount</span>:<b> {InvoiceViewData?.amount}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Tenure</span>:<b> {InvoiceData?.tenure}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Discount</span>: <b>{InvoiceData?.discount}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Due Amount </span>:
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Invoice Date</span>:<b> {InvoiceData?.create_date}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Due Date</span>:<b> {InvoiceData?.due_date}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Payment Status</span>:<b> {PaymentStatus}</b>
                          </p>
                        </div>
                        {/* <div className="profile-view-tab">
                          <p>
                            <span><input
                              type="button"
                              className="btn btn-success"
                              onClick={ViewReceipt}
                              value="Preview Receipt"
                            /></span>
                          </p>
                        </div> */}
                      </div>
                      <h3 style={{background:"#46474c",color:"#fff",padding:"3px",borderRadius:"5px",width:"33%",position:"relative",textAlign:"center", left:"303px"}}>Payment Details</h3>
                      {  PaymentArray && PaymentArray?.map((payment, index) => (
                        <>
                      <h5 style={{background:"#46474c",color:"#fff",padding:"3px",borderRadius:"5px",width:"98%"}}>Payment ID: {payment?.paymentID}</h5>
                     <div className="row">
                        <div className="profile-view-tab">
                          <p>
                            <span>Payment Amount</span>:<b> {payment?.paymentamount}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Payment Mode</span>:<b> {payment?.paymenttype}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Payment Date</span>:<b> {payment?.paymentdate}</b>
                          </p>
                        </div>
                        <div className="profile-view-tab">
                          <p>
                            <span>Payment Discount</span>:<b> {payment?.paymentdiscount}</b>
                          </p>
                        </div>
                 
                        {/* <div className="profile-view-tab">
                          <p>
                            <span><input
                              type="button"
                              className="btn btn-success"
                              onClick={ViewReceipt}
                              value="Preview Receipt"
                            /></span>
                          </p>
                        </div> */}
                      </div>
                      </>
                      ))}
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
