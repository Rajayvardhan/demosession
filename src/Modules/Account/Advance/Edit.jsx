import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import { BaseURL, schoolyearID } from "../../../api/DataApis";

function Edit() {
  document.title = "Invoice | Edit";
  let navigate = useNavigate();
  const redirect = () => {
    let path = `/invoice`;
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
      .post(`${BaseURL}/student/getStudents/` +class_id, {
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
                      Edit Invoice
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
                              Class
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
                                onChange={(choice) =>getData(choice.currentTarget.value)
                                }
                              />
                              {/* <select
                                name="classesID"
                                id="classesID"
                                className="form-control select2 select2-offscreen"
                                tabIndex="-1"
                              >
                                <option value="0">Select Class</option>
                                <option value="1">I</option>
                                <option value="5">II</option>
                              </select> */}
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
                              Period
                            </label>
                            <div className="col-sm-6">
                              <Select2
                                className="form-control"
                                name="classesID"
                                options={{
                                  placeholder: "Select Period",
                                }}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-12">
                                <h6>Fee Type List : </h6>
                            </div>
                            <div className="col-sm-8">
                              <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Sr. No.</th>
                                        <th>Sr. No.</th>
                                        <th>Sr. No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Student
                            </label>
                            <div className="col-sm-6">
                              <Select2
                                className="form-control"
                                name="classesID"
                                multiple
                                data={students}
                                options={{
                                  placeholder:"Select Student (Default All)",
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
                              Discount
                            </label>
                            <div className="col-sm-6">
                              <Select2
                                className="form-control"
                                name="classesID"
                                multiple
                                data={[
                                  "bug",
                                  "feature",
                                  "documents",
                                  "discussion",
                                ]}
                                options={{
                                  placeholder: "Select Discount",
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
                              Total Fee
                            </label>
                            <div className="col-sm-6">
                              <input
                                className="form-control"
                                type="text"
                                readOnly
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
                              Total Discount
                            </label>
                            <div className="col-sm-6">
                              <input
                                className="form-control"
                                type="text"
                                readOnly
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
                              Total Amount
                            </label>
                            <div className="col-sm-6">
                              <input
                                className="form-control"
                                type="text"
                                readOnly
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
                              Date
                            </label>
                            <div className="col-sm-6">
                              <input
                                className="form-control"
                                type="text"
                                readOnly
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
                              Due Date
                            </label>
                            <div className="col-sm-6">
                              <input
                                className="form-control"
                                type="text"
                                readOnly
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Update Invoice"
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

export default Edit;
