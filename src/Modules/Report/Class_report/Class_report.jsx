import React, {useState, useEffect} from "react";
import { AlignCenter } from "react-feather";
import { Link } from "react-router-dom";
import { BaseURL } from "../../../api/DataApis";
import request from "../../../Apis/request";

// import "./Class_report.css";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from 'mui/material';
const Class_report = ()=> {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [listItems, setListItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiEndpoint = `${BaseURL}/classes/getClasses`;
  const fetchData = async ( ) => {
    // console.log("classID", classesID);
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);

    var url = apiEndpoint;
 
    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"GET",
   
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    if (res && res.classes) {
      //const data = res.data.student;
       //console.log("res",res.students)
      // setExamState(res.exam_list);
      setClasses(res.classes);  
      // console.log("exam state", ExamState);
      //sreturn res.student;
      }

  
    return [];
}

useEffect(() => {
  fetchData ();
}, []);


console.log("classdata", classes);
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
  const handleOption4Change = (event) => {
    setSelectedOption4(event.target.value);
  };
  const generateListItems = () => {
    // Generate the list items based on the selected options
    // You can implement your own logic here based on your requirements
    const items = [
      <div class="row">
  <div class="column">
    <div class="card" style={{marginLeft: "0px"}}>
     <h5>Class Informations</h5> 
     <label>Total Students <span>:</span></label>
     <label>Class Teacher <span>:</span></label>
    </div>
  </div>

  <div class="column">
    <div class="card" style={{marginLeft: "0px"}}>
    
   <h5>Fee Details</h5> 
   <label>Fee Types Collections <span>:</span></label>
     <label>Student Account Info <span>:</span></label>
    </div>
  </div>
  </div>


// Add more items based on the selected options
    ];
    setListItems(items);
  };

  // Call the generateListItems function whenever the select box values change
  const handleRenderList = () => {
    if (selectedOption2 && selectedOption3) {
      generateListItems();
    } else {
      {handleError()};
    
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Class Report
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        style={{marginTop:"-23px"}}
                      >
                        <div className="row px-3">
                          <div className="col-md-12">
                            <div className="row ">
                               
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen2"
                                    className="control-label"
                                    style={{marginLeft:"20px"}}
                                  >
                                    Class{" "}
                                  </label>
                                  <select value={selectedOption2} style={{marginLeft: "-10px"}}
                                  onChange={handleOption2Change}
                                    name="classesID"
                                    id="classesID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select Class
                                    </option>
                                    {classes.map((classes) => {
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}
                          >
                            {classes.classes}
                          </option>
                        );
                      })}

                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Section
                                  </label>
                                  <select value={selectedOption3} onChange={handleOption3Change} style={{marginLeft: "-10px"}}
                                    name="sectionID"
                                    id="sectionID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select Section
                                    </option>
                                    <option value="2">A</option>
                                    <option value="3">B</option>
                                    <option value="4">C</option>
                                    <option value="5">D</option>
                                  </select>{" "}
                                </div>
                              </div>
                             
                           <div className="col-md-2">
                              <div className="form-group">
                              <label
                                    htmlFor="s2id_autogen4"
                                    className="control-label"
                                  >
                                     
                                  </label>
                              <input className="mt-2 btn btn-success" type="button" value="Get Report" aria-hidden="true" onClick={handleRenderList} style={{marginLeft:"-10px", position:"relative", top:"20px"}}/>
                              </div>
                               </div>
                            </div>
                          </div>
                          <div>
                          {/* <button onClick={handleRenderList}>Render List</button> */}
                          
<ul>
  {listItems.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
</div>
                          <div className="col-md-2 col-xs-12">
                            <div className="row">
                              <div className="col-md-12 col-xs-12">
                                <div className="form-group">
                                  {/* <button
                                    type="submit"
                                    className="btn btn-success col-md-12 col-xs-12"
                                    style={{ marginTop: "20px" }}
                                  >
                                    Mark
                                  </button> */}
                                </div>
                              </div>
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
        </div>
      </div>
    </>
  );
}

export default Class_report;
