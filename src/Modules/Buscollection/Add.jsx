import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import { BaseURL, schoolyearID } from "../../api/DataApis";
import request from "../../Apis/request";
import Swal from "sweetalert2";
import { Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Add() {
  const [Feedata, setFeeData] = useState([]);
  const [students, setStudents] = useState([]);
  const [RegistrationNumber, SetRegistrationNumber] = useState("");
  const [FeeRecord, setFeeRecord] = useState([]);
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);
  const [sessionRecord, setSessionRecord] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [selectedStudentName, setSelectedStudentName] = useState("");
  const [invoiceId, setInvoiceID] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [totalAmount, setTotalAmount] = useState([]);
  const [depositAmount, SetDepositAmount] = useState([]);
  const [Remark, setRemark ] = useState([]);
  const[tmember, setTmember] = useState({});
  const [PaymentHistory, setPaymentHistory] = useState([]);
  const [classesID, setClassesID] = useState([]);
  const [studentData, setStudentData] = useState([]);
  // const [studentID, setStudentID] = useState([]);

  // const [depositAmount, setDepositAmount] = useState([]);
  const [PaymentMethod, setPaymentMethod] = useState([]);
 const [studentID, setStudentID] = useState([]);
 const [selectedOptions, setSelectedOptions] = useState([]);
 const [ParentID, setParentID] = useState([]);
 const[ParentData, setParentData] = useState([]);
 const[FatherName, setFatherName] = useState("");
 const [selectedtransportRoute, setSelectedTransportRoute] = useState([]);
 const[BusRouteListing, setBusRouteListing] = useState([]);
 const [Routes, setRoutes] = useState([]);
//  const [showPopup, setShowPopup] = useState(false);
const navigateTransport = () => {
navigate(`/transport/member/add`);
}
const handletotalAmount = (e) => {
  setTotalAmount(e.target.value);
}
const handleRemarkChange = (e) => {
setRemark(e.target.value);
}
const handleTransportRoute = (e) =>{
  setSelectedTransportRoute(e.target.value);
}

  const AddApi = `${BaseURL}/buscollection/depositBusFee`;
  // const BaseURL = `https://demo.keendroid.in`;
  const handleClosePopup = () => {
    setShowPopup(false);
  };


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
   
      
  
  
  
    return [];
  }
  useEffect(() => {
    fetchRouteNumber();
  }, []);




  const currentDate = new Date().toISOString().split("T")[0];
  const [PaymentDate, SetPaymentDate] = useState(currentDate);
  document.title = "Feecollection | Add";
  let navigate = useNavigate();
  useEffect(() => {
    SetPaymentDate(currentDate);
  }, []);

  const redirect = () => {
    let path = `/feecollection`;
    navigate(path);
  };
  const [selectedInvoices, setSelectedInvoices] = useState([]);

  const handleCheckboxChange = (invoiceID) => {
    console.log("invoiceID", invoiceID);
    // Toggle the selection of the invoiceID
    setSelectedInvoices((prevSelected) => {
      if (prevSelected.includes(invoiceID)) {
        setInvoiceID((prevInvoiceId) =>
          prevInvoiceId.filter((id) => id !== invoiceID)
        );
        return prevSelected.filter((id) => id !== invoiceID);
      } else {
        setInvoiceID((prevInvoiceId) => [...prevInvoiceId, invoiceID]);
        return [...prevSelected, invoiceID];
      }
    });
  };
