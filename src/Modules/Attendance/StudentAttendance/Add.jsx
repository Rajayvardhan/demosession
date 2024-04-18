import axios from "axios";

import { BaseURL, schoolyearID } from "../../../api/DataApis";
import request from "../../../Apis/request";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import request from "../../../Apis/request";
// import { BaseURL, schoolyearID } from "../../../../api/DataApis";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";

const Add = () => {
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [listItems, setListItems] = useState([]);
  const { enquiryID, classesID } = useParams();

  const [classes, setClasses] = useState([]);
  const [studentss, setStudents] = useState([]);
  const [selectClassid, setSelectClassid] = useState("");
  const [loading, setLoading] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [EnquiryStatus, setEnquiryStatus] = useState("");
  const [TransportData, setTransportData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const date = selectedOption4.split("-")[2];

  const handleToggle = () => {
    if (studentss.status === 1) setToggled(isToggled);
    else setToggled(!isToggled);
  };

  const SelectClassHandler = (e) => {
    setSelectClassid(e.target.value);
    fetchData(e.target.value);
  };
  console.log(date);

  const fetchData = async (selectClassid) => {
    const apiEndpoint = `${BaseURL}/student/getStudents`;

    setLoading(true);

    var url = apiEndpoint;
    if (selectClassid) {
      url = `${apiEndpoint}/${selectClassid}`;
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
      setTransportData(res.students);
      console.log("asssssssssssssssssssssssssssssss" + TransportData); // Update TransportData with all students
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

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOption3Change = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleOption4Change = (event) => {
    setSelectedOption4(event.target.value);
  };

  const handleCheckboxChange = async (event, studentId) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      try {
        const response = await axios.post(`${BaseURL}/sattendance/singleAdd`, {
          id: studentId,
          day: date,
        });
        const { data } = response;
        console.log(data);
        alert("success attendance");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  console.log(TransportData + "jfcvhcm");

  const handleAllCheckboxChange = async (event) => {
    const isChecked = event.target.checked;
    const status = isChecked ? "checked" : "unchecked";
    const body = {
      day: selectedOption4.split("-")[2],
      classes: selectClassid,
      monthyear:
        selectedOption4.split("-")[1] + "-" + selectedOption4.split("-")[0],
      status: status,
      section: "0",
      subject: "0",
      schoolyearID: schoolyearID,
    };

    try {
      const response = await axios.post(`${BaseURL}/sattendance/allAdd`, body);
      console.log(response.data);
      alert("Success: Attendance for all students updated");
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
                    <div className="col-md-2">
                      <div className="form-group">
                        <label
                          htmlFor="s2id_autogen2"
                          className="control-label"
                          style={{ marginLeft: "20px" }}
                        >
                          Class
                        </label>
                        <select
                          onChange={SelectClassHandler}
                          style={{ marginLeft: "-10px" }}
                          name="classesID"
                          id="classesID"
                          className="form-control select2 select2-offscreen"
                          tabIndex="-1"
                        >
                          <option value="0" defaultValue="selected">
                            Select Class
                          </option>
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
                          {/* Add more options as needed */}
                        </select>{" "}
                      </div>
                    </div>
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
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TransportData.length > 0 ? (
                    TransportData.map((u, i) => {
                      console.log(u);
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{/* Render photo here */}</td>
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
                      <td colSpan="7">Please Select Class</td>
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
