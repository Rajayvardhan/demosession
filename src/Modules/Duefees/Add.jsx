import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import { BaseURL, schoolyearID } from "../../api/DataApis";

function Add() {
  document.title = "Due Fees | Add";
  let navigate = useNavigate();
  const redirect = () => {
    let path = `/duefees`;
    navigate(path);
  };

  const [options, setOptions] = useState([""]);
  const [students, setStudents] = useState([""]);
  const [classes, setClasses] = useState(0);

  const getData = async (class_id) => {
    setClasses(class_id);
    const arr = [];
    await axios
      .get(`${BaseURL}/classes/getClasses`)
      .then((res) => {
        let result = res.data.classes;
        result.map((classs) => {
          return arr.push({
            text: classs.classes,
            value: classs.classesID,
            key: classs.classesID,
          });
        });
        setOptions(arr);
      });
    const arrStudent = [];
    await axios
      .post(`${BaseURL}/student/getStudents/` + class_id, {
        schoolyearID: schoolyearID,
      })
      .then((res) => {
        let result = res.data.students;
        result.map((student) => {
          return arrStudent.push({
            text: student.name,
            value: student.studentID,
            key: student.studentID,
          });
        });
        setStudents(arrStudent);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title row">
                  <div className="caption font-dark col-md-10">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Due Fees
                    </h4>
                  </div>
                  <div className="caption font-dark col-md-2">
                    <h5 className="caption-subject bold uppercase mx-3">
                      <button className="btn btn-success" onClick={redirect}>
                        Back
                      </button>
                    </h5>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        encType="multipart/form-data"
                        role="form"
                        method="post"
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Class Name
                            </label>
                            <div className="col-sm-6">
                              <Select2
                                className="form-control"
                                name="classesID"
                                value={classes}
                                data={options}
                                options={{
                                  placeholder: "Select Class",
                                }}
                                onChange={(choice) =>
                                  getData(choice.currentTarget.value)
                                }
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Student Name
                            </label>
                            <div className="col-sm-6">
                              <Select2
                                className="form-control"
                                name="classesID"
                                data={students}
                                options={{
                                  placeholder: "Select Student",
                                }}
                              />
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
                              Due Amount
                            </label>
                            <div className="col-sm-6">
                              <input className="form-control" type="text" />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        {/* <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              School Year
                            </label>
                            <div className="col-sm-6">
                              <Select2
                                className="form-control"
                                name="schoolyear"
                                data={[
                                  { value: "chocolate", text: "2023-2024" },
                                  { value: "strawberry", text: "2022-2023" },
                                  { value: "vanilla", text: "2021-2022" },
                                  { value: "vanilla", text: "2019-2020" },
                                  { value: "vanilla", text: "2018-2019" },
                                  { value: "vanilla", text: "2017-2018" },
                                ]}
                                options={{
                                  placeholder: "Select School Year",
                                }}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div> */}
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Add Due Fees"
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
}

export default Add;
