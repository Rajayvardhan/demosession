import React, { useState, useEffect } from 'react';
import {useParams , useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Swal from 'sweetalert2';
import axios from 'axios';
import { BaseURL, Token } from '../../../api/DataApis';

function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  let id=params.id;

  const [subject, setSubject] = useState([]);
  const [classes, setClasses] = useState([]);

  const editFetch= async ()=>{
    const response=  await axios.get(
      `${BaseURL}/subject/editSubject/${id}`
    );
    const data = await response.data;
    const result=data.subject;
    const resultclass=data.classes;
    setSubject(result);
    setClasses(resultclass);
    setUpsubject({type:result.type,classesID:result.classesID,subject:result.subject,subject_code:result.subject_code,
      passmark:"0",finalmark:"0"
    });
  }

  useEffect(() => {
    editFetch();
  }, []);

  const [upsubject,setUpsubject] = useState({type:"",classesID:"",subject:"",subject_code:"",passmark:"",finalmark:""});

  const updateSubject = async (e) => {
    e.preventDefault();
   await fetch(`${BaseURL}/subject/editSubject/${id}`,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        "Token":Token
      },
      body:JSON.stringify(upsubject)
    }).then((result)=>{
      result.json().then((resp)=>{
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text:'Data Updated Successfully...',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/academic/subject');
        
      })
    })
  }

  const onChange = (e)=>{
    setUpsubject({...upsubject,[e.target.name]:e.target.value})
  }

  return (
    <>
      <Breadcrumb title="Subject" path="/subject" subtitle="Edit" />
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
                          <label htmlhtmlFor="subject" className="col-sm-2 control-label">
                            Subject Name <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              name="subject"
                              value={upsubject.subject}
                              onChange={onChange}
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlhtmlFor="classesID"
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
                                value={upsubject.classesID}
                              onChange={onChange}
                              >
                                <option value="">Select Class</option>
                                {classes.map(classess => {
                                    return (
                                      <option key={classess.classesID} value={classess.classesID}>{classess.classes}</option>
                                    );
                                  })}
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlhtmlFor="s2id_autogen1"
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
                                value={upsubject.type}
                              onChange={onChange}
                              >
                                <option value="select">Select Type</option>
                                <option value="0">Optional</option>
                                <option value="1">Mandatory</option>
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                         <div className="row">
                          <label
                            htmlhtmlFor="subject_code"
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
                              value={upsubject.subject_code}
                              onChange={onChange}
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Update Subject"
                              onClick={updateSubject}
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
