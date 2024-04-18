import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

function Add() {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [listItems, setListItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
  
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      // const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
  
      // setInputValue(numericValue);
    };
    const handleError= ()=> {
  alert("Please select the essential options");
  
  
    }
    const handleOption1Change = (event) => {
      setSelectedOption1(event.target.value);
    };
  
    const handleOption2Change = (event) => {
      setSelectedOption2(event.target.value);
    };
  
    const handleOption3Change = (event) => {
      setSelectedOption3(event.target.value);
    };
    const generateListItems = () => {
      
      // Generate the list items based on the selected options
      // You can implement your own logic here based on your requirements
      const items = [
        
  
        <div className="card-body" style={{marginLeft:"-50px"}}>
        <div className="table-responsive">
          <table className="table display dataTable" id="advance-1">
            <thead>
              <tr>
                <th>s no</th>
                <th>Sr no.</th>
                <th>Old/New</th>
                <th>Student Name</th>
                <th>Father Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Total</th>
              
              </tr>
            </thead>
            <tbody>
          <tr>
                      <td>1</td>
                      <td>1</td>
                      <td>Old</td>
                      <td>Mahesh-ji</td>
                      <td>abc</td>
                      <td>1</td>
                      <td>v</td>
                      <td>236</td>
                      
                     
                     
                    
                     
                        {/* <Link to="/marks/assigngrade/edit"><i className="fa fa-edit" style={{fontSize:"18px"}}></i> </Link> */}
                        {/* <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link> */}
                      
                    
                    
                    </tr>
                  
                  {/* ); */}
                {/* })} */}
            </tbody>
            {/* <tfoot>
              <tr>
              <th>#</th>
              <th>Photo</th>
                <th>Name</th>
                <th>Roll</th>
                <th>English</th>
                <th>Hindi</th>
                <th>Maths</th>
                <th>EVS</th>
                <th>Science</th>
                <th>Social studies</th>
                <th>Sanskrit</th>
                <th>test</th>
                <th>test</th>
                <th>Action</th>
              </tr>
            </tfoot> */}
          </table>
        </div>
      </div>
  
      
        // Add more items based on the selected options
      ];
      setListItems(items);
      if (selectedOption1 && selectedOption2 && selectedOption3) {
        generateListItems();
      } else {
        {handleError()};
      
      }
  
  
    }
  
    const handleRenderList = () => {
      if (selectedOption1 && selectedOption2 && selectedOption3) {
        generateListItems();
      } else {
        {handleError()};
      
      }}

  const [checkboxes, setCheckboxes] = useState({
    January: false,
    February: false,
    March: false,
    April: false,
    May: false,
    June: false,
    July: false,
    August: false,
    September: false,
    October: false,
    November: false,
    December: false,
    // Add more checkboxes as needed
  });

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    const checked = e.target.checked;
    setCheckboxes((prevState) => ({
      ...prevState,
      [checkboxName]: checked,
    }));
  };
  const handleChange = (event) => {
    const {checked} = event.target;
    const { id, class: rowClass, normalFees, oldFees } = event.target.dataset;

    const html = checked
      ? `<td><input type="checkbox" id="${id}" data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="check_box" checked /></td>
             <td><input type="text" name="class[]" class="form-control" value="${rowClass}" /></td>
             <td><input type="text" name="normalFees[]" class="form-control" value="" /></td>
             <td><input type="text" name="oldFees[]" class="form-control" value="" /></td>`
      : `<td><input type="checkbox" id="${id}" data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="check_box" /></td>
             <td>${rowClass}</td>
             <td></td>
             <td></td>`;

    // event.target.closest('tr').innerHTML = html;
    const row = event.target.closest("tr");
    row.innerHTML = html;
    const checkboxinput = row.querySelector(".check_box");
    checkboxinput.addEventListener("change", handleChange);
  };

  const handleSelectAll = () => {
    const selectAllCheckbox = document.getElementById("table-select-all");
    const checkboxes = document.querySelectorAll(".check_box");

    checkboxes.forEach((checkbox) => {
      const { id, class: rowClass, normalFees, oldFees } = checkbox.dataset;
      const checked = selectAllCheckbox.checked;

      const html = checked
        ? `<td><input type="checkbox" id="${id}" data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="check_box" checked /></td>
               <td><input type="text" name="class[]" class="form-control" value="${rowClass}" /></td>
               <td><input type="text" name="normalFees[]" class="form-control" value="" /></td>
               <td><input type="text" name="oldFees[]" class="form-control" value="" /></td>`
        : `<td><input type="checkbox" id="${id}" data-class="${rowClass}" data-normalFees="${normalFees}" data-oldFees="${oldFees}" class="check_box" /></td>
               <td>${rowClass}</td>
               <td></td>
               <td></td>`;

      // checkbox.closest('tr').innerHTML = html;
      const row = checkbox.closest("tr");
      row.innerHTML = html;
      const checkboxinput = row.querySelector(".check_box");
      checkboxinput.addEventListener("change", handleChange);
    });
  };

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    const updatedCheckboxes = {};

    for (let key in checkboxes) {
      updatedCheckboxes[key] = checked;
    }

    setCheckboxes(updatedCheckboxes);
  };

  
  const handleCheckBox = (e) => {
    const { checkedd } = e.target;
  };

  function Recall() {
    alert("Hello");
  }
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ms-4">
            <i className="fa fa-laptop"></i>
            <Link to="/"> Dashboard</Link>
            {/* <i className="fa fa-circle"></i> */}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Account/ Fee_type
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  {/* <div className="col-sm-4 add"> */}
                  <h1>Fee types</h1>
                
                </div>
                <div>
                  <hr />
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
                                <form
                                  className="form-horizontal"
                                  role="form"
                                  method="post"
                                >
                                  <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-2">
                                        <label
                                      htmlFor="feetype_name"
                                      className="control-label"
                                    >
                                      Name
                                    </label>
                                        </div>
                                        
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        min={0}
                                        className="form-control"
                                        id="feetype_name"
                                        name="feetype_name"
                                        defaultValue=""
                                      />
                                    </div>
                                    <span className="col-sm-4 control-label"></span>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-2">
                                        <label
                                      htmlFor="feetype_name"
                                      className="control-label"
                                    >
                                      Fee Config Type
                                    </label>
                                        </div>
                                        
                                    <div className="col-sm-6">
                                      <select
                                        
                                        min={0}
                                        className="form-control"
                                        id="feetype_name"
                                        name="feetype_name"
                                        defaultValue=""
                                      >
                                         <option>General</option>
                                         <option>Optional</option>
                                      </select>
                                    </div>
                                    <span className="col-sm-4 control-label"></span>
                                    </div>
                                  </div>
                                  {/* <div id="divsms_class" className="form-group"> */}{" "}
                                  {/* <label
                          htmlFor="fees_term"
                          className="col-sm-2 control-label"
                        > */}
                                  {/* Term{" "} */}
                                  {/* </label> */}
                                  {/* <div className="col-sm-6"> */}
                                  {/* <select
                            name="fees_month"
                            id="fees_month"
                            className="form-control select2"
                            placeholder=""
                          >
                            <option> Select-Term</option>
                             
                            
                            
                            <option value="Term-I">Term-I</option>
                            <option value="Term-II">Term-II</option>
                            <option value="Term-III">Term-III</option>
                          </select>
                        </div>
                        </div> */}
                        <div className="row">
                            <div className="col-sm-2">
                            {/* <h5>Tenure</h5> */}
                            </div>
                            <div className="col-sm-8">
                            {/* <h5>Course</h5> */}
                            </div>
                        </div>
                                  <div class="form-group">
                                    <div className="row">
                                    <div className="col-sm-2">
                                    <label
                                      for="feetypes"
                                      class="control-label"
                                    >
                                      <div class="table-responsive">
                                        <table class="table table-bordered table-striped">
                                          <thead>
                                            <tr>
                                              <th width="5%">
                                                <input
                                                  type="checkbox"
                                                  checked={Object.values(
                                                    checkboxes
                                                  ).every((val) => val)}
                                                  onChange={
                                                    handleSelectAllChange
                                                  }
                                                />
                                              </th>
                                              <th width="15%">Months</th>
                                              {/* <!-- <th width="30%">Reguler Student Fees</th> */}
                                              {/* <th width="30%">Old Student Fees</th>  */}
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>
                                                {/* <input type="checkbox" id="January"
                                                                            data-class="January"
                                                                            data-normalfees="undefined"
                                                                            data-oldfees="undefined" className="check_box"
                                                                              onChange ={handleCheckBox}
                                                                            /> */}
                                                <label>
                                                  <input
                                                    type="checkbox"
                                                    name="month[]"
                                                    value="January"
                                                    checked={checkboxes.January}
                                                    onChange={
                                                      handleCheckboxChange
                                                    }
                                                  />
                                                </label>
                                              </td>
                                              <td>January</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="month[]"
                                                  value="February"
                                                  checked={checkboxes.February}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>
                                              <td>February</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="March"
                                                  checked={checkboxes.March}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />{" "}
                                              </td>
                                              <td>March</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="April"
                                                  checked={checkboxes.April}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>
                                              <td>April</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="May"
                                                  checked={checkboxes.May}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>

                                              <td>May</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="June"
                                                  checked={checkboxes.June}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>

                                              <td>June</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="July"
                                                  checked={checkboxes.July}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>

                                              <td>July</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="August"
                                                  checked={checkboxes.August}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>

                                              <td>August</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="September"
                                                  checked={checkboxes.September}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>

                                              <td>September</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="October"
                                                  checked={checkboxes.October}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>

                                              <td>October</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="November"
                                                  checked={checkboxes.November}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>

                                              <td>November</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="December"
                                                  checked={checkboxes.December}
                                                  onChange={
                                                    handleCheckboxChange
                                                  }
                                                />
                                              </td>

                                              <td>December</td>
                                            </tr>

                                            <span className="col-sm-4 control-label"></span>
                                          </tbody>
                                        </table>
                                      </div>
                                    </label>
                                    </div>
                                    <div className="col-sm-8">
                                    <div className="col-sm-12">
                                      <div className="table-responsive">
                                        <table className="table table-bordered table-striped">
                                          <thead>
                                            <tr>
                                              <th width="5%">
                                                <input
                                                  type="checkbox"
                                                  name="select_all"
                                                  value="1"
                                                  id="table-select-all"
                                                  onChange={handleSelectAll}
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
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={2}
                                                  data-class="I"
                                                  value= "I"
                                                  data-normalfees="undefined"
                                                  data-oldfees="undefined"
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>I</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={3}
                                                  data-class="II"
                                                  data-normalfees="undefined"
                                                  data-oldfees="undefined"
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>II</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={4}
                                                  data-class="III"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>III</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={5}
                                                  data-class="IV"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>IV</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={6}
                                                  data-class="V"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>V</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={7}
                                                  data-class="VI"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>VI</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={8}
                                                  data-class="VII"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>VII</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={9}
                                                  data-class="VIII"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>VIII</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={10}
                                                  data-class="IX"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>IX</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={17}
                                                  data-class="X"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>X</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={11}
                                                  data-class="NURSERY CHERRY PEACH"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>NURSERY CHERRY PEACH</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={12}
                                                  data-class="LKG CHERRY PEACH"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>LKG CHERRY PEACH</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={26}
                                                  data-class="HKG CHERRY PEACH"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>HKG CHERRY PEACH</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={27}
                                                  data-class="PLAY GROUP"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>PLAY GROUP</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={28}
                                                  data-class="HKG STRAWBERRY"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>HKG STRAWBERRY</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={29}
                                                  data-class="LKG STRAWBERRY"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>LKG STRAWBERRY</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={30}
                                                  data-class="NURSERY STRAWBERRY"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>NURSERY STRAWBERRY</td>
                                              <td />
                                              <td />
                                            </tr>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id={31}
                                                  data-class="test"
                                                  data-normalfees=""
                                                  data-oldfees=""
                                                  className="check_box"
                                                  onChange={handleChange}
                                                />
                                              </td>
                                              <td>test</td>
                                              <td />
                                              <td />
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div className="col-sm-3">
                                      {/* <div class="table-responsive">
                          <table class="table table-bordered table-striped">
                              <thead>
                                  <tr><th width="5%"><input type="checkbox" name="select_all" value="1" id="table-select-all"></th>
                                  <th width="15%">Class</th>
                                  <th width="30%">Reguler Student Fees</th>
                                  <th width="30%">Old Student Fees</th>
                              </tr></thead>
                              <tbody>
                                                                          <tr>
                                      <td><input type="checkbox" id="2" data-class="I" onChange="displayd(this,1);" data-normalfees="" data-oldfees="" ></td>
                                      <td>I</td>
                                      <td><input type="text" class="inp alsgdf"/></td>
                                      <td><input type="text" class="inp1 alsgdf"/></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="3" data-class="II" onChange="displayd(this,2);"data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>II</td>
                                      <td><input type="text" class="inp2 alsgdf"/></td>
                                      <td><input type="text" class="inp2 alsgdf"/></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="4" data-class="III" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>III</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="5" data-class="IV" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>IV</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="6" data-class="V" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>V</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="7" data-class="VI" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>VI</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="8" data-class="VII" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>VII</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="9" data-class="VIII" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>VIII</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="10" data-class="IX" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>IX</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="17" data-class="X" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>X</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="11" data-class="NURSERY CHERRY PEACH" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>NURSERY CHERRY PEACH</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="12" data-class="LKG CHERRY PEACH" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>LKG CHERRY PEACH</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="26" data-class="HKG CHERRY PEACH" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>HKG CHERRY PEACH</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="27" data-class="PLAY GROUP" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>PLAY GROUP</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="28" data-class="HKG STRAWBERRY" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>HKG STRAWBERRY</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="29" data-class="LKG STRAWBERRY" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>LKG STRAWBERRY</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="30" data-class="NURSERY STRAWBERRY" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>NURSERY STRAWBERRY</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                                  <tr>
                                      <td><input type="checkbox" id="31" data-class="test" data-normalfees="" data-oldfees="" class="check_box"></td>
                                      <td>test</td>
                                      <td></td>
                                      <td></td>
                                      </tr>
                                                                          </tbody>
                          </table>
                      </div> */}
                                    </div>
                                    <span className="col-sm-4 control-label"></span>
                                  </div>
                                    </div>
                                    </div>
                                  <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-2">
                                        <label
                                      htmlFor="display_order"
                                      className="control-label"
                                    >
                                      OrderType
                                    </label>
                                        </div>
                                    <div className="col-sm-6">
                                      <input
                                        type="number"
                                        min={0}
                                        className="form-control"
                                        id="display_order"
                                        name="display_order"
                                        defaultValue=""
                                      />
                                    </div>
                                    <span className="col-sm-4 control-label"></span>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="row">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-offset-2 col-sm-8">
                                      <input
                                        type="submit"
                                        className="btn btn-success"
                                        defaultValue="Add Fee Type"
                                      />
                                    </div>
                                    </div>
                                    
                                  </div>
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
