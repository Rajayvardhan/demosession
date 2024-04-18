import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import request from "../../../Apis/request";
import axios from "axios";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
import { User } from "react-feather";
function Add() {
const [ExamState, setexamState] = useState('');
const [ClassState, setClassSet] = useState([]);
const [SectionState, setSectionState]= useState('');
const [SubjectState, setSubjectState] = useState('');
const [listItems, setListItems] = useState([]);
const [loading, setLoading] = useState(false);
const [Marks, setMarks] = useState({});
const [Students, setStudents] = useState([]);
const [Term, setTerm] = useState('');
const [users, setUsers] = useState([]);
const [inputValue, setInputValue] = useState(''); 
const [saveMark, setSaveMark] = useState({}); 

const handleChange= (e) => {
  const { name, value } = e.target;
  //setInputValue(value);
  setInputValue(value);
  setSaveMark((prevSaveMark) => ({
    ...prevSaveMark,
    [name]: value,
  }));  
}

useEffect(() => { 
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseURL}/mark/addMarks`);
 
    // const  schoolyearID = "10";
// setUsers(response.data.exams)
setUsers( response.data);
console.log("api data", response.data);
} catch (error) {
  // console.error('Error fetching Add api data:', error);
}
};
fetchData();
}, []);
// console.log(users.response.data);
const handleError= ()=> {
  alert("Please select the essential options");
}
const handleOption1Change = (event) => {
  setexamState(event.target.value);
};
const handleOption2Change = (event) => {
  setClassSet(event.target.value);
};
const handleOption3Change = (event) => {
  setSectionState(event.target.value);
};
const handleOption4Change = (event) => {
  setSubjectState(event.target.value);
};



const AddMarkData = async ( e ) => {

  const saveMarkObj = Object.entries(saveMark).map(([mark, value]) => ({
    mark: mark,
    value: value
  }));
  
  const data = {
    "schoolyearID":schoolyearID,
    "classesID":ClassState,
    "examID":ExamState,
    // "subjectID":SubjectState,
    "sectionID": 0,
    "inputs":saveMarkObj
  };

  // const responseData = await axios.post('https://demo.keendroid.in/mark/updateMarks',data);
  e.preventDefault();

  try {
  let response = await request({
    url: `${BaseURL}/mark/updateMarks`,
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG4iLCJwYXNzd29yZCI6IjEyMzQ1NiJ9.vPN0PhthyTuf9l3912NksmpzHXvWjZ7Nywhe22GK2zI',
    }

  });
  alert("Success");
  console.log("update api respose", response);
} catch (error) {
  console.error('Error:', error);
}

}

const generateListItems = async ( event ) => {
  // console.log("second",event.target);
  // console.log("ExamState",ExamState);
  const data = {"schoolyearID":schoolyearID,
  "classesID":ClassState,
  "examID":ExamState,
  // "subjectID":SubjectState,
  "sectionID" : "0"
  };
  // console.log("data",data);
  const responseData = await axios.post(`${BaseURL}/mark/addMarks`,data);
  const student = responseData.data.students;
  setStudents(student);
  const mark = responseData.data.marks;
  const resultArray = {};
  for (const key1 in mark) {
    for (const key2 in mark[key1]) {
      const markValue = mark[key1][key2];
      if (markValue !== null && markValue !== "") {
        resultArray[`mark-1-${key1}-${key2}`] = markValue;
        // resultArray.push({
        //   "mark": `mark-1-${key1}-${key2}`,
        //   "value": markValue
        // });
      }
    }
  }
  console.log("resultArray",resultArray);
  setSaveMark(resultArray);
  

// const items = [
  
// // Add more items based on the selected options
// ];
// setListItems(items);
};
const handleRenderList = (event) => {

  if (ExamState && ClassState && SectionState ) {
    generateListItems(event);
  } else {
    {handleError()};
  }
};
console.log("userData", users);
console.log("students", Students)
console.log("classSet",ClassState);

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
                    <h4 className="caption-subject bold uppercase ml-4">
                      Marks Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{marginTop:"-10px", width:"97%",marginLeft:"16px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        style={{marginTop:"-23px"}}
                      >
                        <div className="row px-3">
                          <div className="col-md-10">
                            <div className="row ">
                                <div class="col-md-3">
                                  <div class="form-group">
                                    <label
                                      for="s2id_autogen1"
                                      class="control-label"
                                    >
                                      Exam{" "}
                                    </label>
                                  <select value = {ExamState} onChange = {handleOption1Change}
                                      name="examID"
                                      id="examID"
                                      class="form-control select2 select2-offscreen"
                                      tabIndex="-1"
                                    >
                                      <option value="">Select Exam</option>
                                       <option value="-1">View All</option>
                                       {users.exams && users.exams.map((item) => (
                                        <option  value={item.examID} >{item.exam}</option>
                                            ))}  
                                     </select>{" "}
                                  </div>
                                </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen2"
                                    className="control-label"
                                  >
                                    Class{" "}
                                  </label>
                                <select value={ClassState} onChange= {handleOption2Change}
                                    name="classesID"
                                    id="classesID"
                                    className="form-control select2 select2-offscreen"
                                    tabIndex="-1"
                                  >
                                   <option>select class</option>
                                    {users.classes && users.classes.map((item) => (
                                        <option value={item.classesID} >{item.classes}</option>
                                           ))}  
                                     </select>{" "}
                                    </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label className="control-label">
                                    Section
                                  </label>
                                  <select value={SectionState} onChange= {handleOption3Change}
                                    name="sectionID"
                                    id="sectionID"
                                    className="form-control select2 select2-offscreen"
                                    tabIndex="-1"
                                  >
                                    <option value="" selected="selected">
                                      Select Section
                                    </option>
                                    {users.sections && users.sections.map((item) => (
                                        <option value={item.sectionID} >{item.section}</option>
                                           ))} 
                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen4"
                                    className="control-label"
                                  >
                                    Subject{" "}
                                  </label>
                                  <select value= {SubjectState} onChange= {handleOption4Change}
                                    name="subjectID"
                                    id="subjectID"
                                    className="form-control select2 select2-offscreen"
                                    tabIndex="-1"
                                  >
                                    <option value="" selected="selected">
                                      Select Subject
                                    </option>
                      {users.subjects && users.subjects.map((item) => (
                                        <option  value={item.subjectID} >{item.subject}</option>
                                         ))} 
                                 </select>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-12">
                            <div className="row">
                              <div className="col-md-12 col-xs-12">
                                <div className="form-group">
                                  <input
                                    type="button"
                                    value="View"
                                    className="btn btn-success col-md-12 col-xs-12"
                                    style={{ marginTop: "28px" }}
                                    onClick={handleRenderList}
                                  >
                                 </input>
                                </div>
                        </div>
                          </div>
                          
</div>
  <div>
                              {/* <div className="col-md-3">
                                <div className="form-group">
                                  <label className="control-label">
                                    Select Term
                                  </label>
                                  <select value={SectionState} onChange= {handleOption3Change}
                                    name="sectionID"
                                    id="sectionID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="" selected="selected">
                                      Select Term
                                    </option>
                                    {users.sections && users.sections.map((item) => (
                                  <option value={item.sectionID} >{item.section}</option>
                                           
                ))} 
                                  </select>{" "}
                                </div>
                              </div> */}
                          {/* <button onClick={handleRenderList}>Render List</button> */}
{Students && Students.length > 0 ? (                          
<ul>
 <li><div className="card-body" style={{marginLeft:"-10px"}}>
  <div className="table-responsive">
    <table className="table display dataTable" id="advance-1">
      <thead>
        <tr>
          <th>sr. no</th>
          <th>Name</th>
          <th>Roll</th>
          {users.subjects && users.subjects.map((item) => (
                                        <th>{item.subject}</th>
                                           ))} 
          {/* <th>English(100)</th>
          <th>HINDI(100)</th>
          <th>MATHS(100)</th>
          <th>EVS(100)</th>
          <th>Science(100)</th>
          <th>SOCIAL STUDIES(100)</th>
          <th>SANSKRIT(100)</th>
          <th>test(100)</th>
          <th>test(100)</th> */}
         </tr>
      </thead>
      <tbody>
        {Students && Students.map((item, index) => (
  <tr>
  <td>{index+1}</td>
               <td>{item.name}</td>
                <td>{item.roll}</td>
                {users.subjects && users.subjects.map((subject_item) => (
                  <td><input onChange={(e)=>handleChange(e)} name={`mark-1-${item?.studentID}-${subject_item?.subjectID}`} value={saveMark[`mark-1-${item?.studentID}-${subject_item?.subjectID}`] } className="form-control" style={{width:"60px"}}/></td>
                 ))} 
               {/* <Link to="/marks/assigngrade/edit"><i className="fa fa-edit" style={{fontSize:"18px"}}></i> </Link> */}
                  {/* <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link> */}
                  </tr>
                  ))} 
                  </tbody>
     </table>
</div>
<div className="form-group">
                                  <input
                                    type="button"
                                    onClick= {AddMarkData}
                                    value="Add"
                                    className="btn btn-success col-md-3 col-xs-12"
                                    style={{ marginTop: "20px" }}>
                                       </input>
                                </div>
</div>
</li>
</ul>
):(<div style={{textAlign:"center"}} className="form-group"><ul><li>No Record Found</li></ul></div>)}
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
