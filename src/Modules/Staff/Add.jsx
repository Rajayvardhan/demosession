import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Designation } from "../../Constant";
import { BaseURL, schoolyearID } from "../../api/DataApis";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Add() {

  const [EmployeeCodeState, setEmployeeCodeState] = useState([]);
  const [DOBState, setDobState] = useState("");
  // const [SectionState, setSectionState]= useState('');
  const [NameState, setNameState] = useState([]);
  const [DesignationState, setDesignationState] = useState([]);
  const [StartGenderState, setGenderState] = useState("");
  const [ReligionDate, setReligion] = useState("");
  const [EmailState, setEmailState] = useState("");
  const [PhoneState, setPhoneState] = useState([]);
  const [AddressState, setAddressState] = useState([]);
  const [DOJ, setDojState] = useState([]);
  const [Dol, setDol] = useState("");
  const [PhotoState, setPhotoState] = useState("");
  const [BankState, setBankState] = useState([]);
  const { BankAccount, setBankAccount } = useState([]);

  const [IfscState, setIfscState] = useState([]);
  const [PfState, setPfState] = useState([]);
  const [ESI, setEsiState] = useState([]);
  const [Adhar, setAdhar] = useState("");
  const [PolicyState, setPolicyState] = useState("");
  const [DOIState, setDOIState] = useState([]);
  const [IncrementState, setIncrementState] = useState([]);
  // const [EmployeeCodeState, setEmployeeCodeState] = useState("");
  // const [DOBState, setDobState] = useState("");
  // const [ESI, setEsiState] = useState([]);
  const handleNameChange = (event) => {
    setNameState(event.target.value);
  };
  const handleDobChange = (event) => {
    setDobState(event.target.value);
  };

  const handleEmployementChange = (event) => {
    setEmployeeCodeState(event.target.value);
    // const data 
  };
  const handleDesignationChange = (event) => {
    setDesignationState(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGenderState(event.target.value);
  };
  const handleReligionChange = (event) => {
    setReligion(event.target.value);
  };
  const handleEmailStateChange = (event) => {
    setEmailState(event.target.value);
  };
  const handlePhoneStateChange = (event) => {
    setPhoneState(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddressState(event.target.value);
  };
  const handleDojTypeChange = (event) => {
    setDojState(event.target.value);
  };
  const handleDolChange = (event) => {
    setDol(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhotoState(event.target.value);
  };
  const handleIfscTypeChange = (event) => {
    setIfscState(event.target.value);
  };
  const handlePfChange = (event) => {
    setPfState(event.target.value);
  };
  const handleEsiChange = (event) => {
    setEsiState(event.target.value);
  };
  const handleAdharChange = (event) => {
    setAdhar(event.target.value);
  };
  const handlePolicyChange = (event) => {
    setPolicyState(event.target.value);
  };
  const handleDoiChange = (event) => {
    setDOIState(event.target.value);
  };
  const handleIncrementChange = (event) => {
    setIncrementState(event.target.value);
  };

  const handleBankChange = (event) => {
    setBankState(event.target.value);
  };
  const handleBankAccount = (event) => {
    setBankAccount(event.target.value);
  };

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${BaseURL}/teacher/addStaff`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          create_userID: "1",
          loginuserID: "1",
          username: "admin",
          usertype: "admin",
          staff: {
            name: NameState,
            schoolyearID: schoolyearID,
            registerNO: EmployeeCodeState,
            designation: DesignationState,
            dob: DOBState,
            sex: StartGenderState,
            religion: ReligionDate,
            email: EmailState,
            phone: PhoneState,
            address: AddressState,
            jod: DOJ,
          },
        }),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "success!",
          text: "Staff Added Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/students/students");
        console.log(response);
      }
      // Reset state after successful submission
      setEmployeeCodeState("");
      setDobState("");
      // Reset other state variables...
    } catch (error) {
      console.error("Error adding staff:", error);
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
                      Staff Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{ marginTop: "-10px" }} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        encType="multipart/form-data"
                        id="frm"
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="name_id"
                              className="col-sm-2 control-label"
                            >
                              Name <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="name_id"
                                name="name"
                                onChange={handleNameChange}
                                value={NameState}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="name_id"
                              className="col-sm-2 control-label"
                            >
                              Employee Code <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="registerNO"
                                name="registerNO"
                                value={EmployeeCodeState}
                                onChange={handleEmployementChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="designation"
                              className="col-sm-2 control-label"
                            >
                              Designation <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="designation"
                                name="designation"
                                value={DesignationState}
                                onChange={handleDesignationChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label for="dob" className="col-sm-2 control-label">
                              Date of Birth <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="date"
                                className="form-control"
                                id="dob"
                                name="dob"
                                value={DOBState}
                                onChange={handleDobChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label for="sex" className="col-sm-2 control-label">
                              Gender
                            </label>
                            <div className="col-sm-6">
                              <select
                                value={StartGenderState}
                                onChange={handleGenderChange}
                                name="sex"
                                id="sex"
                                className="form-control"
                              >
                                <option value="0">select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="religion"
                              className="col-sm-2 control-label"
                            >
                              Religion
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="religion"
                                name="religion"
                                value={ReligionDate}
                                onChange={handleReligionChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="email"
                              className="col-sm-2 control-label"
                            >
                              Email
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={EmailState}
                                onChange={handleEmailStateChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="phone"
                              className="col-sm-2 control-label"
                            >
                              Phone <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={PhoneState}
                                onChange={handlePhoneStateChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="address"
                              className="col-sm-2 control-label"
                            >
                              Address
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={AddressState}
                                onChange={handleAddressChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label for="jod" className="col-sm-2 control-label">
                              Date of Joining
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="date"
                                className="form-control"
                                id="jod"
                                name="jod"
                                value={DOJ}
                                onChange={handleDojTypeChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label for="dol" className="col-sm-2 control-label">
                              Date of Leaving{" "}
                              <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="date"
                                className="form-control"
                                id="dol"
                                name="dol"
                                value={Dol}
                                onChange={handleDolChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="photo"
                              className="col-sm-2 control-label"
                            >
                              Photo
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
                                    Clear
                                  </button>
                                  <div className="btn btn-success image-preview-input">
                                    <span className="fa fa-repeat"></span>
                                    <span className="image-preview-input-title">
                                      File Browse
                                    </span>
                                    <input
                                      type="file"
                                      accept="image/png, image/jpeg, image/gif"
                                      name="photo"
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>
                            <span className="col-sm-4"></span>
                          </div>
                        </div>
                        <br />
                        <h3>Account Details </h3>
                        <br />
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="bankname"
                              className="col-sm-2 control-label"
                            >
                              Bank Name
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="bankname"
                                name="bankname"
                                value={BankState}
                                onChange={handleBankChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="bankaccount"
                              className="col-sm-2 control-label"
                            >
                              Bank Account
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="bankaccount"
                                name="bankaccount"
                                value={BankAccount}
                                onChange={handleBankAccount}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="bankifsc"
                              className="col-sm-2 control-label"
                            >
                              IFSC Code
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="bankifsc"
                                name="bankifsc"
                                value={IfscState}
                                onChange={handleIfscTypeChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="pfnumber"
                              className="col-sm-2 control-label"
                            >
                              PF Number
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="pfnumber"
                                name="pfnumber"
                                value={PfState}
                                onChange={handlePfChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="esiumber"
                              className="col-sm-2 control-label"
                            >
                              ESI - IP/REG. No.
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="esiumber"
                                name="esiumber"
                                value={ESI}
                                onChange={handleEsiChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="aadharnumber"
                              className="col-sm-2 control-label"
                            >
                              Aadhar number
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="aadharnumber"
                                name="aadharnumber"
                                value={Adhar}
                                onChange={handleAdharChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              for="policynumber"
                              className="col-sm-2 control-label"
                            >
                              policy number
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="policynumber"
                                name="policynumber"
                                value={PolicyState}
                                onChange={handlePolicyChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label for="doi" className="col-sm-2 control-label">
                              Date of Increment / Appraisal
                              <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="date"
                                className="form-control"
                                id="doi"
                                name="doi"
                                value={DOIState}
                                onChange={handleDoiChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label for="inc" className="col-sm-2 control-label">
                              Increment <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="inc"
                                name="inc"
                                value={IncrementState}
                                onChange={handleIncrementChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <br />
                        <h3>Earning Type </h3>
                        <br />
                        <br />
                        <h3>Deduction Type </h3>
                        <br />
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <button
                              type="submit"
                              className="btn btn-success"
                              value="Add Staff"
                              onClick={handleSubmit}
                            >
                              Add Staff
                            </button>
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
