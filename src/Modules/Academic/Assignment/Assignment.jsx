import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../Components/Loader/Loader";
import { BaseURL, Token, schoolyearID } from "../../../api/DataApis";
import request from "../../../Apis/request";

function Assignment(props) {
  document.title = "Assignment";

  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState("");
  const [AssignmentData, setAssignmentData] = useState([]);

  const selectClassHandler = (e) => {
    setSelectedClassId(e.target.value);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      let url = `${BaseURL}/assignment/getAssignments`;
      if (selectedClassId) {
        url = `${BaseURL}/assignment/getAssignments/${selectedClassId}`;
      }
      const res = await request({
        url: url,
        method: "POST",
        data: JSON.stringify({
          schoolyearID: schoolyearID,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Token":Token
        },
      });

      setClasses(res.classes);
      setAssignmentData(res.assignments);
      console.log("Assignment_list", res.assignments);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedClassId]);

  // const DeleteFunction = async (id) => {
  //   Swal.fire({
  //     icon: "warning",
  //     title: "Are you sure?",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, delete it!",
  //     cancelButtonText: "No, cancel!",
  //   }).then(async (results) => {
  //     const DeleteAdvanceApi = `${BaseURL}/advance/delAdvance`;

  //     if (results.value) {
  //       try {
  //         const res = await request({
  //           url: `${DeleteAdvanceApi}/${id}`,
  //           method: "POST",
  //           data: JSON.stringify({
  //             schoolyearID: schoolyearID,
  //           }),
  //           headers: {
  //             "Content-type": "application/json; charset=UTF-8",
  //           },
  //         });

  //         if (res.status === "200") {
  //           setAssignmentData(AssignmentData.filter((item) => item.id !== id));
  //           Swal.fire({
  //             icon: "success",
  //             title: "Deleted!",
  //             text: "Data Deleted Successfully...",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //           fetchData();
  //         } else {
  //           alert("Error");
  //         }
  //       } catch (error) {
  //         console.error("Error deleting exam:", error);
  //       }
  //     }
  //   });
  // };

  console.log("assignmentdata", AssignmentData);

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
                      to="/academic/assignment/add"
                    >
                      <i className="fa fa-plus"></i> Add Assignment
                    </Link>
                    <select
                      className="select1"
                      onChange={selectClassHandler}
                      style={{
                        padding: "8px 10px",
                        borderRadius: "40px",
                        marginLeft: "910px",
                        marginTop: "9px",
                        position: "relative",
                        top: "-45px",
                      }}
                    >
                      <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      {classes &&
                        classes.map((classes) => {
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
                <h5>All Assignments</h5>
              </div>
              <div className="card-body">
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Class</th>
                        <th>Uploader</th>
                        <th>File</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {AssignmentData &&
                        AssignmentData?.map((u, i) => {
                          const result = classes.find(
                            (item) => item.classesID === u.classesID
                          );
                          return (
                            <tr>
                              <td>{i + 1}</td>
                              <td>{u?.title}</td>
                              <td>{u?.description}</td>
                              <td>{u?.deadlinedate}</td>
                              <td>{result?.classes}</td>

                              <td></td>
                              <td>{u?.originalfile}</td>
                              <td>{u?.created}</td>
                              <td>
                                <Link
                                  to={`/advance/view/${u.id}`}
                                  state={{ students: u }}
                                >
                                  <i className="fa fa-eye view"> </i>
                                </Link>

                                <Link onClick={(e) => e.preventDefault()}>
                                  <i
                                    onClick={() => u.id}
                                    className="fa fa-trash delete"
                                    style={{ fontSize: "18px" }}
                                  ></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
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

export default Assignment;
