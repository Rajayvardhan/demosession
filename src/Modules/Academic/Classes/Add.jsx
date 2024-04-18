import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Breadcrumb from "../../../Component/BreadCrumb/Breadcrumb";
import { BaseURL } from "../../../api/DataApis";

const Add = (props) => {
  props.setProgress(100)
  const [shift, setShift] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();
  
  const fetchData = async () => {
   
    const response = await fetch(`${BaseURL}/classes/addClasses`);
      const data = await response.json();
      setShift(data.shifts);   
      setTeachers(data.teachers);
      
  }

  useEffect(() => {
    fetchData();
  }, [])

  const [classes, setClasses] = useState('');
  const [classes_numeric, setClasses_numeric] = useState('');
  const [shiftID, setShiftID] = useState('');
  const [teacherID, setTeacherID] = useState('');
  const [note, setNote] = useState('');
  const [classesErr, setClassesErr] = useState('');
  const [classes_numericErr, setClasses_numericErr] = useState('');
  const [shiftIDErr, setShiftIDErr] = useState('');

  const saveClass = async (e) => {
    // console.warn({classes,classes_numeric,shiftID,teacherID,note});
    e.preventDefault();
    let data={classes,classes_numeric,shiftID,teacherID,note};
    if (!classes) {
      setClassesErr('Class Name Is Required *');
    }else{
      setClassesErr('');
    }
    if (!classes_numeric) {
      setClasses_numericErr('Classes_Numeric Is Required *');
     }else{
      setClasses_numericErr('');
     }
     if (!shiftID) {
      setShiftIDErr('Please Select A Shift *');
     }else{
      setShiftIDErr('');
     }
     
     await fetch(`${BaseURL}/classes/addClasses`,{
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
        navigate('/class');
        
      })
    })
  }

  return (
    <>
    {/* <Breadcrumb title="Classes" path="/class" subtitle="Add" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Class Details
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
                        encType="multipart/form-data"
                      >
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="classes" className="col-sm-2 control-label">
                              Class <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="classes"
                                name="classes"
                                value={classes}
                               onChange={(e)=>{setClasses(e.target.value)}}
                              />
                            </div>
                            <span className="col-sm-4 control-label text-danger errr">{classesErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="classes_numeric"
                              className="col-sm-2 control-label"
                            >
                              Class Numeric <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="classes_numeric"
                                name="classes_numeric"
                                value={classes_numeric}
                                onChange={(e)=>{setClasses_numeric(e.target.value)}}
                              />
                            </div>
                            <span className="col-sm-4 control-label text-danger errr">{classes_numericErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="classesID"
                              className="col-sm-2 control-label"
                            >
                              Select Shift<span className="text-red"> *</span>
                            </label>
                            <div className="col-sm-6">
                              <div className="input-group">
                                <select
                                  name="shiftID"
                                  id="shiftID"
                                  className="form-control select2"
                                  value={shiftID}
                                  onChange={(e)=>{setShiftID(e.target.value)}}
                                >
                                  <option value="0">Select Shift</option>
                                  {shift.map(shifts => {
                                    return (
                                  <option key={shifts.shiftID} value={shifts.shiftID}>{shifts.shift_name}</option>
                                    );
                                  })}
                                </select>
                                <span className="input-group-addon add-btn">
                                  <a type="button" className="add-button" data-bs-toggle="modal" data-bs-target="#ModalShift">
                                    <i className="fa fa-plus"> </i> 
                                     Quick Add
                                  </a>
                                </span>
                              </div>
                            </div>
                            <span className="col-sm-4 control-label text-danger errr">{shiftIDErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen2"
                              className="col-sm-2 control-label"
                            >
                              Teacher Name
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="teacherID"
                                id="teacherID"
                                className="form-control select2 select2-offscreen"
                                tabIndex="-1"
                                value={teacherID}
                                onChange={(e)=>{setTeacherID(e.target.value)}}
                              >
                                <option value="0">Select Teacher</option>
                                {teachers.map(teacher => {
                                    return (
                                <option  key={teacher.teacherID} value={teacher.teacherID}>{teacher.name}</option>
                                );
                                  })}
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                          <label htmlFor="note" className="col-sm-2 control-label">
                            Note
                          </label>
                          <div className="col-sm-6">
                            <textarea
                              className="form-control"
                              style={{resize:"none"}}
                              id="note"
                              name="note"
                              value={note}
                              onChange={(e)=>{setNote(e.target.value)}}
                            ></textarea>
                          </div>
                          <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input type="button" className="btn btn-success" value="Add Class" onClick={saveClass}/>
                        </div>
                    </div>
                    <div className="callout callout-danger">
                        <p><b>Note:</b> Create a teacher before create a new class.</p>
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
       <div className="modal fade bd-example-modal-lg shift-modal" id="ModalShift" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-bs-backdrop="static">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content w-75">
                          <div className="modal-header">
                            <h4 className="modal-title" id="myLargeModalLabel">SHIFT DETAILS</h4>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                          <form className="form-horizontal" role="form" method="post">
                        <div className="form-group">
                          <div className="row">
                          <label
                            htmlFor="shift_name"
                            className="col-sm-3 control-label"
                          >
                            Shift Name<span className="text-red">*</span>
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="shift_name"
                              name="shift_name"
                              value=""
                            />
                          </div>
                          </div>
                        </div>
                        <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="classInTime"
                            className="col-sm-3 control-label"
                          >
                            Shift In Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift In Start Time"
                              className="form-control"
                              id="shiftInSTime"
                              name="shiftInSTime"
                              value=""
                            />
                          </div>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift In End Time"
                              className="form-control"
                              id="shiftInETime"
                              name="shiftInETime"
                              value=""
                            />
                          </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                          <label
                            htmlFor="classOutTime"
                            className="col-sm-3 control-label"
                          >
                            Shift Return Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift Return Start Time"
                              className="form-control"
                              id="shiftSTime"
                              name="shiftSTime"
                              value=""
                            />
                          </div>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift Return End Time"
                              className="form-control"
                              id="shiftETime"
                              name="shiftETime"
                              value=""
                            />
                          </div>
                          </div>
                        </div>
                        <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="classOutTime"
                            className="col-sm-3 control-label"
                          >
                            Shift Out Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift Out Start Time"
                              className="form-control"
                              id="shiftOutSTime"
                              name="shiftOutSTime"
                              value=""
                            />
                          </div>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift Out End Time"
                              className="form-control"
                              id="shiftOutETime"
                              name="shiftOutETime"
                              value=""
                            />
                          </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Add Shift"
                            />
                          </div>
                        </div>
                      </form>
                          </div>
                        </div>
                      </div>
                    </div>             
    </>
  );
};

export default Add;
