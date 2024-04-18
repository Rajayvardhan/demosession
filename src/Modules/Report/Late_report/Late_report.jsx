import React, {useState, useEffect} from "react";
import { AlignCenter } from "react-feather";
import { Link } from "react-router-dom";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from 'mui/material';
function Late_Report() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
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



  const generateListItems = () => {
    // Generate the list items based on the selected options
    // You can implement your own logic here based on your requirements
    const items = [
    
          
    
        <div className="card-body" style={{marginLeft:"-23px"}}>
        <div className="table-responsive">
          <table className="table display dataTable" id="advance-1">
            <thead>
              <tr>
                <th>sr. no</th>
                <th>Name</th>
                <th>Enroll</th>
                <th>Date</th>
                <th>Enter Time</th>
                <th>Status</th>
               
                 
              </tr>
            </thead>
            <tbody>
          <tr>
                      <td>1</td>
                      <td>Gopal-ji</td>
                      <td>1452</td>
                      <td></td>
                      <td></td>4
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

  // Call the generateListItems function whenever the select box values change
  const handleRenderList = () => {
    if (selectedOption1) {
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
                      Late Report
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
                                    Report Date{" "}
                                  </label>
                                  <input  type="date" value={selectedOption1} style={{marginLeft: "-10px"}}
                                  onChange={handleOption1Change}
                                    name="classesID"
                                    id="classesID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  />
                                    
                                   
                                  
                                </div>
                              </div>
                             
                             
                           <div className="col-md-2">
                              <div className="form-group">
                             
                              <input className="mt-4 btn btn-success" type="button" value="Get Report" aria-hidden="true" onClick={handleRenderList} style={{marginLeft:"-10px"}}/>
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

export default Late_Report;
