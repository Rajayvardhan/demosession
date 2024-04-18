import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import { BaseURL, schoolyearID } from "../../../../api/DataApis";
import request from "../../../../Apis/request";
import Swal from "sweetalert2";
import { Modal, Button } from 'react-bootstrap';

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
  const [totaldueAmount, setTotalDueAmount] = useState([]);
  const [DepositAmount, SetDepositAmount] = useState([]);
  const [Discount, setDiscount] = useState([]);
  const [TotalDiscount, setTotalDiscount] = useState([]);
  const [Remark, setRemark] = useState([]);
  const [PaymentMethod, setPaymentMethod] = useState([]);
 const [studentID, setStudentID] = useState([]);
 const [selectedOptions, setSelectedOptions] = useState([]);
 const [ParentID, setParentID] = useState([]);
 const[ParentData, setParentData] = useState([]);
 const[FatherName, setFatherName] = useState("");
//  const [showPopup, setShowPopup] = useState(false);

  const AddApi = `${BaseURL}/feecollection/depositFee`;
  // const BaseURL = `https://demo.keendroid.in`;
  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
      const apiEndpoint = `${BaseURL}/feecollection/searchFeeRecord`;
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

      if (response.invoices) {
        setFeeRecord(response.invoices);
      }
    } catch (error) {
      console.error("Error fetching fee data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStudentChange = (selectedValue) => {
    const [registerNumber, studentName, studentID, parentID, father_name ] = selectedValue.split(",");
console.log(selectedValue);
    // Now you can use registerNumber, studentName, and studentID separately as needed
    console.log("Register Number:", registerNumber);
    console.log("Student Name:", studentName);
    console.log("Student ID:", studentID);
console.log("parentID", parentID);
console.log("father_name:",  father_name);

    // Update your state or perform other actions as needed
    SetRegistrationNumber(registerNumber);
    setSelectedStudentName(studentName);
    setStudentID(studentID); // Assuming you have a state variable for studentID
    setParentID(parentID);
    setFatherName(father_name);
    // Fetch data based on the selected student if needed
    fetchData(registerNumber);
  };

  const handleTotalDueAmountChange = (e) => {
    setTotalDueAmount(e.target.value);
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
  setDiscount(selectedOptions);
    //setDiscount(selectedOptions.map(option => option.value));
  };
  
  const handleTotalDiscountChange = () => {
  // Assuming Discount is an array of objects like [{ value: 1, text: "1000" }, { value: 2, text: "2000" }, ...]

  const valuesArray = Discount.map(item => parseInt(item.value)); // Parse the value to integer

  const sum = valuesArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Calculating the sum

  setTotalDiscount(sum);
};


useEffect(() => {
  // Call handleTotalDiscountChange whenever discounts change
  handleTotalDiscountChange();
}, [Discount]);

  const handleRemarkChange = (e) => {
    setRemark(e.target.value);
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
    // console.log("ParentID", parentID);
  }, [FeeRecord, invoices, selectedStudentName]); // Include FeeRecord, invoices, and selectedStudentName as dependencies

  const saveData = async (e) => {
    e.preventDefault();
    const dAmount = TotalDiscount;

    const valuesArray = Discount.map(item => item.value);
    console.log("valuesArray", valuesArray);
  
    const dataToSave = {
      usertypeID: 1,
      username: "admin",
      schoolyearID: schoolyearID,
      loginuserID: 5,
      fdAmount: DepositAmount,
      dAmount: dAmount,
      invoices: invoiceId,
      discounts: valuesArray,
      payment_date: PaymentDate,
      registerNO: RegistrationNumber,
      studentID: studentID,
      chq_date: "2023-11-28",
      fchqBank: "sbi",
      paymenttype: PaymentMethod,
      chq_no: 123,
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
  
        var fcID = response.fcID;
        var urll = `${BaseURL}/feecollection/printPreview/${schoolyearID}/${fcID}`;
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
    navigate(`/account/feehistory/academic/${RegistrationNumber}`, { state: {StudentRegistrationNumber : RegistrationNumber } });


    handleClosePopup(); // Close the modal after navigation
  };
console.log("studentData", students);
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
                      Fee collection
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
                            </div>
                          </div>
                          <div className="form-group">
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
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2">
                                <label>Total Due Amount</label>
                              </div>
                              <div className="col-sm-4">
                                <input
                                  onChange={handleTotalDueAmountChange}
                                  className="form-control"
                                  type="text"
                                  name="fdAmount"
                                  id="fdAmount"
                                  value={totaldueAmount}
                                  readOnly
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
                                  onChange={handleDepositAmountChange}
                                  className="form-control"
                                  type="text"
                                  name="fdamount"
                                  id="fdamount"
                                  value={DepositAmount}
                                  // fdamount
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2">
                                <label>Discount</label>
                              </div>
                              <div className="col-sm-4">
                                
                              <Select2
                              className="form-control"
                              multiple
                              //value={Discount}
                              value={Discount.map(option => option.value)}
                              onChange={handleDiscountChange}
                              options={{
                                placeholder: 'Select discount',
                                tags: true,
                              }}
                              data={[
                                { id: '500', text: '500' },
                                { id: '1000', text: '1000' },
                                { id: '5000', text: '5000' },
                              ]}
                            />
  


                                  </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-2">
                                <label>Total Discount</label>
                              </div>
                              <div className="col-sm-4">
                              <input
  className="form-control"
  name="total_discount"
  id="total_discount"
  type="text"
  value={TotalDiscount} // Set the value to TotalDiscount state variable
  readOnly // Set readOnly attribute to make it readonly
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