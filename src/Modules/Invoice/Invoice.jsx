import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";

function Invoice(props) {
    document.title = "Invoice | Listing";
//   const [subject, setSubject] = useState([]);
  const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     // props.setProgress(10);
//     setLoading(true);
//     const response = await axios.get(
//       "http://localhost/schoolcode/myapi"
//     );
//     const data = await response.data;
//     // props.setProgress(80);
//     setTimeout(() => {
//       if (data) {
//         setLoading(false);
//         setSubject(data.subjects);
//       }
//       // props.setProgress(100);
//     }, 1000);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDelete = (id) => {
//     Swal.fire({
//       icon: "warning",
//       title: "Are you sure?",
//       // text: "You won't be able to revert this!",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "No, cancel!",
//     }).then((results) => {
//       if (results.value) {
//         axios.delete(`https://demo.keendroid.in/subject/delSubject/${id}` );
//         Swal.fire({
//           icon: "success",
//           title: "Deleted!",
//           text: "Data Deleted Successfully...",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         fetchData();
//       }
//     });
//   };

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
                      to="/viho/invoice/add"
                    >
                      <i className="fa fa-plus"></i> Add Invoice
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Invoice</h5>
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
                        <th>Fee Type</th>
                        <th>Amount</th>
                        <th>Due Amount</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                        <th>Action</th>
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                           
                            <Link to={`/viho/invoice/edit`}>
                                  <i
                                    className="fa fa-edit edit"
                                  ></i>
                                </Link>
                              
                                
                                  <i className="fa fa-eye view"></i>
                                
                                
                                  <i className="fa fa-trash delete"></i>


                                  <i class="fa fa-credit-card edit"></i>
                                
                            </td>
                        </tr>
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

export default Invoice;