///account/feehistory
  const handleSelectAllChange = () => {
    setSelectedInvoices((prevSelected) => {
      if (prevSelected.length === invoices.length) {
        // If all are selected, deselect all
        setInvoiceID([]); // Set invoiceId state to an empty array
        return [];
      } else {
        // If not all are selected, select all
        const allInvoiceIds = invoices.map((invoice) => invoice.invoiceID);
        setInvoiceID(allInvoiceIds); // Set invoiceId state to all invoice IDs
        return allInvoiceIds;
      }

    });
  };

  const fetchData = async (registrationNumber) => {
    try {
      const apiEndpoint = `${BaseURL}/buscollection/searchBusFeeRecord`;
      setLoading(true);

      const response = await request({
        url: apiEndpoint,
        method: "POST",
        data: JSON.stringify({
          schoolyearID: schoolyearID,
          search: registrationNumber,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      console.log("response", response);
      setClasses(response.classes);
      setInvoices(response.invoices);

      if (response.tmember) {
        setTmember(response.tmember);
      }
      if (response.history) {
        setPaymentHistory(response.history);
      }
      if (response.student) {
        setStudentData(response.student);
      }
    } catch (error) {
      console.error("Error fetching fee data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStudentChange = (selectedValue) => {
    const [registerNumber, studentName, studentID, parentID, father_name, phone ] = selectedValue.split(",");
console.log(selectedValue);
    // Now you can use registerNumber, studentName, and studentID separately as needed
    console.log("Register Number:", registerNumber);
    console.log("Student Name:", studentName);
    console.log("Student ID:", studentID);
console.log("parentID", parentID);
console.log("father_name:",  father_name);
console.log("phone",phone );

    // Update your state or perform other actions as needed
    SetRegistrationNumber(registerNumber);
    setSelectedStudentName(studentName);
    setStudentID(studentID); // Assuming you have a state variable for studentID
    setParentID(parentID);
    setFatherName(father_name);
    // Fetch data based on the selected student if needed
    fetchData(registerNumber);
  };

 
  const handleDepositAmountChange = (e) => {
    SetDepositAmount(e.target.value);
  };
  const handleDiscountChange = ( event ) => {
    // alert("ook");
    event.preventDefault();
    console.log("selectedOptions", event.target.selectedOptions);
    const selectedOptions = Array.from(event.target.selectedOptions).map(option => ({
    value: option.value,
    text: option.text
  }));
  console.log("Selected options:", selectedOptions);
  // setDiscount(selectedOptions);
    //setDiscount(selectedOptions.map(option => option.value));
  };





  const handleDepositChange = (e) => {
    SetDepositAmount(e.target.value);
  };
  const handlePaymentDateChange = (e) => {
    // Handle date changes if needed
    SetPaymentDate(e.target.value);
  };
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post(
          `${BaseURL}/student/getStudents/-1`,
          

          {
            schoolyearID: schoolyearID,
          }
        );

        const { students, parents } = response.data;
        console.log("studentsdata",students);
        const studentsWithParentData = students.map(student => {
          const parent = parents.find(parent => parent.parentsID === student.parentID);
          return { ...student, father_name: parent ? parent.father_name : null };

      });
      
  
        // Now studentsWithParentData contains students data along with their parent information
        console.log("Students with Parent Data:", studentsWithParentData);
        setStudents(studentsWithParentData);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    console.log("feeRecord", FeeRecord);
    console.log("invoiceData", invoices);
    console.log("studentName", selectedStudentName);
    console.log("studentID", studentID);
    // console.log("ParentID", parentID);
  }, [FeeRecord, invoices, selectedStudentName]); // Include FeeRecord, invoices, and selectedStudentName as dependencies

  const saveData = async (e) => {
    e.preventDefault();


   
  
    const dataToSave = {
      usertypeID: 1,
      username: "admin",
      schoolyearID: schoolyearID,
      loginuserID: 5,
      fdAmount: depositAmount,
      payment_date: PaymentDate,
      registerNO: RegistrationNumber,
      studentID: studentID,
      transportID : tmember.transportID,
      
      fchqBank: "sbi",
      paymenttype: PaymentMethod,
      totalAmount: tmember.tbalance,
    };
    // const schoolyearID = dataToSave.schoolyearID;
    console.log(dataToSave);
  
    try {
      let response = await request({
        url: AddApi,
        method: "POST",
        data: JSON.stringify(dataToSave),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
  
      if (response.status === "200") {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Fee Submitted Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
  
        var cID = response.cID;
        var urll = `${BaseURL}/buscollection/printPreview/${schoolyearID}/${cID}`;
        // https://demo.keendroid.in/feecollection/printPreview/${schoolyearID}${fcID}
  
        // Navigate to the print preview URL with fcID in the body
  

          
        // Optionally, you can navigate using window.location.href if you don't have access to history or useNavigate
          window.location.href = urll;
      } 
    
    } catch (error) {
      console.error("Error saving data:", error);
      // Handle error
    }
  };
  
  
  const discountOptions = [
    { value: "500", label: "500" },
    { value: "1000", label: "1000" },
    { value: "5000", label: "5000" },
  ];

  const handleNavigateToFeeHistory = () => {
    navigate(`/buscollection/viewhistory/${RegistrationNumber}`, {
      state: {
        PaymentHist: PaymentHistory,
        studentName: selectedStudentName,
        fatherName: FatherName,
        // Add more data properties as needed
      }
    });


    handleClosePopup(); // Close the modal after navigation
  };
console.log("studentData", students);
console.log("routessss", Routes);
console.log("paymentHistory", PaymentHistory);
console.log("tmemberData", tmember);
console.log("studenttttttttttData", studentData);
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
                     Bus Fee collection
                    </h4>
                  </div>
                  <div className="caption font-dark col-md-2">
                    <h5 className="caption-subject bold uppercase mx-3"></h5>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{ marginTop: "-10px" }} />
                  <div className="row">
                    {RegistrationNumber == 0 ? (
                      <div className="col-sm-12">
                        <form
                          className="form-horizontal"
                          encType="multipart/form-data"
                          role="form"
                          method="post"
                        >
                          <div className="form-group">
                            <div className="row">
                              <label
                                htmlFor="s2id_autogen1"
                                className="col-sm-2 control-label"
                              >
                                Student Bar Code
                              </label>
                              <div className="col-sm-3">
                                <Select2
                                  className="form-control"
                                  name="studentID"
                                  data={students.map(
                                    (student) =>
                                      `${student.registerNO},${student.name},${student.studentID},${student.parentID}, ${student.father_name}`
                                  )}
                                  value={RegistrationNumber}
                                  onSelect={(event) =>
                                    handleStudentChange(event.target.value)
                                  }
                                />
                              </div>


                              <input
                                type="submit"
                                className="col-sm-2 btn btn-success"
                                value="Search"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className="col-sm-12">
                        <form onSubmit={saveData}>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <label
                                      htmlFor="s2id_autogen1"
                                      className="control-label"
                                    >
                                      Name
                                    </label>
                                  </div>
                                  <div className="col-sm-2">:</div>
                                  <div className="col-sm-6">
                                    <p>
                                      <b>{selectedStudentName}</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <label
                                      htmlFor="s2id_autogen1"
                                      className="control-label"
                                    >
                                      Father`s Name
                                    </label>
                                  </div>
                                  <div className="col-sm-2">:</div>
                                  <div className="col-sm-6">
                                    <p>
                                      <b>{FatherName}</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <label
                                      htmlFor="s2id_autogen1"
                                      className="control-label"
                                    >
                                      Student Type
                                    </label>
                                  </div>
                                  <div className="col-sm-2">:</div>
                                  <div className="col-sm-6">
                                    <p>
                                      <b>Regular</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <label
                                      htmlFor="s2id_autogen1"
                                      className="control-label"
                                    >
                                      Class
                                    </label>
                                  </div>
                                  <div className="col-sm-2">:</div>
                                  <div className="col-sm-6">
                                    <p>
                                      <b>V</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <label
                                      htmlFor="s2id_autogen1"
                                      className="control-label"
                                    >
                                      Total Fee
                                    </label>
                                  </div>
                                  <div className="col-sm-2">:</div>
                                  <div className="col-sm-6">
                                    <p>
                                      <b>10000</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <label
                                      htmlFor="s2id_autogen1"
                                      className="control-label"
                                    >
                                      Deposited Fee
                                    </label>
                                  </div>
                                  <div className="col-sm-2">:</div>
                                  <div className="col-sm-6">
                                    <p>
                                      <b>5000</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <label
                                      htmlFor="s2id_autogen1"
                                      className="control-label"
                                    >
                                      Select Bus fee(No of months)
                                    </label>
                                  </div>
                                  <div className="col-sm-2">:</div>
                                  <div className="col-sm-6">
                                    <p>
                                      <b>11 months</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="form-group">
                            <div className="row">
                              <h5>Invoice List : </h5>
                              <div className="col-sm-9">
                                <table className="table">
                                  <thead>
                                    <tr className="headback">
                                      <th>Sr. No.</th>
                                      <th>Due Amount</th>
                                      <th>Due Date</th>
                                      <th>Term</th>
                                      <th>
                                        <input
                                          type="checkbox"
                                          onChange={handleSelectAllChange}
                                          checked={
                                            selectedInvoices.length ===
                                              invoices.length &&
                                            invoices.length !== 0
                                          }
                                        />
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {invoices &&
                                      invoices.map((invoice, index) => (
                                        <tr key={index} className="backone">
                                          <td>{index + 1}</td>
                                          <td>{invoice?.amount}</td>
                                          <td>{invoice?.due_date}</td>
                                          <td>{invoice?.term}</td>
                                          <td>
                                            {" "}
                                            <input
                                              type="checkbox"
                                              onChange={() =>
                                                handleCheckboxChange(
                                                  invoice.invoiceID
                                                )
                                              }
                                              checked={selectedInvoices.includes(
                                                invoice.invoiceID
                                              )}
                                            />
                                          </td>
                                        </tr>
                                      ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div> */}
                <div className="form-group">
    <div className="row">
        <div className="col-sm-2">
            <label>Bus Route</label>
        </div>
        <div className="col-sm-4">
            <input
                type="text"
                value={
                    (Routes.find(route => route.transportID === tmember.transportID) ?
                        `${Routes.find(route => route.transportID === tmember.transportID).routename} (${Routes.find(route => route.transportID === tmember.transportID).bus_name})`
                        : 'no tmember added'
                    )
                }
                readOnly
                className="form-control"
                id="transportID"
                name="transportID"
            />
        </div>
        <span className="col-sm-2 control-label">
            {tmember && tmember.transportID ?
                <Link to={`/transport/member/edit/${tmember.studentID}/${tmember.classesID}`} state={{ tmemberData: tmember, studentName: selectedStudentName }}>
                    <i style={{ marginTop: "7px", marginLeft: "-17px", fontSize: "22px" }} className="fa fa-edit edit"></i>
                </Link>
                :
                <Link to={`/transport/member/add/${studentData.studentID}/${studentData.classesID}`}  state={{ transportAddData: studentData}}  >
                <i className="fa fa-plus"></i> 
              </Link>
            }
    
        </span>
    </div>
</div>


                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2">
                                <label>Student Bar Code</label>
                              </div>
                              <div className="col-sm-4">
                                <input
                                  onChange={handleDepositAmountChange}
                                  className="form-control"
                                  type="text"
                                  readOnly
                                  name="bar_code"
                                  id="bar_code"
                                  value={RegistrationNumber}
                                  // fdamount
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2">
                                <label>Deposit Amount</label>
                              </div>
                              <div className="col-sm-4">
                                <input
                                  className="form-control"
                                  name="deposit_amount"
                                  id="deposit_amount"
                                  type="text"
                                  value={depositAmount}
                                  onChange={handleDepositChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2">
                                <label>Total Amount</label>
                              </div>
                              <div className="col-sm-4">
                              <input
  className="form-control"
  name="total_amount"
  id="total_amount"
  type="text"
  value={tmember.tbalance} // Set the value to TotalDiscount state variable
  readOnly // Set readOnly attribute to make it readonly
  onChange={handletotalAmount}
/>

                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2">
                                <label>Remark</label>
                              </div>
                              <div className="col-sm-4">
                                <input
                                  className="form-control"
                                  name="remark"
                                  id="remark"
                                  type="text"
                                  value={Remark}
                                  onChange={handleRemarkChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2">
                                <label>Date</label>
                              </div>
                              <div className="col-sm-4">
                                <input
                                  className="form-control"
                                  name="payment_date"
                                  id="payment_date"
                                  type="date"
                                  value={PaymentDate}
                                  onChange={handlePaymentDateChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2">
                                <label>Payment Method</label>
                              </div>
                              <div className="col-sm-4">
                                <select
                                  className="form-control"
                                  name="paymenttype"
                                  id="paymenttype"
                                  value={PaymentMethod}
                                  onChange={handlePaymentMethodChange}
                                >
                                  <option value="0">
                                    select payment method
                                  </option>
                                  <option value="cash">Cash</option>
                                  <option value="online">Online</option>
                                  <option value="cheque">Cheque</option>
                                  <option value="DD">DD</option>
                                  <option value="bharat_qr">Bharat QR</option>
                                  <option value="upi">UPI</option>
                                  <option value="merchant">Merchant</option>
                                  <option value="pos">POS</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2"></div>
                              <div className="col-sm-4">
                                <input
                                  type="button"
                                  className="btn btn-success"
                                  value="Add Fee"
                                  onClick= {saveData}
                                />
                              </div>
                              <div className="col-sm-4">
                                <input
                                  type="button"
                                  className="btn btn-success"
                                  onClick={handleNavigateToFeeHistory}
                                  value="view history"
                                  style={{marginLeft:"-210px"}}
                                  
                                />
                              </div>
                            </div>
                            
                          </div>
                        </form>
                      </div>
                    )}
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