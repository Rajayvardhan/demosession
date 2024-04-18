import React, {useState, useEffect}from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import axios from "axios";
import request from '../../Apis/request';
import { BaseURL, schoolyearID } from "../../api/DataApis";
import Swal from "sweetalert2";

const Add = () => {

  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

let navigate = useNavigate();


  function Popup({onClose}) {
  return (
    <div className="popup">
      {/* <h2>Class</h2> */}
      <div className="row" >
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        encType="multipart/form-data"
                        style={{padding:"15px"}}
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="name_id"
                              className="col-sm-4 control-label"
                            >
                              Class <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="name_id"
                                name="name"
                              />
                              </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="name_id"
                              className="col-sm-4 control-label"
                            >
                              Class Numeric <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input onChange=""
                                type="text"
                                className="form-control"
                                id="name_id"
                                name="name"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="name_id"
                              className="col-sm-4 control-label"
                            >
                            Select Shift <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <select onChange=""
                                type="text"
                                className="form-control"
                                id="name_id"
                                name="name"
                              >
                              <option>Select Shift</option>
                              <option>Morning</option>
                              <option>Evening</option>
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="name_id"
                              className="col-sm-4 control-label"
                            >
                            Teacher Name
                            </label>
                            <div className="col-sm-6">
                              <select onChange=""
                                type="text"
                                className="form-control"
                                id="name_id"
                                name="name"
                              >
                              <option>Select Teacher</option>
                              <option>Gopal-ji</option>
                              <option>Ajay-ji</option>
                              <option>Mahesh-ji</option>
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="name_id"
                              className="col-sm-4 control-label"
                            >
                              Note
                            </label>
                            <div className="col-sm-6">
                              <textarea onChange=""
                                type="text"
                                className="form-control"
                                id="name_id"
                                name="name"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input type="button" className="btn btn-success" value="Add Class" onClick={""}/>
                        </div>

                        <i className="fas fa-info-circle" aria-hidden="true" onClick={onClose}/>
                       
                        </form>
                        </div>
                        </div>
                        </div>
  );
}
const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };
document.title ="Students | Add";
  const [ saveData, setData ] = useState({});
  const handleChange= (e) => {
   const { name, value } = e.target;
     setData({
       ...saveData,
       [name]: value,
     });
   
   }
 
   const savaeData = async (e)=> {
    
    saveData.create_userID = "1";
    // saveData.classesID = "5";
    saveData.loginuserID = "3";
    saveData.schoolyearID = schoolyearID;
    // saveData.sectionID = "1";
    // saveData.sex = "male";
    saveData.username = "admin";
    saveData.usertype = "admin";
    // saveData.country = "india";
     console.log(saveData);
     
     e.preventDefault();
    //  const requestOptions = {
    //        method: 'POST',
    //        headers: {'Access-Control-Allow-Origin': '*',
    //        'Access-Control-Allow-Headers': '*',
    //        'Access-Control-Allow-Credentials': 'true',  'Content-Type': 'application/json' },
    //        body: JSON.stringify(saveData)
    //    };
    let response = await request({
      url: `${BaseURL}/student/addStudent`,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify(saveData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
 
       //const response = await axios.post('https://demo.keendroid.in/student/addStudent', requestOptions);
       //const result = await response.json();
       if( response.status == "200" ) {
        //  alert("Data submitted successfully!!");
        Swal.fire({
          icon: "success",
          title: "success!",
          text: "Student Added Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/students/students');
         console.log(response);
    
       } else {
         alert("data entry failed");
       }
       if (!validateForm()) {
        return; }
   }
const Handle = () => {
    // alert("hello");
  };
  const handleClose = () => {
    setShowPopup(false);
  };

  const apiEndpoint = `${BaseURL}/classes/getClasses`;
  const fetchData = async ( ) => {
    // console.log("classID", classesID);
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);

    var url = apiEndpoint;
 
    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"GET",
   
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    if (res && res.classes) {
      //const data = res.data.student;
       //console.log("res",res.students)
      // setExamState(res.exam_list);
      setClasses(res.classes);  
      // console.log("exam state", ExamState);
      //sreturn res.student;
      }

  
    return [];
}

useEffect(() => {
  fetchData ();
}, []);
const [errors, setErrors] = useState({});

const validateForm = () => {
  let isValid = true;
  let newErrors = {};

  if (!saveData.name || saveData.name.trim() === "") {
    newErrors.name = "Name is required";
    isValid = false;
  }

  if (!saveData.reference_name || saveData.reference_name.trim() === "select reference") {
    newErrors.reference_name = "Reference is required";
    isValid = false;
  }

  if (!saveData.reference_remark || saveData.reference_remark.trim() === "") {
    newErrors.reference_remark = "Reference remark is required";
    isValid = false;
  }

  // Add more validation logic for other fields

  setErrors(newErrors);
  return isValid;
};

  return (
    <>
    {/* <Breadcrumb title="Student" path="/viho/students/students" subtitle="Add" /> */}
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
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        encType="multipart/form-data"
                        style={{marginTop:"-23px"}}
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="name_id"
                              className="col-sm-2 control-label"
                            >
                              Name <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="name_id"
                                name="name"
                              />
                            </div>
                            {errors.name && <span className="text-red">{errors.name}</span>}
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="father_name"
                              className="col-sm-2 control-label"
                            >
                              Father Name <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="father_name"
                                name="father_name"
                              />
                              <span className="col-sm-4 control-label"> </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="name_id"
                              className="col-sm-2 control-label"
                            >
                              Mother's Name<span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="mother_name"
                                name="mother_name"
                              />
                              <span className="col-sm-4 control-label"> </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="dob"
                              className="col-sm-2 control-label"
                            >
                              Date of Birth<span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="date" onChange={(e)=>handleChange(e)} 
                                className="form-control"
                                id="dob"
                                name="dob"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="doj"
                              className="col-sm-2 control-label"
                            >
                              Date of Admission<span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="date" onChange={(e)=>handleChange(e)} 
                                className="form-control"
                                id="doj"
                                name="doj"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                         <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="dol"
                              className="col-sm-2 control-label"
                            >
                              Date of Leaving
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="date"
                                className="form-control"
                                id="dol"
                                name="dol"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="sex"
                              className="col-sm-2 control-label"
                            >
                              Gender<span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <select onChange={(e)=>handleChange(e)} 
                                name="sex"
                                id="sex"
                                className="form-control">
                               <option value="select gender">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="bloodgroup"
                              className="col-sm-2 control-label"
                            >
                              Blood Group<span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <select onChange={(e)=>handleChange(e)} 
                                name="bloodgroup"
                                id="bloodgroup"
                                className="form-control select2">
                                <option value="0">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="religion"
                              className="col-sm-2 control-label">
                              Religion
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="religion"
                                name="religion"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="email"
                              className="col-sm-2 control-label"
                            >
                              Email
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="phone"
                              className="col-sm-2 control-label"
                            >
                              Phone <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="address"
                              className="col-sm-2 control-label"
                            >
                              Address
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="address"
                              className="col-sm-2 control-label"
                            >
                              Pin Code
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="state"
                              className="col-sm-2 control-label"
                            >
                              State
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="state"
                                name="state"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="country"
                              className="col-sm-2 control-label"
                            >
                              Country
                            </label>
                            <div className="col-sm-6">
                              <select onChange={(e)=>handleChange(e)} 
                                name="country"
                                id="country"
                                className="form-control select2"
                              >
                                <option value="0">Select Country</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AL">Albania</option>
                                <option value="AL">India</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="classesID"
                              className="col-sm-2 control-label"
                            >
                              Class<span className="text-red"> *</span>
                            </label>
                            <div className="col-sm-6">
                              <div className="input-group">
                              <select  style={{marginLeft: "-10px"}}
                                  onChange={(e)=>handleChange(e)}
                                    name="classesID"
                                    id="classesID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select Class
                                    </option>
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

                                  </select>{" "}
                                <span className="input-group-addon add-btn" >
                                  {/* <Link to="/class/add" className="add-button"> */}
                                  <i className="fas fa-info-circle" aria-hidden="true" onClick={handleClick}></i>
                                    {showPopup && <Popup onClose={handleClose} />}
                                   {/* </Link> */}
                                </span>
                              </div>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="sectionID"
                              className="col-sm-2 control-label"
                            >
                              Section<span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <div className="input-group">
                                <select onChange={(e)=>handleChange(e)} 
                                  name="sectionID"
                                  id="sectionID"
                                  className="form-control select2"
                                >
                                  <option value="0" selected="selected">
                                    Select Section
                                  </option>
                                  <option value="2">A</option>
                                  <option value="3">B</option>
                                  <option value="4">C</option>
                                  <option value="5">D</option>
                                </select>
                                <span className="input-group-addon add-btn">
                                  <Link to="/section/add" className="add-button">
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
                              htmlFor="registerNO"
                              className="col-sm-2 control-label"
                            >
                              Register NO <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="registerNO"
                                name="registerNO"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="roll"
                              className="col-sm-2 control-label"
                            >
                              Roll<span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="roll"
                                name="roll"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        {/* <div className="form-group">
                          <div className="row">
                            <label htmlFor="photo" className="col-sm-2 control-label">
                              Photo
                            </label>
                            <div className="col-sm-6">
                              <div className="input-group image-preview">
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
                                  <div className="btn btn-success image-preview-input" style={{width:"355px"}}>
                                    <span className="fa fa-repeat"></span>
                                    <span className="image-preview-input-title">
                                      File Browse
                                    </span>
                                    <input
                                      type="File"
                                      id="image"
                                      accept="image/png, image/jpeg, image/gif"
                                      name="photo"
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>
                            <span className="col-sm-4"></span>
                          </div>
                        </div> */}
                        <div className="form-group">
                          <div className="row">
                          <label htmlFor="photo" className="col-sm-2 control-label">
                            Photo
                          </label>
                          <div className="col-sm-6">
                            <div
                              className="input-group image-preview"
                              data-original-title=""
                              title=""
                            >
                              <input
                                type="text" onChange={(e)=>handleChange(e)} 
                                className="form-control image-preview-filename"
                                disabled="disabled"
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="btn btn-default image-preview-clear"
                                  style={{display:"none"}}
                                >
                                  <span className="fa fa-remove"></span>
                                  Clear
                                </button>
                                <div className="btn btn-success image-preview-input">
                                  <span className="fa fa-repeat"></span>
                                  <span className="image-preview-input-title">
                                    File Browse
                                  </span>
                                  <input onChange={(e)=>handleChange(e)} 
                                    type="file"
                                    id="image"
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
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="remarks"
                              className="col-sm-2 control-label"
                            >
                              Remarks
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="remarks"
                                name="remarks"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <br />
                        <h4>Parent's Details </h4>
                        <br />
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Father's Name
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="father_name"
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Mother's Name 
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Father Occupation
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Father's Mobile No
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Father's Email
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Mother's Occupation
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Mother's Mob No
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Mother's email
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Father's Adhar No
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            
                             Mother's Adhar No
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Father's Annual Income
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              
                             Mother's Annual Income
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Father's Qualification
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Mother's Qualification
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            Father's PAN No
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Mother's PAN No
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            Guardian Name
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            Guardian Mob No
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            Guardian Relation
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            Fee Deposited By
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                          SMS Mob No
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                          Student Type
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                          Child Status
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                          Discount Scheme
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="policy"
                              className="col-sm-2 control-label"
                            >
                          Address
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                       
                        <div className="form-group">
                          <div className="row">
                          <label htmlFor="photo" className="col-sm-2 control-label">
                           Student's Photo
                          </label>
                          <div className="col-sm-6">
                            <div
                              className="input-group image-preview"
                              data-original-title=""
                              title=""
                            >
                              <input
                                type="text" onChange={(e)=>handleChange(e)} 
                                className="form-control image-preview-filename"
                                disabled="disabled"
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="btn btn-default image-preview-clear"
                                  style={{display:"none"}}
                                >
                                  <span className="fa fa-remove"></span>
                                  Clear
                                </button>
                                <div className="btn btn-success image-preview-input">
                                  <span className="fa fa-repeat"></span>
                                  <span className="image-preview-input-title">
                                    File Browse
                                  </span>
                                  <input onChange={(e)=>handleChange(e)} 
                                    type="file"
                                    id="image"
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
                        <div className="form-group">
                          <div className="row">
                          <label htmlFor="photo" className="col-sm-2 control-label">
                           Father's Photo
                          </label>
                          <div className="col-sm-6">
                            <div
                              className="input-group image-preview"
                              data-original-title=""
                              title=""
                            >
                              <input
                                type="text" onChange={(e)=>handleChange(e)} 
                                className="form-control image-preview-filename"
                                disabled="disabled"
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="btn btn-default image-preview-clear"
                                  style={{display:"none"}}
                                >
                                  <span className="fa fa-remove"></span>
                                  Clear
                                </button>
                                <div className="btn btn-success image-preview-input">
                                  <span className="fa fa-repeat"></span>
                                  <span className="image-preview-input-title">
                                    File Browse
                                  </span>
                                  <input onChange={(e)=>handleChange(e)} 
                                    type="file"
                                    id="image"
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
                        <div className="form-group">
                          <div className="row">
                          <label htmlFor="photo" className="col-sm-2 control-label">
                           Mother's Photo
                          </label>
                          <div className="col-sm-6">
                            <div
                              className="input-group image-preview"
                              data-original-title=""
                              title=""
                            >
                              <input
                                type="text" onChange={(e)=>handleChange(e)} 
                                className="form-control image-preview-filename"
                                disabled="disabled"
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="btn btn-default image-preview-clear"
                                  style={{display:"none"}}
                                >
                                  <span className="fa fa-remove"></span>
                                  Clear
                                </button>
                                <div className="btn btn-success image-preview-input">
                                  <span className="fa fa-repeat"></span>
                                  <span className="image-preview-input-title">
                                    File Browse
                                  </span>
                                  <input onChange={(e)=>handleChange(e)} 
                                    type="file"
                                    id="image"
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
                        <div className="form-group">
                          <div className="row">
                          <label htmlFor="photo" className="col-sm-2 control-label">
                           Guardian's Photo
                          </label>
                          <div className="col-sm-6">
                            <div
                              className="input-group image-preview"
                              data-original-title=""
                              title=""
                            >
                              <input
                                type="text" onChange={(e)=>handleChange(e)} 
                                className="form-control image-preview-filename"
                                disabled="disabled"
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="btn btn-default image-preview-clear"
                                  style={{display:"none"}}
                                >
                                  <span className="fa fa-remove"></span>
                                  Clear
                                </button>
                                <div className="btn btn-success image-preview-input">
                                  <span className="fa fa-repeat"></span>
                                  <span className="image-preview-input-title">
                                    File Browse
                                  </span>
                                  <input onChange={(e)=>handleChange(e)} 
                                    type="file"
                                    id="image"
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
                        <h4>Account Details </h4>
                        <br />
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Aadhar number
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="ssmid"
                              className="col-sm-2 control-label"
                            >
                              SSSM ID
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="ssmid"
                                name="ssmid"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="policy"
                              className="col-sm-2 control-label"
                            >
                              Family SSSM ID
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="policy"
                                name="policy"
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <h4>Previous School Details </h4>
                        <br />
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Previous School Name
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="father_name"
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Previous School Address
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Reason Of Leaving
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            Previous Year
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            Previous Class
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Obtain Marks
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Maximum Marks
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            Percentage
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Result
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                            
                            Previous School Board
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Previous School Board Roll no
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              
                              Previous School Standard
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-sm-2 control-label"
                            >
                              Third Language Studied
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id=""
                                name=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                       
                       
                     

                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8">
                            <button 
                              type="submit"
                              className="btn btn-success add-student"
                              value="Add Student"
                                onClick= {savaeData}
                            >
                              Add Student
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="callout callout-danger"><p><b>Note:</b> Create teacher, class, section before
                          create a new student.</p>
                       
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
};

export default Add;
