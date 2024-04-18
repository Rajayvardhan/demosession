import React, {useState} from "react";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { BaseURL, Token } from "../../../api/DataApis";

function Add() {
  const navigate = useNavigate();

  const [section, setSection] = useState('');
  const [capacity, setCapacity] = useState('');
  const [sectionErr, setSectionErr] = useState('');
  const [capacityErr, setCapacityErr] = useState('');

  const saveSection = async (e) => {
    e.preventDefault();
    let data={section,capacity};
    if (!section) {
      setSectionErr('Section Is Required *');
    }else{
      setSectionErr('');
    }
    if (!capacity) {
      setCapacityErr('Capacity Is Required *');
     }else{
      setCapacityErr('');
     }
     
   await fetch(`${BaseURL}/section/addSection`,{
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
        navigate('/academic/section');
        
      })
    })
  }

  return (
    <>
      <Breadcrumb title="Section" path="/section" subtitle="Add" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Section Details
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
                          <label htmlFor="section" className="col-sm-2 control-label">
                            Section <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="section"
                              name="section"
                              value={section}
                              onChange={(e)=>{setSection(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-4 control-label text-danger errr">{sectionErr}</span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                          <label htmlFor="capacity" className="col-sm-2 control-label">
                            Capacity <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="capacity"
                              name="capacity"
                              value={capacity}
                              onChange={(e)=>{setCapacity(e.target.value)}}
                            />
                          </div>
                          <span className="col-sm-4 control-label text-danger errr">{capacityErr}</span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Add Section"
                              onClick={saveSection}
                            />
                          </div>
                        </div>
                      </form>
                      <div className="callout callout-danger">
                        <p><b>Note:</b> Create a class and teacher before create a new section</p>
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

export default Add;
