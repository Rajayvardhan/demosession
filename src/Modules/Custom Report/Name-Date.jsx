import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const NameDate= () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');
  const [selectedOption6, setSelectedOption6] = useState('');
  const [selectedOption7, setSelectedOption7] = useState('');
  const [listItems, setListItems] = useState([]);
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
  const handleOption5Change = (event) => {
    setSelectedOption5(event.target.value);
  };
  const handleOption6Change = (event) => {
    setSelectedOption6(event.target.value);
  };
  const handleOption7Change = (event) => {
    setSelectedOption7(event.target.value);
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
                <th>S no</th>
                <th>Class</th>
                <th>Section</th>
                <th>SR No.</th>
                <th>Student's Name</th>
                <th>Father's Name</th>
                <th>Mobile</th>
                <th>Total Fee</th>
                <th>Rec Fee</th>
                <th>Discount</th>
                <th>Due Fee</th>
               </tr>
            </thead>
            <tbody>
          <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     
                     
                    
                     
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
    };
    const handleError= ()=> {
      alert("Please select the essential options");
    }
    const handleRenderList = () => {
      if (selectedOption1 && selectedOption2 && selectedOption3 && selectedOption4 && selectedOption5 && selectedOption6 && selectedOption7) {
        generateListItems();
      } else {
        {handleError()};
      
      }
    };

    return (
      <>
      <div className="portlet-body mx-3">
        <h4>Report</h4>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        style={{marginTop:"-16px"}}
                      >
                        <div className="row px-3">
                          <div className="col-md-12">
                            <div className="row ">
                                <div class="col-md-2">
                                  <div className="form-group">
                                    <label style={{marginLeft: "10px"}}
                                      for="s2id_autogen1"
                                      className="control-label"
                                    >
                                      Class{" "}
                                    </label>
                                   
                                    <select value= {selectedOption1} onChange={handleOption1Change} style={{marginLeft:"-20px"}}
                                      name="classID"
                                      id="classID"
                                      className="form-control select2 select2-offscreen"
                                      tabindex="-1"
                                    >
                                      <option value="0" selected="selected">
                                        select class
                                      </option>
                                      <option value="6">1</option>
                                      <option value="7">2</option>
                                      <option value="8">3</option>
                                    
                                      
                                    </select>{" "}
                                  </div>
                                </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen2"
                                    className="control-label"
                                    style={{marginLeft:"20px"}}
                                  >
                                    Section{" "}
                                  </label>
                                  <select value={selectedOption2}  onChange={handleOption2Change}  style={{marginLeft: "-10px"}}
                                 
                                    name="sectionID"
                                    id="sectionID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                  <option value="0" >select section</option>
                                  <option value="1" >A</option>
                                  <option value="2" >B</option>
                                  <option value="3" >C</option>
                                  <option value="4" >D</option>
                                  <option value="5" >E</option>
                                  
                                  </select>{" "} 
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Subject
                                  </label>
                                  <select   value={selectedOption3} onChange={handleOption3Change} style={{marginLeft: "-10px"}}
                                    name="subjectnID"
                                    id="subjectID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      select subject
                                    </option>
                                    <option value="0">English</option>
                                    <option value="1">Hindi</option>
                                    <option value="0">Maths</option>
                                    <option value="1">Science</option>
                                  
                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                  Session
                                  </label>
                                  <select  value={selectedOption4} onChange={handleOption4Change} style={{marginLeft: "-10px"}}
                                    name="sesion"
                                    id="sessionID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option>select session</option>
                                    <option>2021-2022</option>
                                    <option>2022-2023</option>
                                    <option>2023-2024</option>
                                    {/* <option value="0" selected="selected">
                                      Select RTE
                                    </option>
                                    <option value="RTE_Students">RTE Students</option>
                                    <option value="NON-RTE_Students">Non RTE Students</option>
                                    <option value="Both">Both</option> */}
                            
                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    SortedBy
                                  </label>
                                  <select type="date"  value={selectedOption5} onChange={handleOption5Change} style={{marginLeft: "-10px"}}
                                    name="sortedBy"
                                    id="sortedBy"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                   {/* <option value="0" selected="selected">
                                      Select Class
                                    </option>
                                    <option value="1">I</option>
                                    <option value="5">II</option>
                                    <option value="6">III</option>
                                    <option value="7">IV</option>
                                    <option value="8">V</option>
                                    <option value="9">VI</option>
                                    <option value="10">VII</option>
                                    <option value="11">VIII</option>
                                    <option value="12">IX</option>
                                    <option value="14">X</option>
                                    <option value="2">NUR</option>
                                    <option value="3">PREP</option>
                                    <option value="4">KG</option>
                                    <option value="15">Dwps</option>
                                    <option value="16">DPWIS,SIKAR</option>
                                    <option value="17">JSP</option>
                                    <option value="18">Euro school</option>
                                    <option value="19">IMP</option> */}
                                 <option>select option</option>
                                 <option>SR No</option>
                                 <option>Date of Birth</option>
                                 <option>Mother's name</option>
                                 <option>Father's name</option>
                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    ThenBy
                                  </label>
                                  <select type="date"  value={selectedOption5} onChange={handleOption5Change} style={{marginLeft: "-10px"}}
                                    name="sortedBy"
                                    id="sortedBy"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                   {/* <option value="0" selected="selected">
                                      Select Class
                                    </option>
                                    <option value="1">I</option>
                                    <option value="5">II</option>
                                    <option value="6">III</option>
                                    <option value="7">IV</option>
                                    <option value="8">V</option>
                                    <option value="9">VI</option>
                                    <option value="10">VII</option>
                                    <option value="11">VIII</option>
                                    <option value="12">IX</option>
                                    <option value="14">X</option>
                                    <option value="2">NUR</option>
                                    <option value="3">PREP</option>
                                    <option value="4">KG</option>
                                    <option value="15">Dwps</option>
                                    <option value="16">DPWIS,SIKAR</option>
                                    <option value="17">JSP</option>
                                    <option value="18">Euro school</option>
                                    <option value="19">IMP</option> */}
                                 <option>select option</option>
                                 <option>SR No</option>
                                 <option>Date of Birth</option>
                                 <option>Mother's name</option>
                                 <option>Father's name</option>
                                  </select>{" "}
                                </div>
                              </div>
                              
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Show Column
                                  </label><br/>
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1"> SR No </label><br/>
  <input type="checkbox"  id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2"> Reg. No.</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Date of Admission
</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Student Name</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Father's Name</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Mother's Name</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Date of Birth</label><br/>
                              
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                  
                                  </label><br/>
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1"> Father's Mobile No
 </label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1"> Mother's Mobile No
 </label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Class</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Section</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Category</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Admission No</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1"> Enroll No</label><br/>
 </div>
  </div>
  <div className="col-md-2">
  <div className="form-group">
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label style= {{marginLeft:"10px"}} className="control-label">Roll No</label><br/>
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">First name</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Middle Name</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Last Name</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Gender</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Board Roll</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Student Mob</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Student Email</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Student Aadhar</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Father's Occupation</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Father's Email</label><br/>
                              </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                  Selected Fee Head 
                                  </label><br/>
 
  
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label htmlFor="checkbox1">Mother's Occupation</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label htmlFor="checkbox1">Mother's Email</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label htmlFor="checkbox1">Mother's Aadhar No</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label htmlFor="checkbox1">Father Annual Income</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label htmlFor="checkbox1">Mother Annual Income</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label htmlFor="checkbox1">Sms Mobile No</label><br/>
</div>
</div>
                           <div className="col-md-2">
                              <div className="form-group">
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Hostel Name</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Guardian Mobile</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">FeeDeposited By</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Counsellor Name</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Session</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Caste</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">	Religion</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Medium</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Rural Or Urban</label>
                              {/* <input className="mt-4 btn btn-success" type="button" value="View" aria-hidden="true" onClick={handleRenderList} style={{marginLeft:"-10px"}}/> */}
                              </div>
                               </div>
                               <div className="col-md-2">
                              <div className="form-group"></div>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Disability Type</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Blood Group</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">House Name</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">	Nationality</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Mother Tongue</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Home Address</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">District</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">State</label><br/>
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label htmlFor="checkbox1">Office Address</label><br/>
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
    </>
  )
}

export default NameDate;
