import React , { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Swal from 'sweetalert2';
import axios from "axios";
import { BaseURL } from "../../../api/DataApis";

function Add() {
    const [classes, setClasses] = useState([]);

    const fetchData = async () => {
        await axios.get(`${BaseURL}/period/addPeriod`).then(async(response)=>{
            const data = await response.data;
        setClasses(data.classes);
        })
        
    }
  
    useEffect(() => {
      fetchData();
    }, []);


  const navigate = useNavigate();
  

  const [period_name, setPeriod_name] = useState('');
  const [periodSTime, setPeriodSTime] = useState('');
  const [periodETime, setPeriodETime] = useState('');
  const [classesID, setClassesID] = useState('');
  const [order, setOrder] = useState('');
  const [period_nameErr, setPeriod_nameErr] = useState('');
  const [periodSTimeErr, setPeriodSTimeErr] = useState('');
  const [classesIDErr, setClassesIDErr] = useState('');
  const [orderErr, setOrderErr] = useState('');

  const savePeriod = async (e) => {
    e.preventDefault();
    let data={period_name,periodSTime,periodETime,classesID,order};
    if (!period_name) {
        setPeriod_nameErr('Period Name Is Required *');
    }else{
        setPeriod_nameErr('');
    }
    if (!periodSTime) {
        setPeriodSTimeErr('Period Start Time Is Required *');
     }else{
        setPeriodSTimeErr('');
     }
     
   await axios.post(`${BaseURL}/period/addPeriod`,
      data
    ).then(function(result){
        Swal.fire({
          icon: 'success',
          title: 'Added!',
          text:'Data Added Successfully...',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/academic/period');
    })
  }


  return (
    <>
      <Breadcrumb title="Period" path="/period" subtitle="Add" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Period Details
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
                            htmlFor="period_name"
                            className="col-sm-2 control-label"
                          >
                            Period Name<span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="period_name"
                              name="period_name"
                              value={period_name}
                               onChange={(e)=>{setPeriod_name(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-4 control-label text-danger errr">{period_nameErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="periodSTime"
                            className="col-sm-2 control-label"
                          >
                            Period Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="time"
                              placeholder="Period Start Time"
                              className="form-control"
                              id="periodSTime"
                              name="periodSTime"
                              value={periodSTime}
                               onChange={(e)=>{setPeriodSTime(e.target.value)}}
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="time"
                              placeholder="Period End Time"
                              className="form-control"
                              id="periodETime"
                              name="periodETime"
                              value={periodETime}
                               onChange={(e)=>{setPeriodETime(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-3 control-label text-danger errr">{periodSTimeErr}</span>
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
                            </div>
                            <span className="col-sm-4 control-label text-danger errr">{classesIDErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                          <label
                            htmlFor="period_name"
                            className="col-sm-2 control-label"
                          >
                            Period Number<span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="order"
                              name="order"
                              value={order}
                               onChange={(e)=>{setOrder(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-4 control-label text-danger errr">{orderErr}</span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Add Period"
                              onClick={savePeriod}
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
