import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import axios from "axios";
import AddButton from "../../Components/Buttons/AddButton"; 
import image from "../../assets/images/dummy_pic.jpeg";
import { BaseURL } from "../../api/DataApis";
import request from "../../Apis/request";

function Staff(props) {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiEndPoint = `${BaseURL}/teacher/getStaff`;

  const fetchData = async () => {
    
    // props.setProgress(10);
    setLoading(true);
    await axios
      .get(apiEndPoint)
      .then(async (response) => {
        // props.setProgress(30);
        const data = await response.data;
        console.log("data"+ data);
        // props.setProgress(80);
        setTimeout(() => {
          if (data) {
            setLoading(false);
            setStaff(data.staff);
          }
          // props.setProgress(100);
        }, 1000);
      });
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
      const DeleteExamApi = `${BaseURL}/teacher/delStaff/${id}`;

      if (results.value) {
        try {
          const res = await request({
            url: `${DeleteExamApi}/${id}`,
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
  
  
  
return (
    <>
      {/* <Breadcrumb title="Staff" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <div className="col-sm-4 add">
                    {/* <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/staff/add/:sid"
                    > */}
                <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" to = "/staff/add/:sid" >

                <i className="fa fa-plus"></i> Add Staff{" "}


                </Link>
                    {/* </Link> */}
                  </div>
                </div>
                <div>
                  <hr style={{marginTop:"20px"}} />
                </div>
                <h5>All Staff</h5>
              </div>
              <div className="card-body">
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Employee Code</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Designation</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staff &&
                        staff.map((staffs, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{staffs.registerNO}</td>
                              <td>
                                <img src={staffs.photo} />
                              </td>
                              <td>{staffs.name}</td>
                              <td>{staffs.phone}</td>
                              <td>{staffs.designation}</td>
                              <td>
                                <Link to={`/staff/edit/${staffs.teacherID}`}>
                                  <i className="fa fa-edit edit"></i>
                                </Link>
                                <Link to={`/staff/view/${staffs.teacherID}`}>
                                  <i className="fa fa-eye view"></i>
                                </Link>
                                {/* <Link onClick={(e) => e.preventDefault()}>
    <i
      onClick={() => handleDelete(staffs.teacherID)}
      className="fa fa-trash delete"
      style={{ fontSize: "18px" }}
    ></i>
  </Link> */}

  <Link onClick={(e) => { e.preventDefault(); handleDelete(staffs.teacherID); }}>
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

export default Staff;
