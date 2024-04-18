import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import axios from "axios";
import request from '../../Apis/request';
import Swal from "sweetalert2";
import { BaseURL, schoolyearID } from "../../api/DataApis";

const EnquireAdd= () => {
  const [classes, setClasses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  // const [error, setError] = useState(false);


  const apiEndpoint = `${BaseURL}/classes/getClasses`;
  const AddApi = `${BaseURL}/enquiry/addEnquiries`;
  const fetchData = async ( ) => {
    

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
      
      setClasses(res.classes);  
     
      }

  
    return [];
}

useEffect(() => {
  fetchData ();
}, []);


  const [ saveData, setData ] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
   const { name, value } = e.target;
     setData({
       ...saveData,
       [name]: value,
     });
   }
 
   const savaeData = async (e)=> {
    
    saveData.loginuserID = "3";
    saveData.enquiryID = "87564533";
    saveData.userID = "1";
    saveData.registerNO = "65435353";
    saveData.formNO = "MP93";
    saveData.schoolyearID =schoolyearID;
    saveData.usertype = "Admin";
    saveData.sectionID = "123";
    saveData.username ="admin";

    
     console.log(saveData);
     
     e.preventDefault();
    
    let response = await request({
      url: AddApi,
      // url: 'posts',
      method: "POST",
      data: JSON.stringify(saveData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
 
      
      
        if( response.status == "200" ) {
          Swal.fire({
            icon: "success",
            title: "success!",
            text: "Enquiry Submitted Successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
          // fetchData();
        } else {
          alert("Error");
        }
         console.log(response);
      
       
   }
 
const Handle = () => {
    // alert("hello");
  };
  const handleClose = () => {
    setShowPopup(false);
  };
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
                        style={{marginTop:"-18px"}}>
                         <div className="form-group">
                          
                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              Enquiry Number <span className="text-red"></span></label>
                              <input type="text" className="form-control" id="enquiry_number" name="enquiry_number"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Form/Token No <span className="text-red"></span>
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                id="token_number"
                                name="token_number"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Name <span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                              />
                               {errors.name && <span className="text-red">{errors.name}</span>}
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Father's Name
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="father_name"
                                name="father_name"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              Mother Name <span className="text-red"></span></label>
                              <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="mother_name" name="mother_name"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                            Enquiry for Class <span className="text-red"></span>
                            </label>
                            <select onChange={(e)=>handleChange(e)} 
                                
                                className="form-control"
                                id="enquiry_class"
                                name="enquiry_class"
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
                            <label
                              htmlFor="name_id">
                              Address Line-1 <span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Address Line-2
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              District <span className="text-red"></span></label>
                              <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="district" name="district"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Locality/Tehsil <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="locality"
                                name="locality"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="Area/village">
                              Area/Village <span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="area"
                                name="area"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="pin" >
                              Pin
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="number"
                                className="form-control"
                                id="pin"
                                name="pin"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="country" >
                              Country <span className="text-red"></span></label>
                              <select onChange={(e)=>handleChange(e)}  className="form-control" id="country" name="country">
                               <option>select country</option>
                               <option>India</option>
                               <option>USA</option>
                               <option>China</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="state">
                              State <span className="text-red"></span>
                            </label>
                            <select onChange={(e)=>handleChange(e)} 
                                
                                className="form-control"
                                id="state"
                                name="state"
                              >
                                <option>select state</option>
                                <option value="rajasthan">Rajasthan</option>
                                <option value="punjab">Punjab</option>
                                <option value="haryana">Haryana</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="mobile">
                              Mobile <span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="mobile_number"
                                name="mobile_number"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Contact Person
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="contact_person"
                                name="contact_person"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="relation" >
                              Relation <span className="text-red"></span></label>
                              <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="relation" name="relation"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="f_number">
                              Father's Mobile No <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="father_number"
                                name="father_number"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Mother's Mobile No <span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="number"
                                className="form-control"
                                id="m_number"
                                name="m_number"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Previous School Name
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="previous_sname"
                                name="previous_sname"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                            Previous Class <span className="text-red"></span></label>
                              <select  onChange={(e)=>handleChange(e)} type="text" className="form-control" id="p_class" name="p_class">
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
                            <label
                              htmlFor="percentage">
                              Percentage <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="percentage"
                                name="percentage"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="medium">
                              Medium <span className="text-red">*</span>
                            </label>
                            <select onChange={(e)=>handleChange(e)} 
                                className="form-control"
                                id="medium"
                                name="medium"
                              >
                                <option>select medium</option>
                                <option>Hindi Medium</option>
                                <option>English Medium</option>
                                <option>Punjabi Medium</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                            Board/College
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="board"
                                name="board"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              Reference <span className="text-red"></span></label>
                              <select onChange={(e)=>handleChange(e)} className="form-control" id="reference_name" name="reference_name">
                               <option>select reference</option>
                               <option>staff</option>
                               <option>student</option>
                               <option>other</option>
                               
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Reference Remark <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="reference_remark"
                                name="reference_remark"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                            Is Hostel Required? <span className="text-red">*</span>
                            </label>
                            <select onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="hostel"
                                name="hostel"
                              >
                                <option>select hostel preference</option>
                                <option value="1">Yes</option>
                                <option value= "0">No</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Is Transport Required?
                            </label>
                            <select onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="transport"
                                name="transport"
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
                            <label htmlFor="Gender" >
                              Gender <span className="text-red"></span></label>
                              <select  onChange={(e)=>handleChange(e)} type="text" className="form-control" id="gender" name="gender">
                              <option value="0">select gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option>Transgender</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Email <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Enquire Type <span className="text-red">*</span>
                            </label>
                            <select onChange={(e)=>handleChange(e)} 
                                
                                className="form-control"
                                id="enquiry_type"
                                name="enquiry_type"
                              >
                                <option value="">select enquire type</option>
                                <option value="new_enquiry">new enquiry</option>
                                <option value="regular_enquiry">regular enquiry</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>
                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Date of Birth <span className="text-red">*</span>
                            </label>
                            <input type="date" onChange={(e)=>handleChange(e)} 
                                className="form-control"
                                id="dob"
                                name="dob"
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
                            <label htmlFor="name_id" >
                              Remark* <span className="text-red"></span></label>
                              <textarea onChange={(e)=>handleChange(e)} type="text" className="form-control" id="remark" name="remark"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                         

                        

                            <div className="col-md-6">
                            <label
                              htmlFor="pin" >
                              Fees Detail
                            </label>
                            <textarea onChange={(e)=>handleChange(e)} 
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
                            <label htmlFor="name_id" >
                              Course Fees <span className="text-red"></span></label>
                              <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="course_fee" name="course_fee"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Hostel Fees <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="Hostel_fee"
                                name="Hostel_fee"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="Area/village">
                              Transport Fees<span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="transport_fee"
                                name="transport_fee"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="pin" >
                              Total Fees
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
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
                            <label htmlFor="name_id" >
                              Scholarship(if any) <span className="text-red"></span></label>
                              <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="scholarship" name="scholarship"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Extra Scholarship (if any) <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="extra_scholarship"
                                name="extra_scholarship"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-6">
                            <label
                              htmlFor="Area/village">
                              Extra Scholarship Reason <span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
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
                            <input onChange={(e)=>handleChange(e)} 
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
                            <label htmlFor="name_id" >
                            Hostel Facility <span className="text-red"></span></label>
                              <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="hostel_facility" name="hostel_facility"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-6">
                            <label
                              htmlFor="locality/tehsil">
                              Transport Stoppage<span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
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
                            <input onChange={(e)=>handleChange(e)} 
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
                            <input onChange={(e)=>handleChange(e)} 
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
                            <label htmlFor="name_id" >
                            Enquiry Status <span className="text-red"></span></label>
                              <select onChange={(e)=>handleChange(e)}  className="form-control" id="enquiry_status" name="enquiry_status">
                               <option>select enquiry status</option>
                               <option value="open">OPEN</option>
                               <option value="intrested">INTRESTED</option>
                               <option value= "progress">IN PROGRESS</option>
                               <option value="short_listed">SHORT LISTED</option>
                               <option value="enrolled">ENROLLED</option>
                               <option></option>
                               
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Close Reason<span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="close_reason"
                                name="close_reason"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>
                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Reminder Date<span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="date"
                                className="form-control"
                                id="reminder_date"
                                name="reminder_date"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>
                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Assign To<span className="text-red"></span>
                            </label>
                            <select onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="assign_to"
                                name="assign_to"
                              >
                                <option defaultValue="selected">select option</option>
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
                                    value="Add"
                                    className="btn btn-success col-md-12 col-xs-12"
                                    style={{ marginTop: "20px" }}
                                    onClick= {savaeData}
                                  >
                                 </input>
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
};

export default EnquireAdd;
