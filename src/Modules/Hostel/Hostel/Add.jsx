import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import request from "../../../Apis/request";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";


function Add() {
  document.title = "Advance | Add";
  let navigate = useNavigate();
  const redirect = () => {
    // let path = `/advance`;

  };


  const [HostelName, setHostelName] = useState("");
  
  const [loading, setLoading] = useState(false);
  // const [selectedHostelType, setSelectedhoste] = useState("");
  const [selectedhostelType, setselectedhostelType] = useState("");
  const [Address, setAdddress] = useState([]);
  const[Note, setNote] = useState("");
  

  const HandleAddress = (e) => {
    setAdddress(e.target.value);

  }
  const handleHostelName = (e) => {
    setHostelName(e.target.value);
}

const handleNote = (e) => {
  setNote(e.target.value);
}
const handleHostelType = (e) => {
  setselectedhostelType(e.target.value);
}




  

  const   AddHostel = async () => {

    let response = await request({
      url: `${BaseURL}/hostel/addHostel`,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        // "feetype_name" : FeeType,
        "schoolyearID" : schoolyearID,
        "name": HostelName,
        "htype": selectedhostelType,
        "address" : Address,
        "note": Note
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  
     if( response.status == "200" ) {
      Swal.fire({
        icon: "success",
        title: "success!",
        text: "Hostel Added Successfully...",
        showConfirmButton: false,
        timer: 1500,
      });
      // var receiptID = response.receiptID;
      // var schoolyearID = response.schoolyearID;
      // var urll = `${BaseURL}/feecollection/printPreview/${schoolyearID}/${receiptID}`;
navigate(`/hostel/hostel`);
      // window.location.href = urll;
      // fetchData();
    } 
          //  alert("Data submitted successfully!!");fee_list
          // let feetypenamedata = response.fee_list
          // console.log(feetypenamedata, "feetypenamedata");
          // setFeeNameListing(response?.fee_list)
                      //  console.log("response", response.fee_list);
          //  fetch("http://www.swarnkarsamajindia.com/api/add-karyakarini");
    // } else {
        // alert("data entry failed");
     
}

useEffect(() => {
  AddHostel();
}, []);

return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title row">
                  <div className="caption font-dark col-md-10">
                    <h4 className="caption-subject bold uppercase mx-3">
                    Hostel Add
                    </h4>
                  </div>
                  <div className="caption font-dark col-md-2">
                    <h5 className="caption-subject bold uppercase mx-3">
                      <button className="btn btn-success" onClick={redirect}>
                        Back
                      </button>
                    </h5>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        encType="multipart/form-data"
                        role="form"
                        method="post"
                        style={{marginTop:"-20px"}}
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Hostel Name
                            </label>
                            <div className="col-sm-6">
                            <select onChange= {handleHostelName} className="form-control" id="name_id" name="name">
                                  <option value="0" >Select Hostel</option>
                                  {/* { classes && classes.map((classes) => { */}
                      
                          <option value="hostel-1">Hostel-1</option>
                          <option value="hostel-2">Hostel-2</option>
                          <option valuee="hostel-3">Hostel-3</option>
                          <option value="hostel-4">Hostel-4</option>
                      
                      {/* })} */}
                                  </select>
                              
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Hostel type
                            </label>
                            <div className="col-sm-6">
                            <select  onChange = {handleHostelType} 
                                    type="text"
                                    className="form-control"
                                    id="hostelType"
                                    name="HostelType"
                                    
                                  >
                                  <option value="0" >Select Hostel Type</option>
                            
                  
                          <option value="Boys">Boys hostel</option>
                          <option value="Girls">Girls hostel</option>
</select>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen2"
                              className="col-sm-2 control-label"
                            >
                              Address
                            </label>
                            <div className="col-sm-6">
                              <input
                                className="form-control"
                                type="text"
                                onChange= {HandleAddress}
                                
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen2"
                              className="col-sm-2 control-label"
                            >
                              Note
                            </label>
                            <div className="col-sm-6">
                              {/* <input
                                className="form-control"
                                type="text"
                              /> */}
                              <textarea  className="form-control"  onChange={handleNote} />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="button"
                              className="btn btn-success"
                              onClick={AddHostel}
                              value="Add Hostel"
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
