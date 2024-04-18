import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
// import axios from "axios";
import request from '../../../Apis/request';
import Swal from "sweetalert2";
import PPinvoice from "./Feeinvoice"; 
import "./Ppinvoice.css";
import { BaseURL, schoolyearID } from "../../../api/DataApis";

function Add() {
const [FeeType, setFeetype] = useState("");
const [feeTypeID, setFeeTypeID] = useState("");
const [FeeNameListing, setFeeNameListing] =  useState([]);
const [FeeName, setFeeName] = useState("");
const FeeNameHandless = (e) => {
  // alert("hello");
  setFeeTypeID(e.target.value);
  // alert(e.target.value);
};

const handleFee = (e) => {
  setFeeName(e.target.value);
}
const FeeTypeNameAdd = async() => {

    let response = await request({
      url: `${BaseURL}/feetypes/feetypeadd`,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "feetype_name" : FeeName,
         "feetype": "1",
        "username": "Admin",
        
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });

    if( response.status == "200" ) {
         fetchDataa();
         Swal.fire({
          icon: "success",
          title: "success!",
          text: "Feetype Name Added Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        handleClick();
         console.log(response);
        //  fetch("http://www.swarnkarsamajindia.com/api/add-karyakarini");
       } else {
         alert("data entry failed");
       }
    }

    const fetchDataa = async () => {

      let response = await request({
        url: `${BaseURL}/feetypes/feetypeget`,
        // url: 'posts',
        method:"POST",
        data: JSON.stringify({
          // "feetype_name" : FeeType,
           "type": "1",
          // "username": "Admin",
          
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      });
    
      if( response.status == "200" ) {
    
     
      
    
            //  alert("Data submitted successfully!!");fee_list
            // let feetypenamedata = response.fee_list
            // console.log(feetypenamedata, "feetypenamedata");
            setFeeNameListing(response.fee_list)
            console.log("responseeeee", response);
            //  fetch("http://www.swarnkarsamajindia.com/api/add-karyakarini");
      } 
    }
    
    useEffect(() => {
    fetchDataa();
    }, []);

  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];
  const [date, setDate] = useState(formattedDate);
  const [checkedDates, setCheckedDates] = useState({});
  const [checkboxes, setCheckboxes] = useState({});
  const [classcheckboxes, setClassCheckboxes] = useState({});
  const [normalFees, setNormalFees] = useState({});
  const [oldFees, setOldFees] = useState({});
  const [months, setMonths] = useState([]);
  const [loading, setLoading] = useState(false);
  const[Classes, setClasses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  const fetchData = async () => {

       await axios
      .get(`${BaseURL}/feetypes/addFeeType`)
      .then((resp) => {
        setMonths(resp.data.tenure);
        setClasses(resp.data.classes, "resp");
        console.log(resp.data.classes, "resp");
        // console.log("months", months);
      });
  };
  useEffect(() => {

    fetchData();
    // console.log("monthssssssss", months);
  }, []);

  const AddNormalFees = (event) => {

    const { id, value } = event.target;

    console.log(id + "-------" + value);

    setNormalFees((prevState) => ({
      ...prevState,
      [id]: value,
    }));

}


  const AddOldFees = (event) => {

    const { id, value } = event.target;
    console.log(id + "-------" + value);

    setOldFees((prevState) => ({
      ...prevState,
      [id]: value,
    }));
   }

  /*********************************Checked all and single class function here**************************/
  const handleChange = (event) => {

    const { checked } = event.target;
    const { id, class: rowClass, normalFees, oldFees } = event.target.dataset;
    console.log("event.target.dataset", event.target.dataset);

    setClassCheckboxes((prevState) => ({
      ...prevState,
      [id]: checked,
    }));

    const html = checked
      ? `<td><input type="checkbox" id="${id}" data-id = ${id} data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="check_box" checked /></td>
             <td>${rowClass}</td>
             <td><input type="text" id="${id}" name="normalFees[]" data-id = ${id} class="form-control normal_fees" /></td>
             <td><input type="text" id="${id}" name="oldFees[]" data-id = ${id} class="form-control old_fees" /></td>`
      : `<td><input type="checkbox" id="${id}" data-id = ${id} data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="check_box" /></td>
             <td>${rowClass}</td>
             <td></td>
             <td></td>`;

    // event.target.closest('tr').innerHTML = html;
    const row = event.target.closest("tr");
    row.innerHTML = html;
    const checkboxinput = row.querySelector(".check_box");
    checkboxinput.addEventListener("change", handleChange);

    const normalFeesInput = row.querySelector(".normal_fees");
    normalFeesInput.addEventListener("keyup", AddNormalFees);

    const oldFeesInput = row.querySelector(".old_fees");
    oldFeesInput.addEventListener("keyup", AddOldFees);
  };

  const handleSelectAllClasses = () => {

    const selectAllCheckbox = document.getElementById("table-select-all");
    const checkboxes = document.querySelectorAll(".check_box");

    checkboxes.forEach((checkbox) => {

      const { id, class: rowClass, normalFees, oldFees } = checkbox.dataset;
      const checked = selectAllCheckbox.checked;

      setClassCheckboxes((prevState) => ({
        ...prevState,
        [id]: checked,
      }));

      const html = checked
      ? `<td><input type="checkbox" id="${id}" data-id = ${id} data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="check_box" checked /></td>
             <td>${rowClass}</td>
             <td><input type="text" id="${id}" name="normalFees[]" data-id = ${id} class="form-control normal_fees" /></td>
             <td><input type="text" id="${id}" name="oldFees[]" data-id = ${id} class="form-control old_fees" /></td>`
      : `<td><input type="checkbox" id="${id}" data-id = ${id} data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="check_box" /></td>
             <td>${rowClass}</td>
             <td></td>
             <td></td>`;

      const row = checkbox.closest("tr");
      row.innerHTML = html;
      const checkboxinput = row.querySelector(".check_box");
      checkboxinput.addEventListener("change", handleChange);

      const normalFeesInput = row.querySelector(".normal_fees");
      
      if(normalFeesInput){
        normalFeesInput.addEventListener("keyup", AddNormalFees)
      }

      const oldFeesInput = row.querySelector(".old_fees");
      if(oldFeesInput) {
      oldFeesInput.addEventListener("keyup", AddOldFees);
      }
    });
  };
  /*********************************End of single and multiple class here*******************/
  


  /*****************************Months Data Fetched here***********************************/
  const dateCheckInput = (event) => {

    const dateboxName = event.target.name;
    const dateValue = event.target.value;
    console.log("dateboxName==" + dateboxName, "-----------" + dateValue, "--checkedDates--", checkboxes);

    // var checkObj = {};
    // for (var key in checkboxes) {
    //   checkObj[key] = dateValue;
    // }
    // setCheckedDates(checkObj);
    setCheckedDates((prevState) => ({
      ...prevState,
      [dateboxName]: dateValue,
    }));

  }

  const AppendDatehandleChange = (event) => {

    const { checked } = event.target;
    // alert("checked",checked);
    console.log("checked", checked);
    const { id, class: rowClass, normalFees, oldFees } = event.target.dataset;

    const checkboxName = event.target.name;
    //const checked = e.target.checked;
    setCheckboxes((prevState) => ({
      ...prevState,
      [rowClass]: checked,
    }));

    const html = checked
      ? `<td><input type="checkbox" id="${id}" data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="date_check_box checkkk" checked /></td>
             <td>${rowClass}</td>
             <td><input type="date"  name="${rowClass}" value=${date} class="form-control date_check_input" /></td>`
      : `<td><input type="checkbox" id="${id}" data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="date_check_box checkkk" /></td>
             <td>${rowClass}</td>
             <td></td>`;

    // event.target.closest('tr').innerHTML = html;
    const row = event.target.closest("tr");
    row.innerHTML = html;

    const checkboxinput = row.querySelector(".date_check_box");
    checkboxinput.addEventListener("change", AppendDatehandleChange);

    const checkdateinput = row.querySelector(".date_check_input");
    checkdateinput.addEventListener("change", dateCheckInput);
  };

  const handleSelectAllMonths = () => {

    const selectAllCheckboxes = document.getElementById("month-table-select-all");
    const checkboxes = document.querySelectorAll(".checkkk");
    //console.log("---checkboxes---",checkboxes);

    checkboxes.forEach((checkbox) => {
      const { id, class: rowClass, normalFees, oldFees } = checkbox.dataset;
      const checked = selectAllCheckboxes.checked;

      setCheckboxes((prevState) => ({
        ...prevState,
        [rowClass]: checked,
      }));

      const html = checked
      ? `<td><input type="checkbox" id="${id}" data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="date_check_box checkkk" checked /></td>
             <td>${rowClass}</td>
             <td><input type="date"  name="${rowClass}" value=${date} class="form-control date_check_input" /></td>`
      : `<td><input type="checkbox" id="${id}" data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="date_check_box checkkk" /></td>
             <td>${rowClass}</td>
             <td></td>`;

      // checkbox.closest('tr').innerHTML = html;
      const row = checkbox.closest("tr");
      row.innerHTML = html;
      const checkboxinput = row.querySelector(".checkkk");
      checkboxinput.addEventListener("change", AppendDatehandleChange);

      const checkdateinput = row.querySelector(".date_check_input");
       if (checkdateinput) {
        checkdateinput.addEventListener("change", dateCheckInput);
      }
    });
  };
  /*********************************End of the months code here****************************/

  /********************When chnaged fees type 0 and 1******************************************/
  const handleOptionChange = (event) => {

    setSelectedOption1(event.target.value);
    fetchData();
    setCheckedDates({});
    setCheckboxes({});
    setNormalFees({});
    setOldFees({});
    setMonths([]);
  };

  const AddFees = async(event) => {

    event.preventDefault();
    console.log("--checkboxes--", checkboxes);
    console.log("--checkedDates--", checkedDates);
    console.log("--normalfees--", normalFees);
    console.log("---oldFees---", oldFees);
    console.log("---classcheckboxes=--", classcheckboxes);

    var month = [];
    var dueDate = [];
    for (var dateKey in checkboxes) {
      if (checkboxes[dateKey] == true) {
        month.push(dateKey);
        dueDate.push(checkedDates[dateKey] ? checkedDates[dateKey] : date);
      }
    }

    var classArr = [];
    var normalFeesArr = [];
    var oldFeesArr = [];
    for (var feesKey in classcheckboxes ) {
      if( classcheckboxes[feesKey] == true ) {
        if( normalFees[feesKey] ) {
          if( oldFees[feesKey] ) {
            classArr.push(feesKey);
            normalFeesArr.push(normalFees[feesKey]);
            oldFeesArr.push(oldFees[feesKey]);
          }
        }
      }
    }
    console.log("month", month);
    console.log("dueDate", dueDate);
    console.log("classArr", classArr);
    console.log("normalFeesArr", normalFeesArr);
    console.log("oldFeesArr", oldFeesArr);
    
    let response = await request({
      url: `${BaseURL}/feetypes/addFeeType`,
      // url: 'posts',
      method: "POST",
      data: JSON.stringify({
          "usertypeID" : "1",
          "schoolyearID": schoolyearID,
          "feetype_name": FeeName,
          "feetype":selectedOption1,
          "feetype_id": feeTypeID,
          "display_order":"1",
          "username":"Anupam",
          "month":month,
          "class":classArr,
          "oldFees":oldFeesArr,
          "normalFees":normalFeesArr,
          "duedate": dueDate
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    })

    if( response?.status == "200" ) {
      Swal.fire({
        icon: "success",
        title: "success!",
        text: "Feetype Submitted Successfully...",
        showConfirmButton: false,
        timer: 1500,
      });
  console.log("--response--", response);

    }
  }
  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  {/* <div className="col-sm-4 add"> */}
                  <h4>Fee types</h4>
                  {/* <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" style={{width:'auto'}} to="/Account/Fee_type/PPinvoice"><i className="fa fa-plus"></i>  Add Fee Type </Link> */}
                </div>
                <div>
                  <hr style={{ marginTop: "-5px" }} />
                </div>
              </div>
              <div
                className="wrapper row-offcanvas row-offcanvas-left container">
                <aside className="right-side">
                  <section className="content page-content-white">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="box">
                          <div className="box-body">
                            <div className="row ">
                              <div className="col-sm-12">
                                <form className="form-horizontal" role="form" method="post" style={{ marginTop: "-20px" }}>
                                  <div className="form-group">
                                    <div className="row">
                                      <div className="col-sm-2">
                                        <label htmlFor="feetype_name" className="control-label" style={{marginLeft:"-5px",marginTop:"9px"}}>Name </label>
                                      </div>
                                      <div className="col-sm-6">
                                        <select value={feeTypeID} onChange={FeeNameHandless} min={0} className="form-control" id="feetype_name" name="feetype_name" defaultValue="" >
                                        <option>select option</option>

                                    
                                        {FeeNameListing && FeeNameListing.map((u,i) => {
                                          return (
                                          <option key={u.feetypesID} value={u.feetypesID}>
                                            {u.fee_name}
                                          </option>
                                       ) })} 
                                        </select>
                                        
                                        <span className="input-group-addon add-btn"style={{backgroundColor:"#24695c",borderColor:"#4e4e4e",padding:"0px" }} >
                                  {/* <Link to="/class/add" className="add-button"> */}
                                  <i className="fas fa-info-circle" aria-hidden="true" onClick={handleClick}></i>
                                     
                                     {showPopup === true &&
                                      <div className="row" >
                                        <div className="col-sm-12">
                                          <form  className="form-horizontal"
                                            role="form"
                                            method="post"
                                            encType="multipart/form-data"
                                            style={{border:"1px #e6edef solid",padding:"19px",borderRadius:"5px"}}>

                                             <div className="form-group" style={{}}>
                                              <div className="row">
                                                <label
                                                  htmlFor="name_id"
                                                  className="col-sm-4 control-label"
                                                >
                                                  Fee Type Name
                                                </label>
                                                <div className="col-sm-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    //name="name"
                                                    value={FeeName}
                                                    onChange={handleFee} 
                                                  />
                                                  </div>
                                                <span className="col-sm-4 control-label"></span>
                                              </div>
                                            </div>
                                            <div className="col-sm-offset-2 col-sm-8 add-class">
                                                <input type="button" className="btn btn-success" value="Add" onClick={FeeTypeNameAdd}/>
                                            </div>
                                          </form>
                                        </div>
                                        </div>
                                      }
                                  
                                </span>
                                      </div>
                                      <span className="col-sm-4 control-label"></span>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="row">
                                      <div className="col-sm-2">
                                        <label htmlFor="feetype_name" className="control-label" style={{marginLeft:"-5px",marginTop:"9px"}}>Fee Config Type</label>
                                      </div>

                                      <div className="col-sm-6">
                                        <select value={selectedOption1} onChange={handleOptionChange} min={0} className="form-control" id="feetype_name" name="feetype_name" defaultValue="" >
                                          <option value="">Fee Config type</option>
                                          <option value="1">General</option>
                                          <option value="0">Optional</option>
                                        </select>
                                        {/* <div className="col-sm-2">
                                        <label htmlFor="feetype_name" className="control-label">Fee Config Type</label>
                                        </div> */}
                                        {/* <div className= "col-sm-6"> */}
                                        {/* <select className="form-control"> */}
                                        {/* {months && .map((classes) => { */}
                                        {/* {months && months.map((i) => { */}
                                        {/* return ( */}
                                        {/* <option key={i} value="0">{i.name}</option> */}

                                        {/* );   */}
                                        {/* })}  */}
                                        {/* </select> */}
                                        {/* </div> */}
                                        </div>
                                        </div>
                                    
                                        {selectedOption1 === "1" &&
                                          <>
                                            <div className="form-group">
                                              <div className="row" >
                                                <div className="col-sm-6">
                                                  <div className="table-responsive" style={{ marginTop: "45px", width: "100%"}}>
                                                    <table className="table table-bordered table-striped">
                                                      <thead>
                                                        <tr>
                                                          <th width="5%">
                                                            <input
                                                              type="checkbox"
                                                              onChange={handleSelectAllMonths}
                                                              id="month-table-select-all"
                                                            />
                                                          </th>

                                                          <th width="15%">Months</th>
                                                          <th width="15%">Due Date</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        {months && months.map((month, index) => (
                                                          <tr key={index}>
                                                            <td>
                                                              <input
                                                                type="checkbox"
                                                                id={index}
                                                                name={month.name}
                                                                data-class={month.id}
                                                                //checked={checkboxes[month.name]} // Assuming checkboxes is an object with lowercase month names as keys
                                                                className="checkkk"
                                                                onChange={AppendDatehandleChange}
                                                              />
                                                            </td>
                                                            <td>{month.name}</td>
                                                          </tr>
                                                        ))}
                                                        {/* <span className="col-sm-4 control-label"></span> */}
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                </div>

                                                <div className="col-sm-6">
                                                  <div className="table-responsive" style={{ marginTop: "45px", width: "100%" }}>
                                                    <table className="table table-bordered table-striped">
                                                      <thead>
                                                        <tr>
                                                          <th width="5%">
                                                            <input
                                                              type="checkbox"
                                                              name="select_all"
                                                              value="1"
                                                              id="table-select-all"
                                                              onChange={handleSelectAllClasses}
                                                            />
                                                          </th>
                                                          <th width="15%">Class</th>
                                                          <th width="30%">
                                                            Regular Student Fees
                                                          </th>
                                                          <th width="30%">
                                                            Old Student Fees
                                                          </th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                      {Classes && Classes.map((c, index) => (
                                                        <tr>
                                                          <td>
                                                            <input
                                                              type="checkbox"
                                                              id={c.classesID}
                                                              data-class={c.classes}
                                                              value={c.classes}
                                                              data-id={c.classesID}
                                                              data-normalfees=""
                                                              data-oldfees=""
                                                              className="check_box"
                                                              onChange={handleChange}
                                                            />

                                                          </td>
                                                          <td>{c.classes}</td>
                                                          <td />
                                                          <td />
                                                        </tr>
                                                         ))}
                                                        <tr>
                                                          
                                                         
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>


                                            <div className="form-group">
                                              <div className="row">
                                                <div className="col-sm-2">
                                                  <label htmlFor="feetype_name" className="control-label" style={{ marginLeft: "21px" }}>Order Type </label>
                                                </div>
                                                <div className="col-sm-6">
                                                  <input type="text" min={0} className="form-control" id="feetype_name" name="feetype_name" defaultValue="" style={{ width: "100%" }} />
                                                </div>
                                                <span className="col-sm-4 control-label"></span>
                                              </div>
                                            </div>
                                            <div className="col-sm-offset-2 col-sm-8">
                                              <input type="submit" onClick={AddFees} className="btn btn-success" defaultValue="Add" />
                                            </div>
                                          </>
                                        }{selectedOption1 === "0" &&
                                          <>
                                            <div className="col-sm-12">
                                              <div className="table-responsive">
                                                <table className="table table-bordered table-striped" style={{ marginTop: "45px" }}>
                                                  <thead>
                                                    <tr>
                                                      <th width="5%">
                                                        <input
                                                          type="checkbox"
                                                          name="select_all"
                                                          value="1"
                                                          id="table-select-all"
                                                          onChange={handleSelectAllClasses}
                                                        />
                                                      </th>
                                                      <th width="15%">Class</th>
                                                      <th width="30%">
                                                        Regular Student Fees
                                                      </th>
                                                      <th width="30%">
                                                        Old Student Fees
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                  {Classes && Classes.map((c, index) => (
                                                        <tr>
                                                          <td>
                                                            <input
                                                              type="checkbox"
                                                              id={c.classesID}
                                                              data-class={c.classes}
                                                              value={c.classes}
                                                              data-id={c.classesID}
                                                              data-normalfees="undefined"
                                                              data-oldfees="undefined"
                                                              className="check_box"
                                                              onChange={handleChange}
                                                            />

                                                          </td>
                                                          <td>{c.classes}</td>
                                                          <td />
                                                          <td />
                                                        </tr>
                                                         ))}
                                                    
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <div className="row">
                                                <div className="col-sm-2">

                                                </div>
                                                <div className="col-sm-6">
                                                  {/* <input  type="number"  min={0}  className="form-control"   id="display_order"   name="display_order"  defaultValue=""   /> */}
                                                </div>
                                                <span className="col-sm-4 control-label"></span>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <div className="row">
                                                <div className="col-sm-2">
                                                  <label htmlFor="feetype_name" className="control-label">Order Type </label>
                                                </div>
                                                <div className="col-sm-6">
                                                  <input type="text" min={0} className="form-control" id="feetype_name" name="feetype_name" defaultValue="" />
                                                </div>
                                                <span className="col-sm-4 control-label"></span>
                                              </div>
                                            </div>
                                            <div className="col-sm-offset-2 col-sm-8">
                                              <input type="submit" className="btn btn-success" onClick={AddFees} defaultValue="Add" />
                                            </div>
                                          </>
                                        }

                                      </div>
                                      <span className="col-sm-4 control-label"></span>
                                    
                        

                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
