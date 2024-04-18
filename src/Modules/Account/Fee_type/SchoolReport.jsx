import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const SchoolReport = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleError= ()=> {
    alert("Please select the essential options");
  }
     
  const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
      };
    
      const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
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
                  <th>Cheque Bounce</th>
                  <th>Admission fee</th>
                  <th>Tution Fees</th>
                  <th>Transport Fees</th>
                  <th>Total</th>
                  
                   
                </tr>
              </thead>
              <tbody>
            <tr>
                        <td>1</td>
                        <td>3</td>
                        <td>Yes</td>
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
                    School Report
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
                              <div class="col-md-2">
                                <div className="form-group">
                                  <label style={{marginLeft: "10px"}}
                                    for="s2id_autogen1"
                                    className="control-label"
                                  >
                                    Session{" "}
                                  </label>
                                 
                                  <select value={selectedOption1} onChange={handleOption1Change} style={{marginLeft:"-20px"}}
                                    name="SectionID"
                                    id="SectionID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                 >
                                 <option value="0">Select Session</option>
                                 <option value="1">2019-2020</option>
                                 <option value="2">2020-2021</option>
                                 <option value="3">2021-2022</option>
                                 <option value="4">2023-2023</option>
                
                                 </select>
                                  </div>
                              </div>
                           
                           
                         <div className="col-md-2">
                            <div className="form-group">
                            <label
                                  htmlFor="s2id_autogen4"
                                  className="control-label"
                                >
                                   
                                </label>
                            <input className="mt-2 btn btn-success" type="button" value="View Report" aria-hidden="true" onClick={handleRenderList} style={{marginLeft:"-10px"}}/>
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
  )
}

export default SchoolReport;