import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from 'mui/material';
function FeeAccountRegister() {
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
              <th>sr. no</th>
              <th>Class</th>
              <th>Section</th>
              <th>SR</th>
              <th>Student Name</th>
              <th>Father Name</th>
              <th>Apr</th>
              <th>May</th>
              <th>June</th>
              <th>July</th>
              <th>August</th>
              <th>September</th>
              <th>October</th>
               <th>November</th>
               <th>December</th>
              <th>January</th>
              <th>February</th>
               <th>March</th>
               <th>Total</th>
            </tr>
          </thead>
          <tbody>
        <tr>
                    <td>1</td>
                    <td>Gopal-ji</td>
                    <td>1452</td>
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                   {/* <Link to="/marks/assigngrade/edit"><i className="fa fa-edit" style={{fontSize:"18px"}}></i> </Link> */}
                      {/* <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link> */}
                    </tr>
                  {/* <input className="mt-4 btn btn-success"  type="submit" value="Add Marks"/> */}
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

  // Call the generateListItems function whenever the select box values change
  const handleRenderList = () => {
    if (selectedOption1 && selectedOption2) {
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
                    Fee Account Register
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
                                  <select value={selectedOption1}  onChange={handleOption1Change} style={{marginLeft: "-10px"}}
                                 
                                    name="classesID"
                                    id="classesID"
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
                                  <select value={selectedOption2} onChange={handleOption2Change} style={{marginLeft: "-10px"}}
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
                                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{marginLeft:"3px"}}/>
                                    <label for="checkbox1"> ShowMainFee</label><br/>
                                  </div>
                                  </div>
                                  <div className="col-md-2">
                              <div className="form-group">
                              <label htmlFor="s2id_autogen4" className="control-label">
                                     </label>
                                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1" style={{marginLeft:"24px",position:"relative",top:"-22px"}}> ShowVehicleFee</label><br/>
                                  </div>
                                  </div>
                                  <div className="col-md-2">
                              <div className="form-group">
                              <label htmlFor="s2id_autogen4" className="control-label">
                                     </label>
                                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="checkbox1" style={{marginLeft:"24px",position:"relative",top:"-21px"}}> ShowHostelFee</label><br/>
                                  </div>
                                  </div>
                           <div className="col-md-2">
                              <div className="form-group">
                              <label
                                    htmlFor="s2id_autogen4"
                                    className="control-label"
                                  >
                                     
                                  </label>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeeAccountRegister;
