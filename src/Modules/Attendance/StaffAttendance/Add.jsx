import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
import request from "../../../Apis/request";
import Swal from "sweetalert2";

const Add = () => {
  const [selectedOption4, setSelectedOption4] = useState("");
  const [staff, setStaff] = useState([]);
  const { classesID } = useParams();
  const [isMounted, setIsMounted] = useState(true);
  const [loading, setLoading] = useState(false); // Track component mount state
  //  console.log(sele);
  const date = selectedOption4.split("-")[2];
  useEffect(() => {
    fetchData(selectedOption4);

    return () => {
      setIsMounted(false); // Set isMounted to false when component unmounts
    };
  }, []);

  // const fetchData = async (selectedOption4) => {
  //   if (!selectedOption4) return; // If date is not selected, do nothing

  //   const apiEndpoint = `${BaseURL}/teacher/getStaff`;
  //   try {
  //     const response = await axios.get(apiEndpoint);
  //     const data = response.data;

  //     if (isMounted) {
  //       // Check if component is still mounted
  //       setStaff(data.teachers);
  //     }
  //     // setStaff(data.teachers);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  const fetchData = async (selectedOption4) => {
    const apiEndpoint = `${BaseURL}/teacher/getStaff`;

    setLoading(true);

    var url = apiEndpoint;
    if (classesID) {
      url = `${apiEndpoint}/${selectedOption4}`;
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
    // setClasses(res.classes);

    console.log("res", res);
    // console.log("enquiry_status", EnquiryStatus);
    if (res && res.staff) {
      setStaff(res.staff); // Update TransportData with all students
    }

    return [];
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(staff, "Staffdata");
  const handleOption4Change = (event) => {
    setSelectedOption4(event.target.value);
  };
  const handleCheckboxChange = async (event, studentId) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      try {
        const response = await axios.post(
          `${BaseURL}/tattendance/todayTattendance`,
          {
            id: studentId,
            day: date,
          }
        );
        const { data } = response;
        console.log(data);
        setTimeout(() => {
          
          Swal.fire({
            icon: "success",
            title: "Attendance added",
            // showCancelButton: true,
           
          })
        }, 1000);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  // console.log(TransportData + "jfcvhcm");

  const handleAllCheckboxChange = async (event) => {
    const isChecked = event.target.checked;
    const status = isChecked ? "checked" : "unchecked";
    const body = {
      day: selectedOption4.split("-")[2],

      monthyear:
        selectedOption4.split("-")[1] + "-" + selectedOption4.split("-")[0],
      status: status,
      section: "0",
      subject: "0",
      schoolyearID: schoolyearID,
    };

    try {
      const response = await axios.post(
        `${BaseURL}/tattendance/tallAttendance`,
        body
      );
      console.log(response.data);
      setTimeout(() => {
          
        Swal.fire({
          icon: "success",
          title: "Attendance added",
          // showCancelButton: true,
         
        })
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating attendance");
    }
  };

  return (
    <>
      <div className="portlet-body mx-3">
        <h4>Attendance Report</h4>
        <hr style={{ marginTop: "0px" }} />
        <div className="row">
          <div className="col-sm-12">
            <form
              className="form-horizontal"
              role="form"
              method="post"
              style={{ marginTop: "-20px" }}
            >
              <div className="row px-3">
                <div className="col-md-12">
                  <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "10px" }}
                          className="control-label"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          value={selectedOption4}
                          onChange={handleOption4Change}
                          style={{ marginLeft: "-10px" }}
                          name="sectionID"
                          id="sectionID"
                          className="form-control select2 select2-offscreen"
                          tabIndex="-1"
                        ></input>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div>
              <table className="table display dataTable" id="advance-1">
                <thead>
                  <tr>
                    <th>sr. no</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll</th>
                    <th>
                      Attendance all{" "}
                      <input
                        type="checkbox"
                        onChange={(event) => handleAllCheckboxChange(event)}
                      />
                    </th>{" "}
                  </tr>
                </thead>
                <tbody>
                  {staff && staff.length > 0 ? (
                    staff.map((u, i) => {
                      console.log(u);
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td></td>
                          <td>{u?.name}</td>
                          <td>{u?.registerNO}</td>
                          <td>{u?.email}</td>
                          <td>
                            <input
                              type="checkbox"
                              onChange={(event) =>
                                handleCheckboxChange(event, u?.registerNO)
                              }
                            />
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
