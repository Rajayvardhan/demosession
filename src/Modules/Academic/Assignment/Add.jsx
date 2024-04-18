import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../../../Apis/request";
import { BaseURL, Token, schoolyearID } from "../../../api/DataApis";
import Swal from "sweetalert2";

function Add() {
  const [selectedClass, setSelectedClass] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDiscription] = useState([]);
  const [deadlinedate, setDeadlinedate] = useState([]);
  const [subjectID, setsubjectID] = useState([]);
  const [classesID, setClassesID] = useState([]);
  const [Image, setImage] = useState([]);

  const AddAssignment = async () => {
    let response = await request({
      url: `${BaseURL}/assignment/addAssignment`,
      // url: 'posts',
      method: "POST",
      data: JSON.stringify({
        // "feetype_name" : FeeType,
        usertypeID: 1,

        schoolyearID: schoolyearID,
        username: "Admin",
        classesID: selectedClass,
        title: title,
        description: description,
        deadlinedate: deadlinedate,
        usertypeID: 1,
        loginuserID: 1,
        file: Image,
        subjectID: subjectID,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Token":Token
      },
    });

    if (response.status == "200") {
      Swal.fire({
        icon: "success",
        title: "success!",
        text: "Assignment Added Successfully...",
        showConfirmButton: false,
        timer: 1500,
      });
      // var receiptID = response.receiptID;
      // var schoolyearID = response.schoolyearID;

      // fetchData();
    }
    //  alert("Data submitted successfully!!");fee_list
    // let feetypenamedata = response.fee_list
    // console.log(feetypenamedata, "feetypenamedata");
    // setFeeNameListing(response?.fee_list)
    //  console.log("response", response.fee_list);
    //  fetch("http://www.swarnkarsamajindia.com/api/add-karyakarini");
    // } else {
    // alert("data entry failed");
  };

  useEffect(() => {
    AddAssignment();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDiscription(e.target.value);
  };
  const handleDeadlineChange = (e) => {
    setDeadlinedate(e.target.value);
  };
  const handleSubjectIDChange = (e) => {
    setsubjectID(e.target.value);
  };
  const handleClassIDChange = (e) => {
    setSelectedClass(e.target.value);
  };
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Assignment Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{ marginTop: "-10px" }} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        encType="multipart/form-data"
                        role="form"
                        method="post"
                        style={{ marginTop: "-23px" }}
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="title"
                              className="col-sm-2 control-label"
                            >
                              Title
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                onChange={handleTitleChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="description"
                              className="col-sm-2 control-label"
                            >
                              Description{" "}
                            </label>
                            <div className="col-sm-6">
                              <textarea
                                className="form-control"
                                style={{ resize: "none" }}
                                id="description"
                                name="description"
                                onChange={handleDescriptionChange}
                              ></textarea>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="deadlinedate"
                              class="col-sm-2 control-label"
                            >
                              Deadline
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="date"
                                class="form-control"
                                id="deadlinedate"
                                name="deadlinedate"
                                onChange={handleDeadlineChange}
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Class{" "}
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="classesID"
                                id="classesID"
                                className="form-control select2 select2-offscreen"
                                tabIndex="-1"
                                onChange={handleClassIDChange}
                              >
                                <option value="0">Select Class</option>
                                <option value="1">I</option>
                                <option value="5">II</option>
                              </select>{" "}
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="s2id_autogen2"
                              class="col-sm-2 control-label"
                            >
                              Section
                            </label>
                            <div class="col-sm-6">
                              <select
                                name="sectionID[]"
                                id="sectionID"
                                class="form-control select2 select2-offscreen"
                                tabIndex="-1"
                              >
                                <option value="">Select Section</option>
                                <option value="2">A</option>
                                <option value="3">B</option>
                                <option value="4">C</option>
                                <option value="5">D</option>
                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="s2id_autogen3"
                              class="col-sm-2 control-label"
                            >
                              Subject{" "}
                            </label>
                            <div class="col-sm-6">
                              <select
                                name="subjectID"
                                id="subjectID"
                                class="form-control select2 select2-offscreen"
                                tabIndex="-1"
                                onChange={handleSubjectIDChange}
                              >
                                <option value="0">Select Subject</option>
                                <option value="hindi">HINDI</option>
                                <option value="english">ENGLISH</option>
                                <option value="maths">MATHS</option>
                                <option value="sst">SST</option>
                                <option value="computer">COMPUTER</option>
                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group ">
                          <div className="row">
                            <label
                              htmlFor="file"
                              className="col-sm-2 control-label"
                            >
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
                                      onChange={handleImageChange}
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
                              type="button"
                              className="btn btn-success"
                              value="Add Assignment"
                              onClick={AddAssignment}
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
