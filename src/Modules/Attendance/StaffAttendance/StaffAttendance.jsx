import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../api/DataApis";


function StudentAttendance() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    const apiEndpoint = `${BaseURL}/tattendance/tallAttendance`;
    // props.setProgress(10);
    setLoading(true);
    await axios
      .get(apiEndpoint)
      .then(async (response) => {
        // props.setProgress(30);
        const data = await response.data;
        // props.setProgress(80);
        setTimeout(() => {
          if (data) {
            // setLoading(false);
            setStaff(data.teachers);
          }
          // props.setProgress(100);
        }, 1000);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
//

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
                      to="/attendance/staffattendance/add"
                    >
                      <i className="fa fa-plus"></i> Add Staff Attendance{" "}
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Staff Attendance</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        {/* <th>#</th> */}
                        <th>Sr No</th>
                        <th>Name</th>
                       <th>Email</th>
                        <th>Photo</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {staff &&
                        staff.map((u, i) => {
                          return (
                            <tr key={i}>
                        <td>{i+1}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.photo}</td>
                       
                        {/* <td>{u.name}</td> */}
                         
                        <td>
                          <Link to="/attendance/staffattendance/view">
                            <i
                              className="fa fa-check-square-o"
                              style={{ fontSize: "18px" }}
                            ></i>{" "}
                          </Link>
                          {/* <Link>
                            {" "}
                            <i
                              className="fa fa-trash"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </Link> */}
                        </td>
                      </tr>
                          )
                    })}
                    </tbody>
                    <tfoot>
                      {/* <tr>
                        <th>#</th>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr> */}
                    </tfoot>
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

export default StudentAttendance;
