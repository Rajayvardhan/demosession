import React, { useState, useEffect } from "react";
import {  useParams , useNavigate  } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Swal from 'sweetalert2';
import axios from "axios";
import { BaseURL } from '../../api/DataApis';

function Edit() {
  const apiEndpoint = `${BaseURL}/parents/editParent`
  const params = useParams();
  const navigate = useNavigate();

  let id=params.id;
  const [parents, setParents] = useState([]);

  const editFetch= async ()=>{
    ;
    const response=  await axios.get(
      `${apiEndpoint}/${id}`
    );
    const data = await response.data;
    const result=data.parents;
    setParents(result);
    setUpparents({father_name:result.father_name,mother_name:result.mother_name,
      email:result.email,phone:result.phone
      });
  }

  useEffect(() => {
    editFetch();
  }, []);

  const [upparents,setUpparents] = useState({father_name:"",mother_name:"",email:"",phone:""})

  const updateParents = async (e) => {
    e.preventDefault();
   await axios.post(`${apiEndpoint}/${id}`,
      upparents
    ).then(function(result){
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text:'Data Updated Successfully...',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/parents/parents');
  })
  }

  const onChange = (e)=>{
    setUpparents({...upparents,[e.target.name]:e.target.value})
  }

  return (
    <>
      <Breadcrumb title="Parents" path="/parents" subtitle="Edit" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Edit Parents Details
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
                          <label
                            htmlFor="father_name"
                            className="col-sm-2 control-label"
                          >
                            Father's Name
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="father_name"
                              name="father_name"
                              value={upparents.father_name}
                              onChange={onChange}
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="mother_name"
                            className="col-sm-2 control-label"
                          >
                            Mother's Name
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="mother_name"
                              name="mother_name"
                              value={upparents.mother_name}
                              onChange={onChange}
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                          <label htmlFor="email" className="col-sm-2 control-label">
                            Email
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              name="email"
                              value={upparents.email}
                              onChange={onChange}
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                          <label htmlFor="phone" className="col-sm-2 control-label">
                            Phone<span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              name="phone"
                              value={upparents.phone}
                              onChange={onChange}
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>

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
                              <input
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
                                  <input
                                    type="file"
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
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Update Parents"
                              onClick={updateParents}
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
