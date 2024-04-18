import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import Loader from "../../../../Components/Loader/Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Add() {
  document.title = "Pay Slip | Add";
  let navigate = useNavigate();
  const redirect = () => {
    let path = `/viho/payslip`;
    navigate(path);
  };

  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [teacher, setTeacher] = useState("");
  const [style, setStyle] = useState("block");
  const [data, setData] = useState("");

  const handleSubmit = () => {
    if (!startDate || !teacher) {
      alert("Please select Date and Staff ");
    } else {
        setStyle("none");
        setLoading(true);
        setTimeout(() => {
        setData("Success");
        setLoading(false);
        },1000);
      
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
                <div className="portlet-title row">
                  <div className="caption font-dark col-md-10">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Pay Slip
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
                  <hr style={{marginTop:"-15px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        encType="multipart/form-data"
                        role="form"
                        method="post"
                        style={{marginTop:"-20px"}}
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Select Teacher
                            </label>
                            <div className="col-sm-6">
                              <Select2
                                className="form-control"
                                data={[
                                  { text: "bug", id: 1 },
                                  { text: "feature", id: 2 },
                                  { text: "documents", id: 3 },
                                  { text: "discussion", id: 4 },
                                ]}
                                options={{
                                  placeholder: "Select Teacher",
                                }}
                                value={teacher}
                                onChange={(choice) =>
                                  setTeacher(choice.currentTarget.value)
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
                              Choose Payslip Month
                            </label>
                            <div className="col-sm-6">
                              <DatePicker
                                className="form-control"
                                showMonthYearPicker
                                dateFormat="MM-yyyy"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="button"
                              className="btn btn-success"
                              style={{ display: style }}
                              value="Next"
                              onClick={handleSubmit}
                            />
                          </div>
                        </div>
                        {loading && <Loader />}
                        {data !== "" ? (
                          <div>
                            <div className="form-group">
                              <div className="row">
                                <h4
                                  htmlFor="s2id_autogen1"
                                  className="col-sm-12 control-label"
                                >
                                  Teacher Details :
                                </h4>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Employee Code
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Designation
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Joining Date
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Date Of Birth
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Address
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Phone
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <h4
                                  htmlFor="s2id_autogen1"
                                  className="col-sm-12 control-label"
                                >
                                  Bank Details :
                                </h4>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Bank Name
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Bank Account
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Bank IFSC
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        EPF UAN/REG. No.
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        ESI - IP/REG. No.
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Aadhar Number
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Policy Number
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <h4
                                  htmlFor="s2id_autogen1"
                                  className="col-sm-12 control-label"
                                >
                                  Working Days :
                                </h4>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-5">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Total Days
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-5">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        LOP Days
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="number"
                                        max={31}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-5">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Worked Days
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <h4
                                  htmlFor="s2id_autogen1"
                                  className="col-sm-12 control-label"
                                >
                                  Earning :
                                </h4>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-3">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Type
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Actual
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Paid
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-3">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Type
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Actual
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Paid
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-3">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Type
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Actual
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Paid
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3"></div>
                                <div className="col-sm-3"></div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Net Earning
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                          <div className="row">
                            <h4
                              htmlFor="s2id_autogen1"
                              className="col-sm-12 control-label"
                            >
                              Deduction :
                            </h4>
                          </div>
                        </div>
                        <div className="form-group">
                              <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-3">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Type
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                    Employee State Insurance (ESI)
                                      <input
                                        className="form-control"
                                        type="text"
                                        value="Employee State Insurance (ESI)"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Actual
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Paid
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-3">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Type
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                    Provident Fund (PF)
                                      <input
                                        className="form-control"
                                        type="text"
                                        value="Provident Fund (PF)"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Actual
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Paid
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3"></div>
                                <div className="col-sm-3"></div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                        Gross Deduction
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3"></div>
                                <div className="col-sm-3"></div>
                                <div className="col-sm-3">
                                  <div className="row">
                                    <div className="col-sm-4">
                                      <label
                                        htmlFor="s2id_autogen1"
                                        className="control-label"
                                      >
                                       Net Pay
                                      </label>
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        className="form-control"
                                        type="text"
                                        
                                        readOnly disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="col-sm-offset-2 col-sm-8 add-class">
                                <input
                                  type="submit"
                                  className="btn btn-success"
                                  value="Add Pay Slip"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
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
