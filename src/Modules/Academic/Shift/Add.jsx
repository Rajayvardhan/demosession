import React , { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Swal from 'sweetalert2';
import { BaseURL } from "../../../api/DataApis";

function Add() {

  const navigate = useNavigate();

  const [shift_name, setShift_name] = useState('');
  const [shiftInSTime, setShiftInSTime] = useState('');
  const [shiftInETime, setShiftInETime] = useState('');
  const [shiftSTime, setShiftSTime] = useState('');
  const [shiftETime, setShiftETime] = useState('');
  const [shiftOutSTime, setShiftOutSTime] = useState('');
  const [shiftOutETime, setShiftOutETime] = useState('');
  const [shift_nameErr, setShift_nameErr] = useState('');
  const [shiftInSTimeErr, setShiftInSTimeErr] = useState('');
  // const [shiftIDErr, setShiftIDErr] = useState('');

  const saveShift = async (e) => {
    e.preventDefault();
    let data={shift_name,shiftInSTime,shiftInETime,shiftSTime,shiftETime,shiftOutSTime,shiftOutETime};
    if (!shift_name) {
      setShift_nameErr('Shift Name Is Required *');
    }else{
      setShift_nameErr('');
    }
    if (!shiftInSTime) {
      setShiftInSTimeErr('Shift In Time Is Required *');
     }else{
      setShiftInSTimeErr('');
     }
    //  if (!shiftInETime) {
    //   // setShiftIDErr('Please Select A Shift *');
    //  }else{
    //   // setShiftIDErr('');
    //  }
     
   await fetch(`${BaseURL}/shift/addShift`,{
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
        navigate('/academic/shift');
        
      })
    })
  }


  return (
    <>
      <Breadcrumb title="Shift" path="/shift" subtitle="Add" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Shift Details
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
                          <label
                            htmlFor="shift_name"
                            className="col-sm-2 control-label"
                          >
                            Shift Name<span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="shift_name"
                              name="shift_name"
                              value={shift_name}
                               onChange={(e)=>{setShift_name(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-4 control-label text-danger errr">{shift_nameErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="classInTime"
                            className="col-sm-2 control-label"
                          >
                            Shift In Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="time"
                              placeholder="Shift In Start Time"
                              className="form-control"
                              id="shiftInSTime"
                              name="shiftInSTime"
                              value={shiftInSTime}
                               onChange={(e)=>{setShiftInSTime(e.target.value)}}
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="time"
                              placeholder="Shift In End Time"
                              className="form-control"
                              id="shiftInETime"
                              name="shiftInETime"
                              value={shiftInETime}
                               onChange={(e)=>{setShiftInETime(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-3 control-label text-danger errr">{shiftInSTimeErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                          <label
                            htmlFor="classOutTime"
                            className="col-sm-2 control-label"
                          >
                            Shift Return Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="time"
                              placeholder="Shift Return Start Time"
                              className="form-control"
                              id="shiftSTime"
                              name="shiftSTime"
                              value={shiftSTime}
                               onChange={(e)=>{setShiftSTime(e.target.value)}}
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="time"
                              placeholder="Shift Return End Time"
                              className="form-control"
                              id="shiftETime"
                              name="shiftETime"
                              value={shiftETime}
                               onChange={(e)=>{setShiftETime(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="classOutTime"
                            className="col-sm-2 control-label"
                          >
                            Shift Out Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="time"
                              placeholder="Shift Out Start Time"
                              className="form-control"
                              id="shiftOutSTime"
                              name="shiftOutSTime"
                              value={shiftOutSTime}
                               onChange={(e)=>{setShiftOutSTime(e.target.value)}}
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="time"
                              placeholder="Shift Out End Time"
                              className="form-control"
                              id="shiftOutETime"
                              name="shiftOutETime"
                              value={shiftOutETime}
                               onChange={(e)=>{setShiftOutETime(e.target.value)}}
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
                              value="Add Shift"
                              onClick={saveShift}
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
