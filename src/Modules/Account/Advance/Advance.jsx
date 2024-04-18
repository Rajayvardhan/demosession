import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../Components/Loader/Loader";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
import request from "../../../Apis/request";

function Advance(props) {
  document.title = "Advance";

  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState("");
  const [advanceReceiptData, setAdvanceReceiptData] = useState([]);

  const selectClassHandler = (e) => {
    setSelectedClassId(e.target.value);
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let url = `${BaseURL}/advance/getAdvances`;
        if (selectedClassId) {
          url = `${BaseURL}/advance/getAdvances/${selectedClassId}`;
        }
        const res = await request({
          url: url,
          method: "POST",
          data: JSON.stringify({
            schoolyearID: schoolyearID,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
  
        setClasses(res.classes);
        setAdvanceReceiptData(res.advance);
        console.log("AdvanceReceipt_list", res.advance); // Use res.advance directly here
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    // Call fetchData after selectedClassId is updated
    fetchData();
  }, [selectedClassId]);
   // useEffect depends on selectedClassId
  
  






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
                      to="/advance/add"
                    >
                      <i className="fa fa-plus"></i> Add Advance
                    </Link>
                    <select className= "select1" onChange={selectClassHandler} style={{padding:"8px 10px",borderRadius:"40px",marginLeft:"910px", marginTop:"9px",position:"relative",top:"-45px"}}>
               <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      { classes && classes.map((classes) => {
                        return (
                          <option
                          key={classes.classesID}
                          value={classes.classesID}
                          >
                            {classes.classes}
                          </option>
                        );
                      })}
                        </select>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Advance</h5>
              </div>
              <div className="card-body">
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                    
                         
                      <tr>
                        <th>#</th>
                        <th>Enroll Id</th>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Advance Amount</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                        <th>Create Date</th>
                        <th>Action</th>
                      </tr>
                       
                    </thead>
                    <tbody>
                    {advanceReceiptData &&
                        advanceReceiptData.map((u, i) => { 
                          const result = classes.find(
                            (item) => item.classesID === u.classesID
                          );
                          return (
                        <tr>
                            <td>{i+1}</td>
                            <td>{u.studentID}</td>
                            <td>{u.srname}</td>
                            <td>{result?.classes}</td>
                            <td>{u.advance_amount}</td>
                            <td>{u.paidstatus}</td>
                            <td>{u.date}</td>
                            <td>{u.created}</td>
                            <td>
                            <Link to={`/advance/view/${u.id}`} state={{ students:u}}><i className="fa fa-eye view"> </i>
                                  </Link>
                                
                                  <i className="fa fa-trash delete"></i>
                                  {/* advance/view */}
                                 
                                
                                  {/* <i className="fa fa-trash delete"></i> */}
                                
                            </td>
                        </tr>
                        )})}
                    </tbody>
                    {/* <tbody>
                      {subject &&
                        subject.map((u, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{u.subject}</td>
                              <td>{u.subject_code}</td>
                              <td>{u.classes}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-xs"
                                >
                                  {u.type == 1 ? "Mandatory" : "Optional"}
                                </button>
                              </td>
                              <td>
                                <Link to={`/subject/edit/${u.subjectID}`}>
                                  <i
                                    className="fa fa-edit edit"
                                  ></i>
                                </Link>
                                <Link
                                  onClick={() =>
                                    handleDelete(u.subjectID)
                                  }
                                >
                                  <i
                                    className="fa fa-trash delete"
                                  ></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody> */}
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

export default Advance;
