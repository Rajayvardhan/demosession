import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BaseURL } from "../../../api/DataApis";

function Cadd(props) {
  const [shift, setShift] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const fetchDatas = async () => {
    const response = await axios.post(
      `${BaseURL}/classes/addClasses`
    );
    const data = await response.data;
    setShift(data.shifts);
    setTeachers(data.teachers);
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  const [classes, setClasses] = useState("");
  const [classes_numeric, setClasses_numeric] = useState("");
  const [shiftID, setShiftID] = useState("");
  const [teacherID, setTeacherID] = useState("");
  const [note, setNote] = useState("");
  const [classesErr, setClassesErr] = useState("");
  const [classes_numericErr, setClasses_numericErr] = useState("");
  const [shiftIDErr, setShiftIDErr] = useState("");

  const saveClass = async (e) => {
    e.preventDefault();
    let data = { classes, classes_numeric, shiftID, teacherID, note };
    if (!classes) {
      setClassesErr("Class Name Is Required *");
    } else {
      setClassesErr("");
    }
    if (!classes_numeric) {
      setClasses_numericErr("Classes_Numeric Is Required *");
    } else {
      setClasses_numericErr("");
    }
    if (!shiftID) {
      setShiftIDErr("Please Select A Shift *");
    } else {
      setShiftIDErr("");
    }

    await fetch(`${BaseURL}/classes/addClasses`,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Token":Token
      },
      body: JSON.stringify(data),
    }).then((result) => {
      setClasses("");
      setClasses_numeric("");
      setShiftID("");
      setTeacherID("");
      setNote("");
      result.json().then((resp) => {
        Swal.fire({
          icon: "success",
          title: "Added!",
          text: "Data Added Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        props.fetchData();
      });
    });
  };
  return (
    <>
      <div className="col-sm-5">
        <div className="card">
          <h1 className="page-title"></h1>
          <div className="portlet light bordered">
            <div className="portlet-title">
              <div className="caption font-dark">
                <h5 className="caption-subject bold uppercase mx-3">
                  Add Class
                </h5>
              </div>
            </div>
            <div className="portlet-body mx-3">
              <hr style={{marginTop:"-2px"}} />
              <div className="row">
                <div className="col-sm-12">
                  <form
                    className="form-horizontal"
                    role="form"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="form-group">
                      <div className="row">
                        <span className="control-label text-danger err">
                          {classesErr}
                        </span>
                        <label
                          htmlFor="classes"
                          className="col-sm-4 control-label"
                        >
                          Class <span className="text-red">*</span>
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            className="form-control"
                            id="classes"
                            name="classes"
                            value={classes}
                            onChange={(e) => {
                              setClasses(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <span className="control-label text-danger err">
                          {classes_numericErr}
                        </span>
                        <label
                          htmlFor="classes_numeric"
                          className="col-sm-4 control-label"
                        >
                          Class Numeric <span className="text-red">*</span>
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            className="form-control"
                            id="classes_numeric"
                            name="classes_numeric"
                            value={classes_numeric}
                            onChange={(e) => {
                              setClasses_numeric(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <span className="control-label text-danger err">
                          {shiftIDErr}
                        </span>
                        <label
                          htmlFor="classesID"
                          className="col-sm-4 control-label"
                        >
                          Select Shift<span className="text-red"> *</span>
                        </label>
                        <div className="col-sm-8">
                          <div className="input-group">
                            <select
                              name="shiftID"
                              id="shiftID"
                              className="form-control select2"
                              value={shiftID}
                              onChange={(e) => {
                                setShiftID(e.target.value);
                              }}
                            >
                              <option value="0">Select Shift</option>
                              {shift.map((shifts) => {
                                return (
                                  <option
                                    key={shifts.shiftID}
                                    value={shifts.shiftID}
                                  >
                                    {shifts.shift_name}
                                  </option>
                                );
                              })}
                            </select>
                            <span className="input-group-addon add-btn">
                              <Link
                                type="button"
                                className="add-button"
                                data-bs-toggle="modal"
                                data-bs-target="#ModalShift"
                              >
                                <i className="fa fa-plus"> </i>
                                Quick Add
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <label
                          htmlFor="s2id_autogen2"
                          className="col-sm-4 control-label"
                        >
                          Teacher Name
                        </label>
                        <div className="col-sm-8">
                          <select
                            name="teacherID"
                            id="teacherID"
                            className="form-control select2 select2-offscreen"
                            tabIndex="-1"
                            value={teacherID}
                            onChange={(e) => {
                              setTeacherID(e.target.value);
                            }}
                          >
                            <option value="0">Select Teacher</option>
                            {teachers.map((teacher) => {
                              return (
                                <option
                                  key={teacher.teacherID}
                                  value={teacher.teacherID}
                                >
                                  {teacher.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <span className="control-label"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <label
                          htmlFor="note"
                          className="col-sm-4 control-label"
                        >
                          Note
                        </label>
                        <div className="col-sm-8">
                          <textarea
                            className="form-control"
                            style={{ resize: "none" }}
                            id="note"
                            name="note"
                            value={note}
                            onChange={(e) => {
                              setNote(e.target.value);
                            }}
                          ></textarea>
                        </div>
                        <span className="control-label"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-8 add-classes">
                        <input
                          type="button"
                          className="btn btn-success"
                          value="Add Class"
                          onClick={saveClass}
                        />
                      </div>
                    </div>
                    <div className="callout callout-danger">
                      <p>
                        <b>Note:</b> Create a teacher before create a new class.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadd;
