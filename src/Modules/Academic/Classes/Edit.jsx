import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Component/BreadCrumb/Breadcrumb";
import Swal from "sweetalert2";
import { BaseURL, Token, schoolyearID } from "../../../api/DataApis";
import { useLocation } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  let location = useLocation();
  let Classdata = location.state.classesData;
  console.log("classData", Classdata.classesID);

  const [classs, setClasss] = useState([]);
  const [shift, setShift] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const editFetch = async () => {
    // Fetch your data if needed
  };

  useEffect(() => {
    editFetch();
    // Set initial state of upclass to Classdata
    setUpclass(Classdata);
  }, [Classdata]);

  const [upclass, setUpclass] = useState({
    classes: "",
    classes_numeric: "",
    shiftID: "",
    teacherID: "",
    note: "",
    schoolyearID: schoolyearID,
  });

  const updateClass = async (e) => {
    e.preventDefault();
    await fetch(`${BaseURL}/classes/editClasses/${Classdata.classesID}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Token":Token
      },
      body: JSON.stringify(upclass),
    }).then((result) => {
      result.json().then((resp) => {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Data Updated Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/academic/class");
      });
    });
  };

  const onChange = (e) => {
    setUpclass({ ...upclass, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <Breadcrumb title="Classes" path="/class" subtitle="Edit" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Edit Class Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
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
                            <label
                              htmlFor="classes"
                              className="col-sm-2 control-label"
                            >
                              Class <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="classes"
                                name="classes"
                                value={upclass.classes}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="classes_numeric"
                              className="col-sm-2 control-label"
                            >
                              Class Numeric <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="classes_numeric"
                                name="classes_numeric"
                                value={upclass.classes_numeric}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="classesID"
                              className="col-sm-2 control-label"
                            >
                              Select Shift<span className="text-red"> *</span>
                            </label>
                            <div className="col-sm-6">
                              <div className="input-group">
                                <select
                                  name="shiftID"
                                  id="shiftID"
                                  className="form-control select2"
                                  value={upclass.shiftID}
                                  onChange={onChange}
                                >
                                  <option value="0">Select Shift</option>
                                  <option value="121">Morning</option>
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
                                  <Link to="/shift/add" className="add-button">
                                    <i className="fa fa-plus"></i>
                                    Quick Add
                                  </Link>
                                </span>
                              </div>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen2"
                              className="col-sm-2 control-label"
                            >
                              Teacher Name
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="teacherID"
                                id="teacherID"
                                className="form-control select2 select2-offscreen"
                                tabIndex="-1"
                                value={upclass.teacherID}
                                onChange={onChange}
                              >
                                <option value="0">Select Teacher</option>
                                <option value="121">Mahesh-ji</option>
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
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="note"
                              className="col-sm-2 control-label"
                            >
                              Note
                            </label>
                            <div className="col-sm-6">
                              <textarea
                                className="form-control"
                                style={{ resize: "none" }}
                                id="note"
                                name="note"
                                value={upclass.note}
                                onChange={onChange}
                              ></textarea>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        {/* Other form inputs */}
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="button"
                              className="btn btn-success"
                              value="Update Class"
                              onClick={updateClass}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
