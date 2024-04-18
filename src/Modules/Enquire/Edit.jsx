import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import request from "../../Apis/request";
import Swal from "sweetalert2";
import { BaseURL, schoolyearID } from "../../api/DataApis";

function Edit(props) {
  // const [SectionState, setSectionState]= useState('');
  const [Name, setName] = useState([]);
  const [FatherName, setFatherName] = useState([]);
  const [motherName, setMotherName] = useState([]);
  const [EnquiryClassState, setEnquiryClassState] = useState([]);
  const [PreviousClassState, setPreviousClassState] = useState([]);
  const [Addresstate, setAddressState] = useState([]);
  const [DistrictState, setDistrictState] = useState([]);
  const [TahsilState, setTahsilState] = useState([]);
  const [PinState, setPinState] = useState([]);
  const [CountryState, setCountry] = useState([]);
  const [StateName, setStateName] = useState([]);
  const [ContactNumber, setContactNumber] = useState([]);
  const [FContactNumber, setFContactNumber] = useState([]);
  const [MContactNumber, setMContactNumber] = useState([]);
  const [ContactPerson, setContactPerson] = useState([]);
  const [Relation, setRelation] = useState([]);
  const [PschoolName, setPschoolName] = useState([]);
  const [Percentage, setPercentage] = useState([]);
  const [Medium, setMedium] = useState([]);
  const [Board, setBoard] = useState([]);
  const [Reference, setReference] = useState([]);
  const [ReferenceRemark, setReferenceRemark] = useState([]);
  const [HostelRequired, setHostelRequired] = useState([]);
  const [TransportRequire, setTransportRequired] = useState([]);
  const [Gender, setGender] = useState([]);
  const [Email, setEmail] = useState([]);
  const [EnquiryType, setEnquirtType] = useState([]);
  const [dob, setdob] = useState([]);
  const [classes, setClasses] = useState([]);

  console.log("propppps", props);
  let navigate = useNavigate();
  let location = useLocation();
  let EnquiryEdit = location.state.students;
  console.log("enquiryData", EnquiryEdit);
  document.title = "Enquiry | Edit";

  const apiEndpoint = `${BaseURL}/classes/getClasses`;
  const fetchData = async () => {
    var url = apiEndpoint;

    let res = await request({
      url: url,
      // url: 'posts',
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("res", res);
    if (res && res.classes) {
      setClasses(res.classes);
    }

    return [];
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setName(EnquiryEdit?.name);
    setFatherName(EnquiryEdit?.father_name);
    setContactNumber(EnquiryEdit?.phone);
    setMotherName(EnquiryEdit?.mother_name);
    setEnquiryClassState(EnquiryEdit?.classesID);
    setPreviousClassState(EnquiryEdit?.p_class);
    setAddressState(EnquiryEdit?.address);
    setDistrictState(EnquiryEdit?.district);
    setTahsilState(EnquiryEdit?.locality);
    setPinState(EnquiryEdit?.pincode);
    setCountry(EnquiryEdit?.country);
    setContactNumber(EnquiryEdit?.phone);
    setFContactNumber(EnquiryEdit?.father_phone);
    setMContactNumber(EnquiryEdit?.mother_phone);
    setContactPerson(EnquiryEdit?.contact_person);
    setRelation(EnquiryEdit?.relation);
    setPschoolName(EnquiryEdit?.school);
    setPercentage(EnquiryEdit?.percentage);
    setMedium(EnquiryEdit?.medium);
    setBoard(EnquiryEdit?.board);
    setReference(EnquiryEdit?.note);
    setReferenceRemark(EnquiryEdit?.reference);
    setHostelRequired(EnquiryEdit?.hostel);
    setTransportRequired(EnquiryEdit?.transport);
    setGender(EnquiryEdit?.sex);
    setEmail(EnquiryEdit?.email);
    setEnquirtType(EnquiryEdit?.enquirytype);
    setdob(EnquiryEdit?.dob);
    setStateName(EnquiryEdit?.state);
  }, []);

  //setExamFinalMark("456");

  const redirect = () => {
    // let path = `/viho/exam`;
    // navigate(path);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFatherNameChange = (event) => {
    setFatherName(event.target.value);
  };

  // const handleContactNumberChange = (event) => {
  //     setContactNumber(event.target.value);
  // }

  const handleMotherNameChange = (event) => {
    setMotherName(event.target.value);
  };

  const handleEnquiryClassStateChange = (event) => {
    setEnquiryClassState(event.target.value);
  };

  const handlePreviousClassStateChange = (event) => {
    setPreviousClassState(event.target.value);
  };

  const handleAddressStateChange = (event) => {
    setAddressState(event.target.value);
  };

  const handleDistrictStateChange = (event) => {
    setDistrictState(event.target.value);
  };

  const handleTahsilStateChange = (event) => {
    setTahsilState(event.target.value);
  };

  const handlePinStateChange = (event) => {
    setPinState(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleFContactNumberChange = (event) => {
    setFContactNumber(event.target.value);
  };

  const handleMContactNumberChange = (event) => {
    setMContactNumber(event.target.value);
  };

  const handleContactPersonChange = (event) => {
    setContactPerson(event.target.value);
  };

  const handleRelationChange = (event) => {
    setRelation(event.target.value);
  };

  const handlePschoolNameChange = (event) => {
    setPschoolName(event.target.value);
  };

  const handlePercentageChange = (event) => {
    setPercentage(event.target.value);
  };

  const handleMediumChange = (event) => {
    setMedium(event.target.value);
  };

  const handleBoardChange = (event) => {
    setBoard(event.target.value);
  };

  const handleReferenceChange = (event) => {
    setReference(event.target.value);
  };

  const handleReferenceRemarkChange = (event) => {
    setReferenceRemark(event.target.value);
  };

  const handleHostelRequiredChange = (event) => {
    setHostelRequired(event.target.value);
  };

  const handleTransportRequiredChange = (event) => {
    setTransportRequired(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEnquirtTypeChange = (event) => {
    setEnquirtType(event.target.value);
  };

  const handledobChange = (event) => {
    setdob(event.target.value);
  };

  const handleStateChange = (event) => {
    setStateName(event.target.value);
  };

  const UpdateEnquireData = async (e) => {
    const data = {
      student: {
        name: Name,
        father_name: FatherName,
        mother_name: motherName,
        dob: dob,
        sex: Gender,
        religion: "",
        email: Email,
        phone: ContactNumber,
        enquiry_class: EnquiryClassState,
        sectionID: "",
        board: Board,
        bloodgroup: "0",
        address: Addresstate,
        locality: TahsilState,
        city: TahsilState,
        district: DistrictState,
        state: StateName,
        country: CountryState,
        pincode: PinState,
        contact_person: ContactPerson,
        hostel: HostelRequired,
        transport: TransportRequire,
        photo: "defualt.png",
        relation: Relation,
        father_phone: FContactNumber,
        mother_phone: MContactNumber,
        school: PschoolName,
        p_class: PreviousClassState,
        percentage: Percentage,
        medium: Medium,
        createschoolyearID: schoolyearID,
        username: "admin",
        password: "",
        enquirytype: EnquiryType,
        aadhar: "",
        reference: "",
        remark: "",
        create_date: "",
        modify_date: "",
        create_userID: "1",
        create_username: "keendroid",
        create_usertype: "Admin",
        status: "0",

        registerNO: "",
        course_fee: "1",
        Hostel_fee: "",
        transport_fee: "",
        total_fee: "",
        scholarship: "",
        extra_scholarship: "",
        transport_stoppage: "",
        loginuserID: "1",
        usertype: "Admin",
      },
      usertypeID: "3",
      schoolyearID: schoolyearID,
    };
    e.preventDefault();
    const apiEndpoint = `${BaseURL}/enquiry/editEnquiries`;
    // const editEnquiryEndPoint =`${BaseURL}/exam/editExam`
    let response = await request({
      url: `${apiEndpoint}/${EnquiryEdit?.enquiryID}`,
      // ${apiEndPoint}/${examdata?.examID}
      // url: 'posts',
      method: "POST",
      data: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.status == "200") {
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Exam Updated Successfully...",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/enquiry/enquiry");
    } else {
      alert(response.message);
    }
  };
  // console.log("response", response);
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
                      Student Details
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
                        style={{ marginTop: "-18px" }}
                      >
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Name <span className="text-red">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={Name}
                                onChange={handleNameChange}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">Father's Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="father_name"
                                name="father_name"
                                value={FatherName}
                                onChange={handleFatherNameChange}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Mother Name <span className="text-red"></span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="mother_name"
                                name="mother_name"
                                value={motherName}
                                onChange={handleMotherNameChange}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Enquiry for Class{" "}
                                <span className="text-red"></span>
                              </label>
                              <select
                                className="form-control"
                                id="enquiry_class"
                                name="enquiry_class"
                                onChange={handleEnquiryClassStateChange}
                                value={EnquiryClassState}
                              >
                                <option value="">Select Class</option>

                                {classes.map((classes) => {
                                  return (
                                    <option
                                      key={classes.classesID}
                                      value={classes.classesID}
                                    >
                                      {classes.classes}
                                    </option>
                                  );
                                })}
                              </select>
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Address Line-1{" "}
                                <span className="text-red">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={Addresstate}
                                onChange={handleAddressStateChange}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                District <span className="text-red"></span>
                              </label>
                              <input
                                onChange={handleDistrictStateChange}
                                type="text"
                                className="form-control"
                                id="district"
                                name="district"
                                value={DistrictState}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="locality/tehsil">
                                Locality/Tehsil{" "}
                                <span className="text-red"></span>
                              </label>
                              <input
                                onChange={handleTahsilStateChange}
                                type="text"
                                className="form-control"
                                id="locality"
                                name="locality"
                                value={TahsilState}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="Area/village">
                                Area/Village <span className="text-red">*</span>
                              </label>
                              <input
                                onChange=""
                                type="text"
                                className="form-control"
                                id="area"
                                name="area"
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="pin">Pin</label>
                              <input
                                onChange={handlePinStateChange}
                                type="number"
                                className="form-control"
                                id="pin"
                                name="pin"
                                value={PinState}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="country">
                                Country <span className="text-red"></span>
                              </label>
                              <select
                                onChange={handleCountryChange}
                                value={CountryState}
                                className="form-control"
                                id="country"
                                name="country"
                              >
                                <option>select country</option>
                                <option>India</option>
                                <option>USA</option>
                                <option>China</option>
                              </select>
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="state">
                                State <span className="text-red"></span>
                              </label>
                              <select
                                onChange={handleStateChange}
                                className="form-control"
                                id="state"
                                name="state"
                                value={StateName}
                              >
                                <option>select state</option>
                                <option value="rajasthan">Rajasthan</option>
                                <option value="punjab">Punjab</option>
                                <option value="haryana">Haryana</option>
                              </select>
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="mobile">
                                Mobile <span className="text-red">*</span>
                              </label>
                              <input
                                onChange={handleContactNumberChange}
                                type="number"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={ContactNumber}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">Contact Person</label>
                              <input
                                onChange=""
                                type="text"
                                className="form-control"
                                id="contact_person"
                                name="contact_person"
                                value={ContactPerson}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="relation">
                                Relation <span className="text-red"></span>
                              </label>
                              <input
                                onChange=""
                                type="text"
                                className="form-control"
                                id="relation"
                                name="relation"
                                value={Relation}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="f_number">
                                Father's Mobile No{" "}
                                <span className="text-red"></span>
                              </label>
                              <input
                                onChange={handleFContactNumberChange}
                                type="text"
                                className="form-control"
                                id="father_phone"
                                name="father_phone"
                                value={FContactNumber}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Mother's Mobile No{" "}
                                <span className="text-red">*</span>
                              </label>
                              <input
                                onChange={handleMContactNumberChange}
                                type="number"
                                className="form-control"
                                id="mother_phone"
                                name="mother_phone"
                                value={MContactNumber}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Previous School Name
                              </label>
                              <input
                                onChange={handlePschoolNameChange}
                                type="text"
                                className="form-control"
                                id="school"
                                name="school"
                                value={PschoolName}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Previous Class{" "}
                                <span className="text-red"></span>
                              </label>
                              <select
                                onChange={handlePreviousClassStateChange}
                                type="text"
                                className="form-control"
                                id="p_class"
                                name="p_class"
                                value={PreviousClassState}
                              >
                                <option>select class</option>
                                {classes.map((classes) => {
                                  return (
                                    <option
                                      key={classes.classesID}
                                      value={classes.classesID}
                                    >
                                      {classes.classes}
                                    </option>
                                  );
                                })}
                              </select>

                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="percentage">
                                Percentage <span className="text-red"></span>
                              </label>
                              <input
                                onChange={handlePercentageChange}
                                type="text"
                                className="form-control"
                                id="percentage"
                                name="percentage"
                                value={Percentage}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="medium">
                                Medium <span className="text-red">*</span>
                              </label>
                              <select
                                onChange={handleMediumChange}
                                className="form-control"
                                id="medium"
                                name="medium"
                                value={Medium}
                              >
                                <option>select medium</option>
                                <option>Hindi Medium</option>
                                <option>English Medium</option>
                                <option>Punjabi Medium</option>
                              </select>
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">Board/College</label>
                              <input
                                onChange={handleBoardChange}
                                type="text"
                                className="form-control"
                                id="board"
                                name="board"
                                value={Board}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Reference <span className="text-red"></span>
                              </label>
                              <select
                                onChange={handleReferenceChange}
                                className="form-control"
                                id="reference"
                                name="reference"
                                value={Reference}
                              >
                                <option>select reference</option>
                                <option>staff</option>
                                <option>student</option>
                                <option>other</option>
                              </select>
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Reference Remark{" "}
                                <span className="text-red"></span>
                              </label>
                              <input
                                onChange={handleReferenceRemarkChange}
                                type="text"
                                className="form-control"
                                id="remark"
                                name="remark"
                                value={ReferenceRemark}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Is Hostel Required?{" "}
                                <span className="text-red">*</span>
                              </label>
                              <select
                                onChange={handleHostelRequiredChange}
                                type="text"
                                className="form-control"
                                id="hostel"
                                name="hostel"
                                value={HostelRequired}
                              >
                                <option>select hostel preference</option>
                                <option value="1">yes</option>
                                <option value="0">no</option>
                              </select>
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Is Transport Required?
                              </label>
                              <select
                                onChange={handleTransportRequiredChange}
                                type="text"
                                className="form-control"
                                id="transport"
                                name="transport"
                                value={TransportRequire}
                              >
                                <option>select transport preference</option>
                                <option value="1">yes</option>
                                <option value="0">no</option>
                              </select>
                              <span className="col-sm-4 control-label"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="Gender">
                                Gender <span className="text-red"></span>
                              </label>
                              <select
                                onChange={handleGenderChange}
                                type="text"
                                className="form-control"
                                id="sex"
                                name="sex"
                                value={Gender}
                              >
                                <option value="0">select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option>Transgender</option>
                              </select>
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Email <span className="text-red"></span>
                              </label>
                              <input
                                onChange={handleEmailChange}
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={Email}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Enquire Type <span className="text-red">*</span>
                              </label>
                              <select
                                onChange={handleEnquirtTypeChange}
                                className="form-control"
                                id="enquiry_type"
                                name="enquiry_type"
                                value={EnquiryType}
                              >
                                <option value="">select enquire type</option>
                                <option value="new_enquiry">new enquiry</option>
                                <option value="regular_enquiry">
                                  regular enquiry
                                </option>
                              </select>
                              <span className="col-sm-4 control-label"></span>
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="name_id">
                                Date of Birth{" "}
                                <span className="text-red">*</span>
                              </label>
                              <input
                                type="date"
                                onChange={handledobChange}
                                className="form-control"
                                id="dob"
                                name="dob"
                                value={dob}
                              />
                              <span className="col-sm-4 control-label"></span>
                            </div>
                          </div>
                        </div>

                        <br />
                        <h4>Activity Log </h4>
                        <br />

                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="name_id">
                              Remark <span className="text-red"></span>
                            </label>
                            <textarea
                              onChange=""
                              type="text"
                              className="form-control"
                              id="remark"
                              name="remark"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="pin">Fees Detail</label>
                            <textarea
                              onChange=""
                              type="number"
                              className="form-control"
                              id="fee_details"
                              name="fee_details"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="name_id">
                              Course Fees <span className="text-red"></span>
                            </label>
                            <input
                              onChange=""
                              type="text"
                              className="form-control"
                              id="course_fee"
                              name="course_fee"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>

                          <div className="col-md-3">
                            <label htmlFor="locality/tehsil">
                              Hostel Fees <span className="text-red"></span>
                            </label>
                            <input
                              onChange=""
                              type="text"
                              className="form-control"
                              id="Hostel_fee"
                              name="Hostel_fee"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>

                          <div className="col-md-3">
                            <label htmlFor="Area/village">
                              Transport Fees<span className="text-red">*</span>
                            </label>
                            <input
                              onChange=""
                              type="text"
                              className="form-control"
                              id="transport_fee"
                              name="transport_fee"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>

                          <div className="col-md-3">
                            <label htmlFor="pin">Total Fees</label>
                            <input
                              onChange=""
                              type="number"
                              className="form-control"
                              id="total_fee"
                              name="total_fee"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="name_id">
                              Scholarship(if any){" "}
                              <span className="text-red"></span>
                            </label>
                            <input
                              onChange=""
                              type="text"
                              className="form-control"
                              id="scholarship"
                              name="scholarship"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>

                          <div className="col-md-3">
                            <label htmlFor="locality/tehsil">
                              Extra Scholarship (if any){" "}
                              <span className="text-red"></span>
                            </label>
                            <input
                              onChange=""
                              type="text"
                              className="form-control"
                              id="extra_scholarship"
                              name="extra_scholarship"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>

                          <div className="col-md-6">
                            <label htmlFor="Area/village">
                              Extra Scholarship Reason{" "}
                              <span className="text-red">*</span>
                            </label>
                            <input
                              onChange=""
                              type="text"
                              className="form-control"
                              id="scholarship_reason"
                              name="scholarship_reason"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>

                          {/* <div className="col-md-3">
                            <label
                              htmlFor="pin" >
                              Pin
                            </label>
                            <input onChange={(e)=>   (e)} 
                                type="number"
                                className="form-control"
                                id="pin"
                                name="pin"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div> */}
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="name_id">
                              Hostel Facility <span className="text-red"></span>
                            </label>
                            <input
                              onChange=""
                              type="text"
                              className="form-control"
                              id="hostel_facility"
                              name="hostel_facility"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>

                          <div className="col-md-6">
                            <label htmlFor="locality/tehsil">
                              Transport Stoppage
                              <span className="text-red"></span>
                            </label>
                            <input
                              onChange=""
                              type="text"
                              className="form-control"
                              id="transport_stoppage"
                              name="transport_stoppage"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>

                          {/* <div className="col-md-3">
                            <label
                              htmlFor="Area/village">
                              Area/Village <span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>   (e)} 
                                type="text"
                                className="form-control"
                                id="area"
                                name="area"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div> */}

                          {/* <div className="col-md-3">
                            <label
                              htmlFor="pin" >
                              Pin
                            </label>
                            <input onChange={(e)=>   (e)} 
                                type="number"
                                className="form-control"
                                id="pin"
                                name="pin"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div> */}
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="name_id">
                              Enquiry Status <span className="text-red"></span>
                            </label>
                            <select
                              onChange=""
                              className="form-control"
                              id="enquiry_status"
                              name="enquiry_status"
                            >
                              <option>select enquiry status</option>
                              <option value="open">OPEN</option>
                              <option value="intrested">INTRESTED</option>
                              <option value="progress">IN PROGRESS</option>
                              <option value="short_listed">SHORT LISTED</option>
                              <option value="enrolled">ENROLLED</option>
                              <option></option>
                            </select>
                            <span className="col-sm-4 control-label"></span>
                          </div>

                          <div className="col-md-3">
                            <label htmlFor="locality/tehsil">
                              Close Reason<span className="text-red"></span>
                            </label>
                            <input
                              onChange=""
                              type="text"
                              className="form-control"
                              id="close_reason"
                              name="close_reason"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="locality/tehsil">
                              Reminder Date<span className="text-red"></span>
                            </label>
                            <input
                              onChange=""
                              type="date"
                              className="form-control"
                              id="reminder_date"
                              name="reminder_date"
                            />
                            <span className="col-sm-4 control-label"></span>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="locality/tehsil">
                              Assign To<span className="text-red"></span>
                            </label>
                            <select
                              onChange=""
                              type="text"
                              className="form-control"
                              id="assign_to"
                              name="assign_to"
                            >
                              <option defaultValue="selected">
                                select option
                              </option>
                              <option value="mahesh">Mahesh</option>
                              <option value="gopal">Gopal</option>
                              <option value="pp">PP</option>
                            </select>

                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                      </form>
                      <div className="col-md-2 col-xs-12">
                        <div className="row">
                          <div className="col-md-12 col-xs-12">
                            <div className="form-group">
                              <input
                                type="button"
                                value="Update"
                                className="btn btn-success col-md-12 col-xs-12"
                                style={{ marginTop: "20px" }}
                                onClick={UpdateEnquireData}
                              ></input>
                            </div>
                          </div>
                        </div>
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

export default Edit;
