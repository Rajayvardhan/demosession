import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Swal from 'sweetalert2';
import axios from "axios";
import request from "../../../Apis/request";
import { BaseURL, Token } from "../../../api/DataApis";
function Shift(props) {
  const [shift, setShift] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    // props.setProgress(10);
    setLoading(true);
    await axios
      .get(`${BaseURL}/shift/getShift`)
      .then(async (response) => {
        // props.setProgress(30);
        const data = await response.data;
        // props.setProgress(80);
        setTimeout(() => {
          if (data) {
            setLoading(false);
            setShift(data.shift);
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
      const DeleteShiftApi =`${BaseURL}/shift/delShift/${id}` ;

      if (results.value) {
        try {
          const res = await request({
            url: `${DeleteShiftApi}/${id}`,
            method: "POST",
            data: JSON.stringify({
              // schoolyearID: 10,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Token":Token
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
//(`https://demo.keendroid.in/shift/delShift/${id}` );
  return (
    <>
      {/* <Breadcrumb title="Shift" /> */}
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
                      to="/shift/add"
                    >
                      <i className="fa fa-plus"></i> Add Shift{" "}
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Shift</h5>
              </div>
              <div className="card-body">
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Shift Name</th>
                        {/* <th>Shift Id</th> */}
                        <th>Shift Start Time</th>
                        <th>Shift Return Time</th>
                        <th>Shift End Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shift &&
                        shift.map((u, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{u.shift_name}</td>
                              {/* <td>{u.shiftID}</td> */}
                              <td>
                                {u.shiftInSTime} To {u.shiftInETime}
                              </td>
                              <td>
                                {u.shiftSTime} To {u.shiftETime}
                              </td>
                              <td>
                                {u.shiftOutSTime} To {u.shiftOutETime}
                              </td>
                              <td>
                                <Link to={`/shift/edit/${u.shiftID}`}>
                                  <i className="fa fa-edit edit"></i>{" "}
                                </Link>
                              <Link onClick={(e) => { e.preventDefault(); handleDelete(u.shiftID); }}>
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

export default Shift;
