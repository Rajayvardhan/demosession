import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../../../Components/Loader/Loader";
import axios from "axios";
import { BaseURL } from "../../../../api/DataApis";
import request from "../../../../Apis/request";


function Duefees(props) {
    document.title = "Due Fees";
  const [loading, setLoading] = useState(false);
const[classes, setClasses] = useState([]);
const [selectedOption2, setSelectedOption2] = useState('');
  const apiEndpoint = `${BaseURL}/classes/getClasses`;
  const fetchData = async ( ) => {
    // console.log("classID", classesID);
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);

    var url = apiEndpoint;
             
    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"GET",
   
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    if (res && res.classes) {
      //const data = res.data.student;
       //console.log("res",res.students)
      // setExamState(res.exam_list);
      setClasses(res.classes);  
      // console.log("exam state", ExamState);
      //sreturn res.student;
      }

  
    return [];
}

useEffect(() => {
  fetchData ();
}, []);


console.log("classdata", classes);
const handleOption2Change = (event) => {
  setSelectedOption2(event.target.value);
};

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
                      to="/duefees/add"
                    >
                      <i className="fa fa-plus"></i> Add Due Fees
                    </Link>
                  </div>
                <div>
                <select value={selectedOption2} style={{position :"relative",left:"578px",border:"1px solid", borderRadius:"45px",
                top:"5px",width:"114%",textAlign:"center",fontWeight:"600"}}
                                  onChange={handleOption2Change}
                                    name="classesID"
                                    id="classesID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      
                                      Select Class
                                    </option>
                                    <option value="-1">Select All</option>
                                    {classes.map((classes) => {
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}
                          >
                            {classes.classes}
                          </option>
                        );
                      })}

                                  </select>{" "}
                </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Due Fees</h5>
              </div>
              <div className="card-body">
                {/* {loading && <Loader />} */}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Enroll Id</th>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>ACA FEES Total</th>
                        <th>Deposited</th>
                        <th>Rebate</th>
                        <th>Due Amount</th>
                        <th>Bus Fees</th>
                        <th>Deposited</th>
                        <th>Rebate</th>
                        <th>Due</th>
                        <th>Total Due</th>
                    <th>Action</th>
                      
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <td>
                              
                                
                                  <i className="fa fa-eye view"></i>
                                
                                
                                  <i className="fa fa-trash delete"></i>
                                
                            </td> */}
                        </tr>
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

export default Duefees;
