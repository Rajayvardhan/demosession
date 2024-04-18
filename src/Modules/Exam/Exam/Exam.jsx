import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../../Components/Loader/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import request from "../../../Apis/request";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { BaseURL, schoolyearID } from "../../../api/DataApis";

function Exam() {
  document.title = "Exam";
  const [ExamState, setExamState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saveData, setData] = useState({});
  const [classes, setClasses] = useState([]);
  const [selectClassid, setSelectClassid] = useState("");

  const SelectClassHandler = (e) => {
    setSelectClassid(e.target.value);
  };

  const apiEndpoint = `${BaseURL}/classes/getClasses`;

  const fetchDataa = async () => {
    setLoading(true);
    try {
      const res = await request({
        url: apiEndpoint,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (res && res.classes) {
        setClasses(res.classes);
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataa();
  }, [ExamState]);

  const fetchData = async () => {
    const examEndpoint = `${BaseURL}/exam/getExams`;

    setLoading(true);

    try {
      const res = await request({
        url: examEndpoint,
        method: "POST",
        data: JSON.stringify({
          schoolyearID: schoolyearID,
          classesID: selectClassid, // Pass selected class ID
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (res && res.exam_list) {
        setExamState(res.exam_list);
      }
    } catch (error) {
      console.error("Error fetching exams:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectClassid !== "") {
      fetchData();
    }
  }, [selectClassid,ExamState]); // Run whenever selectClassid changes

  const DeleteFunction = async (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(async (results) => {
      const DeleteExamApi = `${BaseURL}/exam/delExam`;

      if (results.value) {
        try {
          const res = await request({
            url: `${DeleteExamApi}/${id}`,
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
          } else {
            fetchDataa();
            // alert("Error");
          }
        } catch (error) {
          console.error("Error deleting exam:", error);
        }
      }
    });
  };
console.log("examData", ExamState);
  return (
    <> 
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <Link
                    className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                    style={{ width: "auto" }}
                    to="/exam/add"
                  >
                    <i className="fa fa-plus"></i> Add Exam
                  </Link>
                  <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
                    <select
                      onChange={SelectClassHandler}
                      className="form-control text-center"
                      style={{
                        marginLeft: "172px",
                        borderRadius: "34px",
                        border: "1px solid ",
                        marginTop: "10px",
                      }}
                    >
                      <option value="">Select Class</option>
                      <option value="-1">select All</option>
                      {classes.map((classes) => (
                        <option
                          key={classes.classesID}
                          value={classes.classesID}
                        >
                          {classes.classes}
                        </option>
                      ))}
                    </select>
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
                      {ExamState.map((e, i) => {
                        const result = classes.find(
                          (item) => item.classesID === e.classesID
                        );
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{e.term}</td>
                            <td>{result?.classes}</td>
                            <td>{e.exam}</td>
                            <td>{e.passmark}</td>
                            <td>{e.finalmark}</td>
                            <td>{e.date}</td>
                            <td>{e.end_date}</td>
                            <td>{e.note}</td>
                            <td>
  <Link to="/exam/edit" state={{ exam: e }}>
    <i
      className="fa fa-edit edit"
      style={{ fontSize: "18px" }}
    ></i>
  </Link>
  <Link onClick={(e) => e.preventDefault()}>
    <i
      onClick={() => DeleteFunction(e.examID)}
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

export default Exam;
