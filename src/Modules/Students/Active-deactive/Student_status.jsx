import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../../../Apis/request";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./Active.css";

function StudentStatus() {
  const { enquiryID, classesID } = useParams();
  const [classes, setClasses] = useState([]);
  const [studentss, setStudents] = useState([]);
  const [selectClassid, setSelectClassid] = useState("");
  const [loading, setLoading] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [EnquiryStatus, setEnquiryStatus] = useState("");
  const [TransportData, setTransportData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = () => {
    if (studentss.status === 1) setToggled(isToggled);
    else setToggled(!isToggled);
  };

  const SelectClassHandler = (e) => {
    setSelectClassid(e.target.value);
    fetchData(e.target.value);
  };

  const fetchData = async (classesID) => {
    const apiEndpoint = `${BaseURL}/student/getStudents`;

    setLoading(true);

    var url = apiEndpoint;
    if (classesID) {
      url = `${apiEndpoint}/${classesID}`;
    }

    let res = await request({
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

    console.log("res", res);
    console.log("enquiry_status", EnquiryStatus);
    if (res && res.students) {
      setTransportData(res.students); // Update TransportData with all students
    }

    return [];
  };

  useEffect(() => {
    fetchData();
  }, [TransportData]);

  useEffect(() => {
    // Filter students based on searchQuery
    const filteredStudents = TransportData.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.registerNO.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setStudents(filteredStudents);
  }, [searchQuery, TransportData]);

  const changeStatus = async (studentID, newStatus) => {
    try {
      const response = await request({
        url: `${BaseURL}/student/changeStatus`,
        method: "POST",
        data: JSON.stringify({
          sID: studentID,
          status: newStatus,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      // Handle success response
      console.log(response);

      // You may want to refresh the student data after the status change
      fetchData(selectClassid); // or fetchData() if you want to refresh all students
    } catch (error) {
      console.error("Error changing status:", error);
      // Handle error here
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header pb-0">
              <div className="d-flex">
                <div className="col-sm-4 add">
                  <h5 style={{ marginLeft: "13px", marginTop: "15px" }}>
                    Student Status
                  </h5>
                  <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
                    <select
                      className="select1"
                      onChange={SelectClassHandler}
                      style={{
                        padding: "8px 10px",
                        borderRadius: "40px",
                        marginLeft: "634px",
                        marginTop: "9px",
                        position: "relative",
                        top: "-41px",
                      }}
                    >
                      <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      {classes &&
                        classes.map((classItem) => {
                          return (
                            <option
                              key={classItem.classesID}
                              value={classItem.classesID}
                            >
                              {classItem.classes}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <hr style={{ marginTop: "18px" }} />
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="display dataTable" id="advance-1">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Roll</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TransportData.length > 0 ? (
                      TransportData.map((u, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{/* Render photo here */}</td>
                            <td>{u?.name}</td>
                            <td>{u?.registerNO}</td>
                            <td>{u?.email}</td>
                            <td>
                              {u?.active === "0" && (
                                <button
                                  className="btn btn-success"
                                  onClick={() => changeStatus(u.studentID, 1)}
                                >
                                  Change to Activate
                                </button>
                              )}
                              {u?.active === "1" && (
                                <button
                                  className="btn btn-danger"
                                  onClick={() => changeStatus(u.studentID, "0")}
                                >
                                  Change to Deactivate
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="7">Please Select Class</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentStatus;
