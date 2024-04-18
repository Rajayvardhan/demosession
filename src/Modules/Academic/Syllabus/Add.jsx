import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function Add() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    classes: [],
    selectedClass: "",
    file: null
  });
  let navigate= useNavigate()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://demo.keendroid.in/syllabus/getSyllabusData"
      );
      const { data } = response;
      setFormData({
        ...formData,
        title: data.title,
        description: data.description,
        classes: data.classes
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "file" ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("classesID", formData.selectedClass);
      formDataToSend.append("file", formData.file);

      const response = await axios.post(
        "https://demo.keendroid.in/syllabus/addSyllabus",
        formDataToSend
      );
      Swal.fire({
        icon: "success",
        title: "syllabus added",
        // showCancelButton: true,
       
      })
      navigate("/academic/syllabus");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
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
                      Syllabus Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        encType="multipart/form-data"
                        role="form"
                        method="post"
                        style={{marginTop:"-23px"}}
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="title" className="col-sm-2 control-label">
                              Title
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
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
                              Description
                            </label>
                            <div className="col-sm-6">
                              <textarea
                                className="form-control"
                                style={{ resize: "none" }}
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="classes"
                              className="col-sm-2 control-label"
                            >
                              Class
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="selectedClass"
                                id="classes"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.selectedClass}
                              >
                                <option value="">Select Class</option>
                                {formData.classes.map((cls) => (
                                  <option key={cls.id} value={cls.id}>
                                    {cls.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="file" className="col-sm-2 control-label">
                              File
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="file"
                                className="form-control-file"
                                id="file"
                                name="file"
                                onChange={handleChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                              <button type="submit" className="btn btn-success">Add Syllabus</button>
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
