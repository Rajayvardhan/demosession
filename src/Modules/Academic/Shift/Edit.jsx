import React , { useState, useEffect } from "react";
import { Link , useParams , useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Swal from 'sweetalert2';
import axios from "axios";
import { BaseURL } from "../../../api/DataApis";

function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  let id=params.id;
  const [shift, setShift] = useState([]);

  const editFetch= async ()=>{
    await axios.get(
      `${BaseURL}/shift/editShift/${id}`
    ).then(async(response)=>{
      const data = await response.data;
    const result=data.shifts;
    setShift(result);
    setUpshift({shift_name:result.shift_name,shiftInSTime:result.shiftInSTime,
      shiftInETime:result.shiftInETime,shiftSTime:result.shiftSTime,shiftETime:result.shiftETime,
      shiftOutSTime:result.shiftOutSTime,shiftOutETime:result.shiftOutETime
      });
    })
  }

  useEffect(() => {
    editFetch();
  }, []);

  const [upshift,setUpshift] = useState({shift_name:"",shiftInSTime:"",shiftInETime:"",shiftSTime:"",shiftETime:"",
  shiftOutSTime:"",shiftOutETime:""
  });

  const updateShift = async (e) => {
    e.preventDefault();
   await axios.post(`${BaseURL}/shift/editShift/${id}`,
      upshift
    ).then(function(result){
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text:'Data Updated Successfully...',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/academic/shift');
    })
  }

  const onChange = (e)=>{
    setUpshift({...upshift,[e.target.name]:e.target.value})
  }


  return (
    <>
      <Breadcrumb title="Shift" path="/shift" subtitle="Edit" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                     Edit Shift Details
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
                              value={upshift.shift_name}
                              onChange={onChange}
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
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
                              type="text"
                              placeholder="Shift In Start Time"
                              className="form-control"
                              id="shiftInSTime"
                              name="shiftInSTime"
                              value={upshift.shiftInSTime}
                              onChange={onChange}
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              placeholder="Shift In End Time"
                              className="form-control"
                              id="shiftInETime"
                              name="shiftInETime"
                              value={upshift.shiftInETime}
                              onChange={onChange}
                            />
                          </div>
                          <span className="col-sm-3 control-label"></span>
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
                              type="text"
                              placeholder="Shift Return Start Time"
                              className="form-control"
                              id="shiftSTime"
                              name="shiftSTime"
                              value={upshift.shiftSTime}
                              onChange={onChange}
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              placeholder="Shift Return End Time"
                              className="form-control"
                              id="shiftETime"
                              name="shiftETime"
                              value={upshift.shiftETime}
                              onChange={onChange}
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
                              type="text"
                              placeholder="Shift Out Start Time"
                              className="form-control"
                              id="shiftOutSTime"
                              name="shiftOutSTime"
                              value={upshift.shiftOutSTime}
                              onChange={onChange}
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              placeholder="Shift Out End Time"
                              className="form-control"
                              id="shiftOutETime"
                              name="shiftOutETime"
                              value={upshift.shiftOutETime}
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
                              value="Update Shift"
                              onClick={updateShift}
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
