import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import { useParams  } from "react-router-dom";
import axios from "axios";
import request from "../../Apis/request";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BaseURL, schoolyearID } from "../../api/DataApis";
const Edit = (props) => {
  // let location = useLocation();
  
  const [ saveData, setData ] = useState([]);
  const handleChange= (e) => {
    const { name, value } = e.target;
      setData({
        ...saveData,
        [name]: value,
      });
    
    }
  const params = useParams();
  let studentID = params.sid;
  let classesID = params.cid;
  let navigate = useNavigate();
  let location = useLocation();
  // console.log('students',location.state.students);
  // const i  =  location.state.students;
  const i  =  location.state.students;
  console.log(i, "propsDataaaa");

  const [loading, setLoading] = useState(false);
   const savaeData = async (e)=> { 
    saveData.create_userID = "1";
    
    saveData.loginuserID = "3";
    saveData.schoolyearID = schoolyearID;

    
    saveData.username = "admin";
    saveData.usertype = "admin";
    
     console.log(saveData);
   
    setLoading(true);
    const apiEndpoint = `${BaseURL}/student/editStudent`;
  let res = await request({
      url:`${apiEndpoint}/${studentID}/${classesID}`,
      //{studentID}/${classesID}
      method:"POST",
      data: JSON.stringify({
        "schoolyearID":schoolyearID, saveData
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    //  if( response.status == "200" ) {
    //   alert("Data submitted successfully!!");
    //   console.log(response);
    //  //  fetch("http://www.swarnkarsamajindia.com/api/add-karyakarini");
    // } else {
    //   alert("data entry failed");
    // }
    
}
  return (
    <>
    <Breadcrumb title="Student" path="/students" subtitle="Edit" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Edit Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-10">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        encType="multipart/form-data"
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
                              Mother's Name
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
                            <label htmlFor="dob" className="col-sm-2 control-label">
                              Date of Birth
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
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
                            <label htmlFor="doj" className="col-sm-2 control-label">
                              Date of Admission
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
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
                            <label htmlFor="dol" className="col-sm-2 control-label">
                              Date of Leaving
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
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
                            <label htmlFor="sex" className="col-sm-2 control-label">
                              Gender
                            </label>
                            <div className="col-sm-6">
                              <select onChange={(e)=>handleChange(e)} 
                                name="sex"
                                id="sex"
                                className="form-control"
                              >
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
                              htmlFor="bloodgroup"
                              className="col-sm-2 control-label"
                            >
                              Blood Group
                            </label>
                            <div className="col-sm-6">
                              <select onChange={(e)=>handleChange(e)} 
                                name="bloodgroup"
                                id="bloodgroup"
                                className="form-control select2"
                              >
                                <option value="0">Select Blood Gorup</option>
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
                              className="col-sm-2 control-label"
                            >
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
                            <label htmlFor="state" className="col-sm-2 control-label">
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
                            <label htmlFor="country" className="col-sm-2 control-label">
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
                                <select onChange={(e)=>handleChange(e)} 
                                  name="classesID"
                                  id="classesID"
                                  className="form-control select2"
                                >
                                  <option value="0">Select Class</option>
                                  <option value="1">I</option>
                                  <option value="5">II</option>
                                  <option value="6">III</option>
                                  <option value="7">IV</option>
                                  <option value="8">V</option>
                                  <option value="9">VI</option>
                                  <option value="10">VII</option>
                                  <option value="11">VIII</option>
                                  <option value="12">IX</option>
                                  <option value="14">X</option>
                                  <option value="2">NUR</option>
                                  <option value="3">PREP</option>
                                  <option value="4">KG</option>
                                  <option value="15">Dwps</option>
                                  <option value="16">DPWIS,SIKAR</option>
                                  <option value="17">JSP</option>
                                  <option value="18">Euro school</option>
                                  <option value="19">IMP</option>
                                </select>
                                <span className="input-group-addon add-btn">
                                  <Link to="/class/add" className="add-button">
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
                              htmlFor="sectionID"
                              className="col-sm-2 control-label"
                            >
                              Section
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
                            <label htmlFor="roll" className="col-sm-2 control-label">
                              Roll
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
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
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
                            <label htmlFor="remarks" className="col-sm-2 control-label">
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
                        <h4>Account Details </h4>
                        <br />
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="aadhar" className="col-sm-2 control-label">
                              Aadhar number
                            </label>
                            <div className="col-sm-6">
                              <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="aadhar"
                                name="aadhar"
                                
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="ssmid" className="col-sm-2 control-label">
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
                            <label htmlFor="policy" className="col-sm-2 control-label">
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
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8">
                            <button
                              type="submit"
                              className="btn btn-success add-student"
                              value="Add Student"
                              onClick= {savaeData}
                            >
                              Update Student
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
};

export default Edit;
