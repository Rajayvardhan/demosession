import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../../Components/Loader/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import request from "../../../Apis/request";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
function Test() {
  document.title = "Exam";
  const [ExamState, setExamState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ saveData, setData ] = useState({});
  const [ classes, setClasses ] = useState([]);

  const fetchData = async () => {
    console.log("function call");
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);
    
  let res = await request({
      url:`${BaseURL}/exam/getExams`,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "schoolyearID": schoolyearID,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    if (res && res.exam_list) {
      //const data = res.data.student;
       //console.log("res",res.students)
      setExamState(res.exam_list);
      setClasses(res.classes);  
      console.log("exam state", ExamState);
      //sreturn res.student;
      }

  
    return [];
}

useEffect(() => {
  fetchData ();
}, []);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((results) => {
      if (results.value) {
        axios.delete(`${BaseURL}/exam/delExam/${id}`);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Data Deleted Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        fetchData();
      // }else{
      //   console.log("result",results)
      }
    });
  };
return (
    <>
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
                      to="/classtest/add"
                    >
                      <i className="fa fa-plus"></i> Add Test
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Exam</h5>
              </div>
              <div className="card-body">
              {/* {loading && <Loader />} */}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Term</th>
                        <th>Class</th>
                        <th>Exam Name</th>
                        <th>Exam Pass Marks</th>
                        <th>Exam Final Marks</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Note</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {ExamState &&
                        ExamState.map((e, i) => {

                        const result = classes.find(item => item.classesID === e.classesID);
                          
                      return (
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e.term}</td>
                        <td>{result?.classes}</td>
                        <td>{e.exam}</td>
                        <td>{e.passmark}</td>
                        <td>{e.finalmark}</td>
                        <td>{e.date}</td>
                        <td>{e.end_date}</td>
                        <td>{e.note}</td>
                        <td>
                          <Link to="/viho/exam/edit">
                            <i
                              className="fa fa-edit edit"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </Link>
                          <Link>
                            
                            <i
                              className="fa fa-trash delete"
                              style={{ fontSize: "18px" }}
                            ></i>
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

export default Test;
