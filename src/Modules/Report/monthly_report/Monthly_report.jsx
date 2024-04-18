import React,  { useState }  from "react";
import { Link } from "react-router-dom";
import AddButton from "../../../Components/Buttons/AddButton";
// import TimeTableListing from "./TimeTableListing";

function Monthly_Report() {

  
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');
  const [selectedOption6, setSelectedOption6] = useState('');
  const [selectedOption7, setSelectedOption7] = useState('');
  const [selectedOption8, setSelectedOption8] = useState('');
  const [selectedOption9, setSelectedOption9] = useState('');
  const [selectedOptionA, setSelectedOptionA] = useState('');
  const [selectedOptionB, setSelectedOptionB] = useState('');
  const [selectedOptionC, setSelectedOptionC] = useState('');
  const [selectedOptionD, setSelectedOptionD] = useState('');
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
  const handleOption3Change = (event) => {
    setSelectedOption3(event.target.value);
    
 }; 
 const handleOption4Change = (event) => {
setSelectedOption4(event.target.value);

 }


 const generateListItems = () => {
  // Generate the list items based on the selected options
  // You can implement your own logic here based on your requirements
  const items = [
    

    <div className="card-body" style={{marginLeft:"-7px"}}>
    <div className="table-responsive">
      <table className="table display dataTable" id="advance-1">
        <thead>
          <tr>
            <th>Name</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
            <th>19</th>
            <th>20</th>
            <th>21</th>
            <th>22</th>
            <th>23</th>
            <th>24</th>
            <th>25</th>
            <th>26</th>
            <th>27</th>
            <th>28</th>
            <th>29</th>
            <th>30</th>
            <th>31</th>
          </tr>
        </thead>
        <tbody>
      <tr>
                  <td></td>
                  <td>p</td>
                  <td>p</td>
                  <td>p</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>p</td>
                  <td>p</td>
                  <td>p</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td> 
                  <td>p</td>
                  <td>p</td>
                  <td>p</td>
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
const handleRenderList = () => {
  if (selectedOption1 && selectedOption2  && selectedOption3 && selectedOption4) {
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
            {/* <AddButton name="Listing" path="/students/listing" /> */}
              <div className="card-header pb-0">
                <div className="d-flex">
                  <div className="col-sm-12 add">
                    <h4>Monthly Report</h4>
                    {/* <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/routine/add"
                    > */}
                    <label style={{marginLeft: "122px", position: "relative", top: "-28px", left: "-115px" }}></label>
                        <select  value= {selectedOption1} onChange= {handleOption1Change} Classname= "select1" style={{padding:"6px 10px",borderRadius:"40px",marginleft: "122px", position: "relative", left:"-127px", top: "10px"}} placeholder="select type">
                        <option value="Attendance-Type">Attendance Type</option>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Both">Both</option>
                        </select>
         {selectedOption1 ==="Present" &&
         <div>
        <select  value= {selectedOption2} onChange= {handleOption2Change} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"122px",position:"relative",top:"-33px",left:"60px"}} placeholder="Class">
        <option value="">Class </option>
        <option value="1">1</option>
          <option value="1">2</option>
          <option value="2">3</option>
          <option value="3">4</option>
          <option value="4">5</option>
          <option value="5">6</option>
        </select>
        <select value= {selectedOption3} onChange= {handleOption3Change} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"122px",position:"relative",top: "-33px", left:"-46px"}} placeholder="Section">
        <option value="Section"> Select Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          </select>
          <input type= "Month" value= {selectedOption4} onChange= {handleOption4Change} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"122px",position:"relative",top: "-33px", left:"-153px"}} placeholder="Select Month">
     
           </input>
<input className="mt-4 btn btn-success" type= "button" style={{position: "relative", top:"-47px", marginLeft: "-115px"}} value="View Report" onClick= {handleRenderList}/>
        </div>
        }

{selectedOption1 ==="Absent" &&
<div>
        <select  value= {selectedOption2} onChange= {handleOption2Change} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"122px",position:"relative",top:"-33px",left:"60px"}} placeholder="Class">
        <option value="">Class </option>
        <option value="1">1</option>
          <option value="1">2</option>
          <option value="2">3</option>
          <option value="3">4</option>
          <option value="4">5</option>
          <option value="5">6</option>
        </select>
        <select value= {selectedOption3} onChange= {handleOption3Change} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"122px",position:"relative",top: "-33px", left:"-46px"}} placeholder="Section">
        <option value="Section"> Select Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          </select>
          <input type= "Month" value= {selectedOption4} onChange= {handleOption4Change} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"122px",position:"relative",top: "-33px", left:"-153px"}} placeholder="Select Month">
     
           </input>
<input className="mt-4 btn btn-success" type= "button" style={{position: "relative", top:"-47px", marginLeft: "-115px"}} value="View Report" onClick= {handleRenderList}/>
        </div>
        }
        
        
        {selectedOption1 ==="Both" &&
         <div>
        <select  value= {selectedOption2} onChange= {handleOption2Change} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"122px",position:"relative",top:"-33px",left:"60px"}} placeholder="Class">
        <option value="">Class </option>
        <option value="1">1</option>
          <option value="1">2</option>
          <option value="2">3</option>
          <option value="3">4</option>
          <option value="4">5</option>
          <option value="5">6</option>
        </select>
        <select value= {selectedOption3} onChange= {handleOption3Change} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"122px",position:"relative",top: "-33px", left:"-46px"}} placeholder="Section">
        <option value="Section"> Select Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          </select>
          <input type= "Month" value= {selectedOption4} onChange= {handleOption4Change} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"122px",position:"relative",top: "-33px", left:"-153px"}} placeholder="Select Month">
     
           </input>
<input className="mt-4 btn btn-success" type= "button" style={{position: "relative", top:"-47px", marginLeft: "-115px"}} value="View Report" onClick= {handleRenderList}/>
        </div>
        }
      
                  </div>
                </div>
                <div>
                  <hr style={{marginTop:"2px"}} />
                </div>

<div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                 
                    <div className="tab-content">
                      <div id="all" className="tab-pane active">
                        <div id="hide-table-2">
                        <ul>
{listItems.map((item, index) => (
  <div>
  <h3 style={{marginTop:"7px",marginBottom:"-6px"}}>Present Students</h3>
  <li key={index}>{item}</li>
  </div>
))}
</ul>
                        </div>
                      </div>
                    </div>
                  </table>
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

export default Monthly_Report;



