import React , { useState, useEffect } from "react";
import { Link , useParams , useNavigate } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Swal from 'sweetalert2';
import axios from "axios";
import { BaseURL } from "../../api/DataApis";

function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  let id=params.id;
  const [staff, setStaff] = useState([]);

  const editFetch= async ()=>{
    const response=  await axios.get(
      `${BaseURL}/teacher/editStaff/${id}`
    );
    const data = await response.data;
    const result=data.staff;
    setStaff(result);
    setUpstaff({name:result.name,registerNO:result.registerNO,
      designation:result.designation,dob:result.dob,sex:result.sex,
      religion:result.religion,email:result.email,phone:result.phone,
      address:result.address,jod:result.jod,dol:result.dol,photo:result.photo,bankname:result.bankname,
      bankaccount:result.bankaccount,bankifsc:result.bankifsc,pfnumber:result.pfnumber,
      esiumber:result.esiumber,aadharnumber:result.aadharnumber,policynumber:result.policynumber,
      doi:result.doi,inc:result.inc
      });
  }

  useEffect(() => {
    editFetch();
  }, []);

  const [upstaff,setUpstaff] = useState({name:"",registerNO:"",designation:"",dob:"",sex:"",
  religion:"",email:"",phone:"",address:"",jod:"",dol:"",photo:"",bankname:"",bankaccount:"",bankifsc:"",
  pfnumber:"",esiumber:"",aadharnumber:"",policynumber:"",doi:"",inc:"" });


  // const formData = new FormData()
  // formData.append('photo', upstaff.photo)
  // // formData.append('matrimonial_id', i.id);
  // console.log(formData);

  const updateStaff = async (e) => {
    e.preventDefault();
   await axios.post(`${BaseURL}/teacher/editStaff/${id}`,{
      "staff":upstaff
    }).then(function(result){
      // result.json().then((resp)=>{
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text:'Data Updated Successfully...',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/staff/staff');
        
      // })
    })
  }
  const onChange = (e)=>{
    setUpstaff({...upstaff,[e.target.name]:e.target.value})
  }

  const onChanges =(e) => {
    // console.log(e.target.files)
    setUpstaff({...upstaff,[e.target.name]:e.target.files[0]});
    }

  return (
    <>
      <Breadcrumb title="Staff" path="/staff" subtitle="Edit" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Edit Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-10">
                    <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        encType="multipart/form-data"
                        id="frm"
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="name_id"
                              className="col-sm-2 control-label"
                            >
                              Name <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="name_id"
                                name="name"
                                value={upstaff.name}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="name_id"
                              className="col-sm-2 control-label"
                            >
                              Employee Code <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="registerNO"
                                name="registerNO"
                                value={upstaff.registerNO}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="designation"
                              className="col-sm-2 control-label"
                            >
                              Designation <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="designation"
                                name="designation"
                                value={upstaff.designation}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="dob" className="col-sm-2 control-label">
                              Date of Birth <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="date"
                                className="form-control"
                                id="dob"
                                name="dob"
                                value={upstaff.dob}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="sex" className="col-sm-2 control-label">
                              Gender
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="sex"
                                id="sex"
                                className="form-control"
                                value={upstaff.sex}
                                onChange={onChange}
                              >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="religion"
                              className="col-sm-2 control-label"
                            >
                              Religion
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="religion"
                                name="religion"
                                value={upstaff.religion}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="email"
                              className="col-sm-2 control-label"
                            >
                              Email
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={upstaff.email}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="phone"
                              className="col-sm-2 control-label"
                            >
                              Phone <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={upstaff.phone}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="address"
                              className="col-sm-2 control-label"
                            >
                              Address
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={upstaff.address}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="jod" className="col-sm-2 control-label">
                              Date of Joining
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="date"
                                className="form-control"
                                id="jod"
                                name="jod"
                                value={upstaff.jod}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="dol" className="col-sm-2 control-label">
                              Date of Leaving
                              <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="dol"
                                name="dol"
                                value={upstaff.dol}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="photo"
                              className="col-sm-2 control-label"
                            >
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
                                    style={{ display: "none" }}
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
                                      onChange={onChanges}
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>
                            <span className="col-sm-4"></span>
                          </div>
                        </div>
                        <br />
                        <h3>Account Details </h3>
                        <br />
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="bankname"
                              className="col-sm-2 control-label"
                            >
                              Bank Name
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="bankname"
                                name="bankname"
                                value={upstaff.bankname}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="bankaccount"
                              className="col-sm-2 control-label"
                            >
                              Bank Account
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="bankaccount"
                                name="bankaccount"
                                value={upstaff.bankaccount}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="bankifsc"
                              className="col-sm-2 control-label"
                            >
                              IFSC Code
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="bankifsc"
                                name="bankifsc"
                                value={upstaff.bankifsc}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="pfnumber"
                              className="col-sm-2 control-label"
                            >
                              PF Number
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="pfnumber"
                                name="pfnumber"
                                value={upstaff.pfnumber}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="esiumber"
                              className="col-sm-2 control-label"
                            >
                              ESI - IP/REG. No.
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="esiumber"
                                name="esiumber"
                                value={upstaff.esiumber}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="aadharnumber"
                              className="col-sm-2 control-label"
                            >
                              Aadhar number
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="aadharnumber"
                                name="aadharnumber"
                                value={upstaff.aadharnumber}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="policynumber"
                              className="col-sm-2 control-label"
                            >
                              policy number
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="policynumber"
                                name="policynumber"
                                value={upstaff.policynumber}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="doi" className="col-sm-2 control-label">
                              Date of Increment / Appraisal
                              <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="doi"
                                name="doi"
                                value={upstaff.doi}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label htmlFor="inc" className="col-sm-2 control-label">
                              Increment <span className="text-red">*</span>
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="inc"
                                name="inc"
                                value={upstaff.inc}
                                onChange={onChange}
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <br />
                        <h3>Earning Type </h3>
                        <br />
                        <br />
                        <h3>Deduction Type </h3>
                        <br />
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <button
                              type="submit"
                              className="btn btn-success"
                              value="Update Staff"
                              onClick={updateStaff}
                            >
                              Update Staff
                            </button>
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
