import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../../Components/Loader/Loader";
import axios from "axios";
import request from "../../../Apis/request";
import { BaseURL } from "../../../api/DataApis";

function Subject(props) {
  const [subject, setSubject] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    // props.setProgress(10);
    setLoading(true);
    const response = await axios.get(
      `${BaseURL}/subject/getSubjects`
    );
    const data = await response.data;
    // props.setProgress(80);
    setTimeout(() => {
      if (data) {
        setLoading(false);
        setSubject(data.subjects);
      }
      // props.setProgress(100);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(async (results) => {
      const DeleteSubjectApi = `${BaseURL}/subject/delSubject`;

      if (results.value) {
        try {
          const res = await request({
            url: `${DeleteSubjectApi}/${id}`,
            method: "POST",
            data: JSON.stringify({
              // schoolyearID: 10,
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
          console.error("Error deleting class:", error);
        }
      }
    });
  };  
//axios.delete(`https://demo.keendroid.in/subject/delSubject/${id}` );
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
                      to="/subject/add"
                    >
                      <i className="fa fa-plus"></i> Add Subject
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Subject</h5>
              </div>
              <div className="card-body">
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Subject Name</th>
                        <th>Subject Code</th>
                        <th>Class Name</th>
                        <th>Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
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
                                <Link onClick={(e) => { e.preventDefault(); handleDelete(u.subjectID); }}>
    <i className="fa fa-trash delete"></i>
  </Link>

         
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                    {/* <tfoot>
                      <tr>
                        <th>#</th>
                        <th>Subject Name</th>
                        <th>Subject Code</th>
                        <th>Class Name</th>
                        <th>Type</th>
                        <th>Action</th>
                      </tr>
                    </tfoot> */}
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

export default Subject;
