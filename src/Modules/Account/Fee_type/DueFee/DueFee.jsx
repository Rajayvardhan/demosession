import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const DueFee = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');
  const [selectedOption6, setSelectedOption6] = useState('');
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
      if (selectedOption1 && selectedOption2 && selectedOption3 && selectedOption4 && selectedOption5 && selectedOption6) {
        generateListItems();
      } else {
        {handleError()};
      
      }
    };

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
            Account
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Due Fee Report
          </li>
        </ol>
      </nav>
     
      <div className="portlet-body mx-3">
      <h3>Due Fee report</h3>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
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
                                      Session{" "}
                                    </label>
                                   
                                    <select value= {selectedOption1} onChange={handleOption1Change} style={{marginLeft:"-20px"}}
                                      name="examID"
                                      id="examID"
                                      className="form-control select2 select2-offscreen"
                                      tabindex="-1"
                                    >
                                      <option value="0" selected="selected">
                                        Select Session
                                      </option>
                                      <option value="6">2021-2022</option>
                                      <option value="7">2022-2023</option>
                                      <option value="8">2023-2024</option>
                                    
                                      
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
                                    Due Date{" "}
                                  </label>
                                  <input type="date" value={selectedOption2}  onChange={handleOption2Change}  style={{marginLeft: "-10px"}}
                                 
                                    name="classesID"
                                    id="classesID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    {/* */}
                                  </input>{" "} 
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Gender
                                  </label>
                                  <select   value={selectedOption3} onChange={handleOption3Change} style={{marginLeft: "-10px"}}
                                    name="sectionID"
                                    id="sectionID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select Gender
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="Female">Female</option>
                                  
                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    RTE
                                  </label>
                                  <select   value={selectedOption4} onChange={handleOption4Change} style={{marginLeft: "-10px"}}
                                    name="sectionID"
                                    id="sectionID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select RTE
                                    </option>
                                    <option value="RTE_Students">RTE Students</option>
                                    <option value="NON-RTE_Students">Non RTE Students</option>
                                    <option value="Both">Both</option>
                            
                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Class
                                  </label>
                                  <select   value={selectedOption5} onChange={handleOption5Change} style={{marginLeft: "-10px"}}
                                    name="sectionID"
                                    id="sectionID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                   <option value="0" selected="selected">
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
                                    <option value="19">IMP</option>
                                  </select>{" "}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Section
                                  </label>
                                  <select   value={selectedOption6} onChange={handleOption6Change} style={{marginLeft: "-10px"}}
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
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Show Column
                                  </label><br/>
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1"> Hide TC Issued </label><br/>
  <input type="checkbox"  id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2">  Hide Deactive Student</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> Show Old/New</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3">zero Amount</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Negative Amount</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> Show Reminder</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> Show Prev Due</label><br/>
                              
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Student Type
                                  </label><br/>
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1"> Day Scholar </label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1"> Use Transport </label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1"> Hosteller </label><br/>
 
 
                              
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div className="form-group">
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Fee Type
                                  </label><br/>
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Main Fee</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Vehicle Head</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Hostel-Fee Head</label><br/>
 
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Receipt Details</label><br/>
                              
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                <input type="radio" id="html" name="fav_language" value="HTML"/>
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Summary
                                  </label><br/>
                                  <input type="radio" id="html" name="fav_language" value="HTML"/>
                                  <label style= {{marginLeft:"10px"}} className="control-label">
                                    Detailed
                                  </label><br/>
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Main Fee</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Vehicle Head</label><br/>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Hostel-Fee Head</label><br/>
 
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1">Receipt Details</label><br/>
                              
                                </div>
                              </div>
                           
                           <div className="col-md-2">
                              <div className="form-group">
                            <input className="mt-4 btn btn-success" type="button" value="View" aria-hidden="true" onClick={handleRenderList} style={{marginLeft:"-10px"}}/>
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
    </>
  )
}

export default DueFee;
