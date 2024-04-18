import React , { useState, useEffect } from "react";
import {useParams , useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Swal from 'sweetalert2';
import axios from "axios";
import { BaseURL, Token } from "../../../api/DataApis";

function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  let id=params.id;

  const [section, setSection] = useState([]);

  const editFetch= async ()=>{
    const response=  await axios.get(
      `${BaseURL}/section/editSection/${id}`
    );
    const data = await response.data;
    const result=data.section;
    setSection(result);
    setUpsection({section:result.section,capacity:result.capacity
    });
  }

  useEffect(() => {
    editFetch();
  }, []);

  const [upsection,setUpsection] = useState({section:"",capacity:""});

  const updateSection = async (e) => {
    e.preventDefault();
   await fetch(`${BaseURL}/section/editSection/${id}`,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        "Token":Token
      },
      body:JSON.stringify(upsection)
    }).then((result)=>{
      result.json().then((resp)=>{
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text:'Data Updated Successfully...',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/academic/section');
        
      })
    })
  }

  const onChange = (e)=>{
    setUpsection({...upsection,[e.target.name]:e.target.value})
  }
  return (
    <>
    <Breadcrumb title="Section" path="/section" subtitle="Edit" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <h1 className="page-title"></h1>
            <div className="portlet light bordered">
              <div className="portlet-title">
                <div className="caption font-dark">
                  <h4 className="caption-subject bold uppercase mx-3">
                   Edit Section Details
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
                              value={upsection.section}
                              onChange={onChange}
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
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
                              value={upsection.capacity}
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
                              value="Update Section"
                              onClick={updateSection}
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
  )
}

export default Edit
