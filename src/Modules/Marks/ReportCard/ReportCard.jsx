import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PrintableComponent from './PrintableComponent';
import jsPDF from 'jspdf';

const ReportCard = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [listItems, setListItems] = useState([]);

  const navigate = useNavigate();

  const handlePrintPDF = () => {
    // Add code to generate and display the PDF
 const pdf = new jsPDF();
  pdf.text(
<h1>hello</h1>
);
    pdf.save('document.pdf'); 
};

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/students/listing');
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
const Certificate = ({ recipientName, courseName, completionDate })=> {
<div className="certificate">
    <h1>Certificate of Completion</h1>
    <p>This is to certify that</p>
    <p><span class="recipient-name">{recipientName}</span></p>
    <p>has successfully completed the course</p>
    <p><span className="course-name">{courseName}</span></p>
    <p>on <span className="completion-date">{completionDate}</span></p>
</div>
}

       const generateListItems = () => {
        // Generate the list items based on the selected options
        // You can implement your own logic here based on your requirements
        const items = [
           <div className="card-body" style={{marginLeft:"-50px"}}>
          <div className="table-responsive" style={{marginLeft:"28px"}}>
            <table className="table display dataTable" id="advance-1">
              <thead>
                <tr>
                  <th><input type="checkbox" style={{marginLeft:"-8px"}} />select all</th>
                  <th>Sr No</th>
                  <th>Student Name</th>
                  <th>Father Name</th>
                  <th>Action</th>
                  </tr>
              </thead>
              <tbody>
            <tr>
                        <td><input value= {selectedOption4}type = "checkbox"/></td>
                        <td>1</td>
                        <td>Gopal Choudhary</td>
                        <td>Mr Hanuman choudhary</td>
                        <td>     
                        <button onClick={handlePrintPDF}>View as PDF</button>
                        <PrintableComponent/>
                          <Link to="/marks/assigngrade/edit"><i className="fa fa-edit" style={{fontSize:"18px"}}></i> </Link>
                          <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link>
                       
                                </td>
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
        if (selectedOption1 && selectedOption2 && selectedOption3) {
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
                    Report Card
                  </h4>
                </div>
              </div>
              <div className="portlet-body mx-3">
                <hr  style={{marginTop:"-10px"}}/>
                <div className="row">
                  <div className="col-sm-12">
                    <form
                      className="form-horizontal"
                      role="form"
                      method="post"
                      style={{marginTop:"-40px"}}
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
                                    {" "}
                                  </label>
                                 
                                  <select value={selectedOption1} onChange={handleOption1Change} style={{marginLeft:"-20px"}}
                                    name="examID"
                                    id="examID"
                                    className="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                 >
                                 <option>Select Term</option>
                                 <option>first</option>
                                 <option>Second</option>
                                </select>
                                  </div>
                              </div>
                           <div className="col-md-2">
                              <div className="form-group">
                                <label style= {{marginLeft:"10px"}} className="control-label">
                                 
                                </label>
                                <select value={selectedOption2} onChange={handleOption2Change} style={{marginLeft: "-10px"}}
                                  name="sectionID"
                                  id="sectionID"
                                  className="form-control select2 select2-offscreen"
                                  tabindex="-1">
                                  <option value="0" selected="selected">
                                    Select Class
                                  </option>
                                  <option value="2">1</option>
                                  <option value="3">2</option>
                               </select>{" "}
                              </div>
                              
                            </div>
                            <div className="col-md-2">
                              <div className="form-group">
                                <label style= {{marginLeft:"10px"}} className="control-label">
                                 
                                </label>
                                <select value={selectedOption3} onChange={handleOption3Change} style={{marginLeft: "-10px"}} name="sectionID" id="sectionID" className="form-control select2 select2-offscreen"
                                  tabindex="-1"
                                >
                                  <option value="0" selected="selected">
                                    Select Section
                                  </option>
                                  <option value="A">A</option>
                                  <option value="B">B</option>
                                  <option value="C">C</option>
                                  <option value="D">D</option>
                               </select>{" "}
                              </div>
                              
                            </div>
                         <div className="col-md-2">
                            <div className="form-group">
                            <label htmlFor="s2id_autogen4" className="control-label"></label>
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
                                 <button onClick={navigateToContacts} className="btn btn-success col-md-12 col-xs-12" style={{ marginTop: "20px" }}>View</button> 
                                  
                              {/*  <input type="button" className="mt-4 btn btn-success"  onClick={navigateToContacts} value="View" aria-hidden="true" />*/
                                }
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
export default ReportCard;
