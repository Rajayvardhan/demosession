import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseURL } from "../../../api/DataApis";

function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  let id = params.id;

  const [classes, setClasses] = useState([]);
  const [upperiod, setUpperiod] = useState({
    period_name: "",
    periodSTime: "",
    periodETime: "",
    classesID: "",
    order: "",
  });

  const fetchData = async () => {
    await axios
      .get(`${BaseURL}/period/editPeriod/${id}`)
      .then(async (response) => {
        const data = await response.data;
        const result = data.periods[0]; // Get the first item in the array
        setClasses(data.classes);
        setUpperiod({
          period_name: result.period_name,
          periodSTime: result.periodSTime,
          periodETime: result.periodETime,
          classesID: result.classesID,
          order: result.periodOrder,
        });
      });
  };

  useEffect(() => {

    fetchData();
  }, []);

  const UpdatePeriod = async (e) => {
    e.preventDefault();
    await axios
      .post(`${BaseURL}/period/editPeriod/${id}`, upperiod)
      .then(function (result) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Data Updated Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/academic/period");
      });
  };

  const onChange = (e) => {
    setUpperiod({ ...upperiod, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Breadcrumb title="Period" path="/period" subtitle="Edit" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Edit Period Details
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
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="period_name"
                              className="col-sm-2 control-label"
                            >
                              Period Name
                              <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="period_name"
                                name="period_name"
                                value={upperiod.period_name}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label text-danger errr"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="periodSTime"
                              className="col-sm-2 control-label"
                            >
                              Period Time{" "}
                              <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-3">
                              <input
                                type="text"
                                placeholder="Period Start Time"
                                className="form-control"
                                id="periodSTime"
                                name="periodSTime"
                                value={upperiod.periodSTime}
                                onChange={onChange}
                              />
                            </div>
                            <div className="col-sm-3">
                              <input
                                type="text"
                                placeholder="Period End Time"
                                className="form-control"
                                id="periodETime"
                                name="periodETime"
                                value={upperiod.periodETime}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-3 control-label text-danger errr"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="classesID"
                              className="col-sm-2 control-label"
                            >
                              Class{" "}
                              <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="classesID"
                                id="class"
                                className="form-control select2 select2-offscreen"
                                tabIndex="-1"
                                value={upperiod.classesID}
                                onChange={onChange}
                              >
                                <option value="">Select Class</option>
                                {classes.map((classess) => {
                                  return (
                                    <option
                                      key={classess.classesID}
                                      value={classess.classesID}
                                    >
                                      {classess.classes}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <span className="col-sm-4 control-label text-danger errr"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="period_name"
                              className="col-sm-2 control-label"
                            >
                              Period Number
                              <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="order"
                                name="order"
                                value={upperiod.order}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label text-danger errr"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Update Period"
                              onClick={UpdatePeriod}
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
