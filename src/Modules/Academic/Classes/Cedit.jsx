import axios from "axios";
import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { BaseURL } from "../../../api/DataApis";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Cedit(props) {
  const id = ()=>{
    let ids=props.ids;
  }
  let navigate = useNavigate();
  let location = useLocation();
  let Classdata  =  location.state.classesData


    const [classs, setClasss] = useState([]);
    const [shift, setShift] = useState([]);
    const [teachers, setTeachers] = useState([]);

    console.log("classData", Classdata);
  
    const editFetch= async ()=>{
      const response=  await axios.get(
        `${BaseURL}/classes/editClasses/${Classdata.classesID}`
      );
      const data = await response.data;
      const result=data.classes;
        setClasss(result);
        setShift(data.shifts);   
        setTeachers(data.teachers);
        setUpclass({classes:result.classes,classes_numeric:result.classes_numeric,
          shiftID:result.shiftID,teacherID:result.teacherID,note:result.note
        });
    }
  
    useEffect(() => {
      id();
      editFetch();
    }, []);
  
    const [upclass,setUpclass] = useState({classes:"",classes_numeric:"",shiftID:"",teacherID:"",note:""})
  
    const updateClass = async (e) => {
      e.preventDefault();
     await fetch(`${BaseURL}/classes/editClasses/${id}`,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
          "Token":Token
        },
        body:JSON.stringify(upclass)
      }).then((result)=>{
        result.json().then((resp)=>{
          Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text:'Data Updated Successfully...',
            showConfirmButton: false,
            timer: 1500,
          });
          props.setIds("");
          props.fetchData();
        })
      })
    }
  
    const onChange = (e)=>{
      setUpclass({...upclass,[e.target.name]:e.target.value})
    }
  return (
    <>
     <div className="col-sm-5">
          <div className="card">
            <h1 className="page-title"></h1>
            <div className="portlet light bordered">
              <div className="portlet-title">
                <div className="caption font-dark">
                  <h5 className="caption-subject bold uppercase mx-3">
                   Edit Class Detailssssss
                  </h5>
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
                        <span className="control-label text-danger err"></span>
                          <label htmlFor="classes" className="col-sm-4 control-label">
                            Class <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="classes"
                              name="classes"
                              value={upclass.classes}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                        <span className="control-label text-danger err"></span>
                          <label
                            htmlFor="classes_numeric"
                            className="col-sm-4 control-label"
                          >
                            Class Numeric <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="classes_numeric"
                              name="classes_numeric"
                              value={upclass.classes_numeric}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                        <span className="control-label text-danger err"></span>
                          <label
                            htmlFor="classesID"
                            className="col-sm-4 control-label"
                          >
                            Select Shift<span className="text-red"> *</span>
                          </label>
                          <div className="col-sm-8">
                            <div className="input-group">
                              <select
                                name="shiftID"
                                id="shiftID"
                                className="form-control select2"
                                value={upclass.shiftID}
                                onChange={onChange}
                              >
                                <option value="0">Select Shift</option>
                                {shift.map(shifts => {
                                    return (
                                  <option key={shifts.shiftID} value={shifts.shiftID}>{shifts.shift_name}</option>
                                    );
                                  })}
                              </select>
                              <span className="input-group-addon add-btn">
                              <Link
                                type="button"
                                className="add-button"
                                data-bs-toggle="modal"
                                data-bs-target="#ModalShift"
                              >
                                <i className="fa fa-plus"> </i>
                                Quick Add
                              </Link>
                            </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                        <span className="control-label text-danger err"></span>
                          <label
                            htmlFor="s2id_autogen2"
                            className="col-sm-4 control-label"
                          >
                            Teacher Name
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="teacherID"
                              id="teacherID"
                              className="form-control select2 select2-offscreen"
                              tabIndex="-1"
                              value={upclass.teacherID}
                              onChange={onChange}
                            >
                              <option value="0">Select Teacher</option>
                              {teachers.map(teacher => {
                                    return (
                                <option  key={teacher.teacherID} value={teacher.teacherID}>{teacher.name}</option>
                                );
                                  })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                        <span className="control-label text-danger err"></span>
                        <label htmlFor="note" className="col-sm-4 control-label">
                          Note
                        </label>
                        <div className="col-sm-8">
                          <textarea
                            className="form-control"
                            style={{resize:"none"}}
                            id="note"
                            name="note"
                            value={upclass.note}
                            onChange={onChange}
                          ></textarea>
                        </div>
                        </div>
                      </div>
                      <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-8 add-classes">
                          <input type="button" className="btn btn-success" value="Update Class" onClick={updateClass}/>
                      </div>
                  </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
    </>
  );
}

export default Cedit;
