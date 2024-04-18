import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
// import Loader from "../../../../Components/Loader/Loader";
import axios from "axios";
import request from "../../../../Apis/request";
import { BaseURL, schoolyearID } from "../../../../api/DataApis";


function Invoice(props) {
    document.title = "Pay Slip";
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);
  const [selectClassid, setSelectClassid] = useState("");
  const [FeeNameListing, setFeeNameListing] =  useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const[invoices, setInvoices] = useState([]);

   const SelectClassHandler = (e) => {

    setSelectedClass(e.target.value);
    fetchData( e.target.value );

  }
  
  const fetchData = async ( selectedClass ) => {
    console.log("classesID", selectedClass);
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);

    var url = `${BaseURL}/invoice/getInvoices`;
    if( selectedClass ) {
      url = `${BaseURL}/invoice/getInvoices/`+selectedClass;
    } 

    let res = await request({
      
      url:url,
      // url: 'posts',
      method: "POST",
      data: JSON.stringify({
        "schoolyearID": schoolyearID
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    if (res && res.invoices) {
      //const data = res.data.student;
       //console.log("res",res.students)
       setInvoices(res.invoices);
      setClasses(res.classes);  
      console.log("invoices", invoices);
      
      //sreturn res.student;
      }

  
    return [];
}

useEffect(() => {
  fetchData ();
}, []);

const handleDelete = async (id) => {
  Swal.fire({
    icon: "warning",
    title: "Are you sure?",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
  }).then(async (results) => {
    const DeleteInvoiceApi = `${BaseURL}/invoice/delInvoice`;
    

    if (results.value) {
      try {
        const res = await request({
          url: `${DeleteInvoiceApi}/${id}`,
          method: "POST",
          data: JSON.stringify({
            schoolyearID: schoolyearID,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (res.status === "200") {
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Data Deleted Successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
          fetchData();
        } else {
          alert("Error");
        }
      } catch (error) {
        console.error("Error deleting exam:", error);
      }
    }
  });
};
useEffect(() => {
  fetchData ();
}, []);

return (
    <>
      {/* <Breadcrumb title="Subject" /> */}
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
                      to="/invoicee/add"
                    >
                      <i className="fa fa-plus"></i> Add a Invoice
                    </Link>
                    <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
               <select className= "select1"  value={selectedClass} onChange={SelectClassHandler} style={{padding:"8px 10px",borderRadius:"40px",marginLeft:"634px", marginTop:"9px",position:"relative",top:"-45px"}}>
               <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      {classes.map((classses) => {
                        
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}
                          >
                            {classses.classes}
                          </option>
                        );
                      })}
                        </select>
                  </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>Invoice</h5>
              </div>
              <div className="card-body">
                {/* {loading && <Loader />} */}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                   
                      <tr>
                        <th>#</th>
                        <th>Enroll Id</th>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Amount</th>
                        <th>Paid</th>
                        <th>Discount</th>
                        <th>Due Amount</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                    {invoices &&
                        invoices.map((u, i) => { 
                          return (
                        <tr>
                            <td>{i+1}</td>
                            <td>{u.srregisterNO}</td>
                            <td>{u.srname}</td>
                            <td>{u.srclasses}</td>
                            <td>{u.amount}</td>
                            <td></td>
                            <td>{u.discount}</td>
                            <td></td>
                            <td>{u.paidstatus}</td>
                            <td>{u.date}</td>
                            <td>
                              
                                
                                
  

                                  
  <Link to={`/invoice/view/${u.invoiceID}`} state={{ InvoiceData:u}}><i className="fa fa-eye view"> </i>
  </Link>
                                
                                  <Link onClick={(e) => { e.preventDefault(); handleDelete(u.invoiceID); }}>
    <i className="fa fa-trash delete"></i>
  </Link>
                                
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

export default Invoice;
