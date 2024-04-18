import React, { useState, useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import request from "../../../Apis/request";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
import Swal from "sweetalert2";


function Add(props) {
  document.title = "Hostel Member | Add";
  let navigate = useNavigate();
  let location = useLocation();
  const {HostelAddData} = location.state;
 
//   const redirect = () => {
//     let path = `/advance`;
//     navigate(path);
//   };

  const [options, setOptions] = useState([""]);
  const [studentID, setStudentID] = useState([]);
  const [HostelID, setHostelID] = useState([]);
  const [CategoryID, setCategoryID] = useState([]);
  const[HostelFee, setHostelFee] = useState([]);
  const[TimePeriod, setTimePeriod] = useState([]);
  const[HostelListing, setHostelListing] = useState([]);
  const [loading, setLoading] = useState(false);
  


const handleStudentID = (e) => {
    setStudentID(e.target.value);
}
const handleHostelID = (e) => {
    setHostelID(e.target.value);
}
const handleCategoryID = (e) => {
    setCategoryID(e.target.value);
}
const handleHostelFee = (e) => {
    setHostelFee(e.target.value);
}
const handleTimePeriod = (e) => {
    setTimePeriod(e.target.value);

}





  const   AddHostel = async () => {

    let response = await request({
      url: `${BaseURL}/hmember/addHmember`,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        // "feetype_name" : FeeType,
    
    
      "schoolyearID" : schoolyearID,
      "studentID" : HostelAddData.studentID,
       "hbalance" : HostelFee,
       "categoryID" :  CategoryID,
    "hostelID" : HostelID,
       "period" : TimePeriod,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  
     if( response.status == "200" ) {
      Swal.fire({
        icon: "success",
        title: "success!",
        text: "Hostel Member Added Successfully...",
        showConfirmButton: false,
        timer: 1500,
      });
    //   var receiptID = response.receiptID;
      // var schoolyearID = response.schoolyearID;
    //   var urll = `${BaseURL}/feecollection/printPreview/${schoolyearID}/${receiptID}`;

    //   window.location.href = urll;
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




  const fetchHostelList = async () => {
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);

    var url = `${BaseURL}/hostel/getHostels`;
 

    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "schoolyearID": schoolyearID,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    // setClasses(res.classes); 
    if (res && res.hostels)  {
      //const data = res.data.student;
       //console.log("res",res.students)
       setHostelListing(res.hostels);
       
      
      //sreturn res.student;
      }
      


  
    return [];
}
 useEffect(() => {
  fetchHostelList();
 }, []);

console.log("hostelAddData", HostelAddData);

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
                    Hostel Member
                    </h4>
                  </div>
                  <div className="caption font-dark col-md-2">
                    <h5 className="caption-subject bold uppercase mx-3">
                      {/* <button className="btn btn-success" onClick={redirect}> */}
                        {/* Back */}
                      {/* </button> */}
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
                              Student Name
                            </label>
                            <div className="col-sm-6">
                            <input value={HostelAddData.name} className="form-control" id="name_id" name="name"  readOnly/>
                        
                               
                                
                              
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
                              Hostel Name
                            </label>
                            <div className="col-sm-6">
                            <select  onChange = {handleHostelID} 
                            
                                    className="form-control"
                                    id="HostelID"
                                    name="HostelID"
                                    
                                  >
                                  <option value="0" >Select Hostel</option>
                                  { HostelListing && HostelListing.map((h) => {
                        return (
                          <option
                            key={h.hostelID}
                            value={h.hostelID}
                          >
                            {h.name}
                          </option>
                        );
                      })}
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
                    Hostel Category
                            </label>
                            <div className="col-sm-6">
                              <select
                                className="form-control"
                              onChange= {handleCategoryID}
                                >
                                    <option value="0">select category</option>
                                    <option value="AC">AC</option>
                                    <option value="NON-AC">NON-AC</option>
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
                            Hostel Fee
                            </label>
                            <div className="col-sm-6">
                              {/* <input
                                className="form-control"
                                type="text"
                              /> */}
                              <input type ="text" className="form-control"  onChange={handleHostelFee} />
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
                            Time monthly
                            </label>
                            <div className="col-sm-6">
                              {/* <input
                                className="form-control"
                                type="text"
                              /> */}
                              <input type ="number" className="form-control" min="1" 
  max="12" 
  pattern="[1-9]|1[0-2]"  onChange={handleTimePeriod} />
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
                              value="Add Member"

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
