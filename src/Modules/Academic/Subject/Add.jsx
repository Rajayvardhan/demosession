import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import axios from "axios";
import { BaseURL, Token } from "../../../api/DataApis";

function Add() {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();
  
  const fetchData = async () => {
      const response = await axios.get(`${BaseURL}/subject/addSubject`)
      const data = await response.data;
      setClasses(data.classes);
      
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [type, setType] = useState('');
  const [classesID, setClassesID] = useState('');
  const [subject, setSubject] = useState('');
  const [subject_code, setSubject_code] = useState('');
  const [passmark, setPassmark] = useState('0');
  const [finalmark, setFinalmark] = useState('0');
  const [typeErr, setTypeErr] = useState('');
  const [classesIDErr, setClassesIDErr] = useState('');
  const [subjectErr, setSubjectErr] = useState('');
  const [subject_codeErr, setSubject_codeErr] = useState('');

  const saveSubject = async (e) => {
    e.preventDefault();
    let data={type,classesID,subject,subject_code,passmark,finalmark};
    if (!type) {
      setTypeErr('Please Select A Type *');
    }else{
      setTypeErr('');
    }
    if (!classesID) {
      setClassesIDErr('Please Select A Class *');
     }else{
      setClassesIDErr('');
     }
     if (!subject) {
      setSubjectErr('Subject Name Is Required *');
     }else{
      setSubjectErr('');
     }
     if (!subject_code) {
      setSubject_codeErr('Subject Code Is Required *');
     }else{
      setSubject_codeErr('');
     }
     
   await fetch(`${BaseURL}/subject/addSubject`,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        "Token":Token
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        Swal.fire({
          icon: 'success',
          title: 'Added!',
          text:'Data Added Successfully...',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/academic/subject');
        
      })
    })
  }


  return (
    <>
      <Breadcrumb title="Subject" path="/subject" subtitle="Add" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Subject Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form className="form-horizontal" role="form" method="post">
                      <div className="form-group">
                          <div className="row">
                          <label htmlFor="subject" className="col-sm-2 control-label">
                            Subject Name <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              name="subject"
                              value={subject}
                               onChange={(e)=>{setSubject(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-4 control-label text-danger errr">{subjectErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="classesID"
                              className="col-sm-2 control-label"
                            >
                              Class <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="classesID"
                                id="class"
                                className="form-control select2 select2-offscreen"
                                tabIndex="-1"
                                value={classesID}
                               onChange={(e)=>{setClassesID(e.target.value)}}
                              >
                                <option value="">Select Class</option>
                                {classes.map(classess => {
                                    return (
                                      <option key={classess.classesID} value={classess.classesID}>{classess.classes}</option>
                                    );
                                  })}
                              </select>
                              {/* {classes.map(classess => {
                                    return (
                              <label>{classess.classes}</label>        
                              // <input type="checkbox" />
                              );
                                  })} */}
                            </div>
                            <span className="col-sm-4 control-label text-danger errr">{classesIDErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Type <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="type"
                                id="type"
                                className="form-control select2 select2-offscreen"
                                tabIndex="-1"
                                value={type}
                               onChange={(e)=>{setType(e.target.value)}}
                              >
                                <option value="select">Select Type</option>
                                <option value="0">Optional</option>
                                <option value="1">Mandatory</option>
                              </select>
                            </div>
                            <span className="col-sm-4 control-label text-danger errr">{typeErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                         <div className="row">
                          <label
                            htmlFor="subject_code"
                            className="col-sm-2 control-label"
                          >
                            Subject Code <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="subject_code"
                              name="subject_code"
                              value={subject_code}
                               onChange={(e)=>{setSubject_code(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-4 control-label text-danger errr">{subject_codeErr}</span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Add Subject"
                              onClick={saveSubject}
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
