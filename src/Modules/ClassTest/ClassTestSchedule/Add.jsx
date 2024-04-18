import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import { BaseURL } from "../../../api/DataApis";

function Add() {
  document.title = "Exam Schedule | Add";

  let navigate = useNavigate();
  const redirect = () => {
    let path = `/viho/examschedule`;
    navigate(path);
  };

  const [options, setOptions] = useState([""]);
  const [sections, setSections] = useState([""]);
 
  const getData = async () => {
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

      const arrsection = [];
    await axios
      .get(`${BaseURL}/section/getSections`)
      .then((res) => {
        let result = res.data.sections;
        result.map((section) => {
          return arrsection.push({
            text: section.section,
            value: section.sectionID,
            key: section.sectionID,
          });
        });
        setSections(arrsection);
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
                    Exam Schedule Details
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
                        role="form"
                        method="post"
                      >
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="room" className="col-sm-2 control-label">
                              Title
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label for="room" className="col-sm-2 control-label">
                              Description
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Class
                            </label>
                            <div className="col-sm-6">
                            <Select2
                                className="form-control"
                                name="classesID"
                                // value={classes}
                                data={options}
                                options={{
                                  placeholder: "Select Class",
                                }}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="s2id_autogen2"
                              className="col-sm-2 control-label"
                            >
                              Section
                            </label>
                            <div className="col-sm-6">
                            <Select2
                                className="form-control"
                                name="sectionID"
                                data={sections}
                                options={{
                                  placeholder: "Select Section",
                                }}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label for="date" className="col-sm-2 control-label">
                              Date{" "}
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="date"
                                name="date"
                                value=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group ">
                          <div className="row">
                            <label for="file" className="col-sm-2 control-label">
                              File{" "}
                            </label>
                            <div className="col-sm-6">
                              <div
                                className="input-group image-preview"
                                data-original-title=""
                                title=""
                              >
                                <input
                                  type="text"
                                  className="form-control image-preview-filename"
                                  disabled="disabled"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="button"
                                    className="btn btn-default image-preview-clear"
                                    style={{ display: "none" }}
                                  >
                                    <span className="fa fa-remove"></span>
                                    Clear{" "}
                                  </button>
                                  <div className="btn btn-success image-preview-input">
                                    <span className="fa fa-repeat"></span>
                                    <span className="image-preview-input-title">
                                      File Browse
                                    </span>
                                    <input
                                      type="file"
                                      accept="image/png, image/jpeg, image/gif, application/pdf, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf"
                                      name="file"
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Add Exam Schedule"
                            />
                          </div>
                        </div>
                      </form>
                      <div className="callout callout-danger">
                        <p><b>Note:</b> Create exam, class, section &amp; subject before you create a new exam schedule</p>
                    </div>
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
