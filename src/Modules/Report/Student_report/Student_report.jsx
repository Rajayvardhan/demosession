import React,  { useState }  from "react";
import { Link } from "react-router-dom";
import AddButton from "../../../Components/Buttons/AddButton";
// import TimeTableListing from "./TimeTableListing";

function Student_Report() {
  const [selectedReportFor, setSelectedReportFor] = useState('');
  const [selectedBlood, setSelectedBlood] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');
  const [selectedHostel, setSelectedHostel] = useState('');
  const [Campus, setSelectedCampus] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedclasschange, setSelectedClassChange] = useState('');
 
  const handleReportChange = (event) => {
    setSelectedReportFor(event.target.value);
  };
  const handleBloodChanges = (event) => {
    setSelectedBlood(event.target.value);
    
};

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    
 };
 const handleGenderChange = (event) => {
  setSelectedGender(event.target.value);
  
};

 const handleTransportChange = (event) => {
  setSelectedTransport(event.target.value);
  
};
const handleHostelChange = (event) => {
  setSelectedHostel(event.target.value);
  };

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
    };
    const handleClassChange = (event) => {
    setSelectedClassChange(event.target.value);
    // alert(selectedclasschange);
      };
//selectedGender
const handleSectionChange = (event) => {
  setSelectedSection(event.target.value);
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
                  <div className="col-sm-12 add" style={{marginLeft:"-11px",marginTop:"11px"}}>
                    {/* <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/routine/add"
                    > */}
                    <label>Report For</label>
                        <select value= {selectedReportFor} onChange={handleReportChange} className= "select1" style={{padding:"6px 10px",borderRadius:"40px",marginleft: "10px"}} placeholder="select type">
                        <option value="Report-Type">Report For</option>
                        <option value="Blood-Group">Blood Group</option>
                        <option value="Country">Country</option>
                        <option value="Gender">Gender</option>
                        <option value="Transport">Transport</option>
                        <option value="Hostel">Hostel</option>
                    </select>
         {selectedReportFor ==="Blood-Group" &&
         <div>
        <select value= {selectedBlood} onChange = {handleBloodChanges} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"98px",position:"relative",top:"-32px",left:"134px"}} placeholder="Blood Group">
        <option value="Blood_group">Blood Group</option>
        <option value="A">A</option>
          <option value="B">A+</option>
          <option value="A-">A-</option>
          <option value="B">B</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
        </select>
        <select value={Campus} onChange = {handleCampusChange} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"111px",position:"relative",top: "-34px", left:"32px"}} placeholder="Blood Group">
        <option value="option5">School/Class</option>
          <option value="School">School</option>
          <option value="Class">Class</option>
</select>
        </div>
        }


        {selectedReportFor === "Blood-Group" && Campus === "Class"  &&
         <div>
        <select value={selectedclasschange} onChange ={handleClassChange} className= "select1" style={{padding:"6px 15px",borderRadius:"40px",marginLeft:"508px", margintop: "-98px", left:"-1px", position:"relative",top: "-65px", }} placeholder="Select Class">
        <option value= "select_class"> Select Class</option>
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
     
        <select value= {selectedSection} onChange= {handleSectionChange} className= "select1" style={{padding:"6px 27px",borderRadius:"40px",marginLeft:"460px", margintop: "-98px", left:"190px", position:"relative",top: "-95px", }} placeholder=" Section">
        <option value="select_section">Select Section</option>
        <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      </div>
        
        
        }

        {selectedReportFor === "Country" &&
         <div>
        <select value= {selectedCountry} onChange= {handleCountryChange} className= "select1" style={{ padding:"6px 4px",borderRadius:"40px",marginLeft:"94px",position:"relative",top:"-33px",left:"129px"}} placeholder="Blood Group">
        <option value="select_country">Please Select</option>
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
          <option value="Indonesia">Indonesia</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Afganistan">Afganistan</option>
        </select>
        <select value= {Campus} onChange= {handleCampusChange} className= "select1" style={{ padding:"6px 5px",borderRadius:"40px",marginLeft:"107px",position:"relative",top: "-34px", left:"32px"}} placeholder="Blood Group">
        
        <option value="option5">School/Class</option>
          <option value="School">School</option>
          <option value="Class">Class</option>
      
        </select>
      
        </div>
        }
        {selectedReportFor === "Country" && Campus ==="Class"  &&
         <div>
      <select value={selectedclasschange} onChange ={handleClassChange} className= "select1" style={{padding:"6px 15px",borderRadius:"40px",marginLeft:"508px", margintop: "-98px", left:"-1px", position:"relative",top: "-65px", }} placeholder="Select Class">
        <option value= "select_class"> Select Class</option>
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
     
        <select value= {selectedSection} onChange= {handleSectionChange} className= "select1" style={{padding:"6px 27px",borderRadius:"40px",marginLeft:"460px", margintop: "-98px", left:"190px", position:"relative",top: "-95px", }} placeholder=" Section">
        <option value="select_section">Select Section</option>
        <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      </div>
        
        }
        
        
        {selectedReportFor ==="Gender" &&
         <div>
        <select value= {selectedGender} onChange= {handleGenderChange}  className= "select1" style={{ padding:"6px 6px",borderRadius:"40px",marginLeft:"94px",position:"relative",top:"-33px",left:"129px"}} placeholder="Blood Group">
        <option value="select_gender">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
         
        </select>
        <select value= {Campus} onChange= {handleCampusChange} className= "select1" style={{ padding:"6px 9px",borderRadius:"40px",marginLeft:"106px",position:"relative",top: "-34px", left:"32px"}} placeholder="Blood Group">
        <option value="option5">School/Class</option>
      
          <option value="School">School</option>
          <option value="Class">Class</option>
        </select>
        
        </div>
        }


        { selectedReportFor === "Gender" && Campus ==="Class"  &&
         <div>
         <select value={selectedclasschange} onChange ={handleClassChange} className= "select1" style={{padding:"6px 15px",borderRadius:"40px",marginLeft:"508px", margintop: "-98px", left:"-1px", position:"relative",top: "-65px", }} placeholder="Select Class">
        <option value= "select_class"> Select Class</option>
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
     
        <select value= {selectedSection} onChange= {handleSectionChange} className= "select1" style={{padding:"6px 27px",borderRadius:"40px",marginLeft:"460px", margintop: "-98px", left:"190px", position:"relative",top: "-95px", }} placeholder=" Section">
        <option value="select_section">Select Section</option>
        <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      </div>}

      {selectedReportFor ==="Transport" &&
         <div>
        <select value= {selectedTransport} onChange= {handleTransportChange}  className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"96px",position:"relative",top:"-33px",left:"129px"}} placeholder="Blood Group">
        <option value="">Select Route</option>
          <option value="Route-1">Route-1</option>
          <option value="Route-2">Route-2</option>
          <option value="Route-3">Route-3</option>
          <option value="Route-4">Route-4</option>
          <option value="Route-5">Route-5</option>
          <option value="Route-6">Route-6</option>
          <option value="Route-7">Route-7</option>
          <option value="Route-8">Route-8</option>
         
        </select>
        <select value= {Campus} onChange= {handleCampusChange} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"109px",position:"relative",top: "-34px", left:"32px"}} placeholder="Blood Group">
        <option value="option5">School/Class</option>
      
          <option value="School">School</option>
          <option value="Class">Class</option>
        </select>
        
        </div>
        }


        { selectedReportFor === "Transport" && Campus ==="Class"  &&
         <div>
         <select value={selectedclasschange} onChange ={handleClassChange} className= "select1" style={{padding:"6px 15px",borderRadius:"40px",marginLeft:"508px", margintop: "-98px", left:"-1px", position:"relative",top: "-65px", }} placeholder="Select Class">
        <option value= "select_class"> Select Class</option>
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
     
        <select value= {selectedSection} onChange= {handleSectionChange} className= "select1" style={{padding:"6px 27px",borderRadius:"40px",marginLeft:"460px", margintop: "-98px", left:"190px", position:"relative",top: "-95px", }} placeholder=" Section">
        <option value="select_section">Select Section</option>
        <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      </div>}


      {selectedReportFor ==="Hostel" &&
         <div>
        <select value= {selectedHostel} onChange= {handleHostelChange}  className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"93px",position:"relative",top:"-33px",left:"129px"}} placeholder="Blood Group">
        <option value="select_hostel">Select Hostel</option>
          <option value="Hostel-1">Hostel-1</option>
          <option value="Hostel-2">Hostel-2</option>
          <option value="Hostel-3">Hostel-3</option>
          <option value="Hostel-4">Hostel-4</option>
          <option value="Hostel-5">Hostel-5</option>
          <option value="Hostel-6">Hostel-6</option>
          <option value="Hostel-7">Hostel-7</option>
          <option value="Hostel-8">Hostel-8</option>
         
        </select>
        <select value= {Campus} onChange= {handleCampusChange} className= "select1" style={{ padding:"6px 10px",borderRadius:"40px",marginLeft:"107px",position:"relative",top: "-34px", left:"32px"}} placeholder="Blood Group">
        <option value="option5">School/Class</option>
      
          <option value="School">School</option>
          <option value= "Class">Class</option>
        </select>
        
        </div>
        }


        { selectedReportFor === "Hostel" && Campus === "Class"  &&
         <div>
        <select value={selectedclasschange} onChange ={handleClassChange} className= "select1" style={{padding:"6px 15px",borderRadius:"40px",marginLeft:"508px", margintop: "-98px", left:"-1px", position:"relative",top: "-65px", }} placeholder="Select Class">
        <option value= "select_class"> Select Class</option>
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
     
        <select value= {selectedSection} onChange= {handleSectionChange} className= "select1" style={{padding:"6px 27px",borderRadius:"40px",marginLeft:"460px", margintop: "-98px", left:"190px", position:"relative",top: "-95px", }} placeholder=" Section">
        <option value="select_section">Select Section</option>
        <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        {/* </select> */}
      </div>}
           
                   {/* {selectedOption3 ==="Start-Time" && (
        <div>
        <label style={{marginLeft:"122px",position:"relative",top:"-66px",left:"129px"}}>End Time</label>
        <select onChange="" className= "select3" style={{padding:"6px 30px",borderRadius:"40px",marginLeft:"10px",position:"relative",top:"-32px"}}  placeholder="select type">
                        <option value="End-Time">End Time</option>
                        <option value="End-Time">10:00 PM</option>
                        <option value="End-Time">11:00 PM</option>
                    </select> 
                    </div>)}  */}

                    {/* {selectedStartTime ==="Start-Time" && (
        <div>
        <label style={{marginLeft:"122px",position:"relative",top:"-66px",left:"129px"}}>End Time</label>
        <select onChange="" className= "select3" style={{padding:"6px 30px",borderRadius:"40px",marginLeft:"10px",position:"relative",top:"-32px"}}  placeholder="select type">
                        <option value="End-Time">End Time</option>
                        <option value="End-Time">10:00 PM</option>
                        <option value="End-Time">11:00 PM</option>
                    </select> 
                    </div>)} */}

        {/* {renderComponent()} */}
{/* {showSecondSelect === 'option3' &&  } */}
{/* {showSecondSelectt && (
        <select className= "select2" style={{padding:"6px 30px",borderRadius:"40px",marginLeft:"8px"}} placeholder="Start Time" onChange={handleSelectChanges}>
        <option value="Time-base">Start Time</option>
          <option value="option3">10:00 AM</option>
          <option value="option4">10:50AM</option>
        </select>)} */}
        
                  </div>
                </div>
                <div>
                  <hr />
                </div>

<h5 style={{marginBottom:"10px"}}>Student Report</h5>
</div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student_Report;
// import React, { useState } from 'react';

// function TtimeTable() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [listingData, setListingData] = useState([]);

//   // Fetch listing data based on the selected option
//   const fetchListingData = async () => {
//     try {
//       // Perform API call or data retrieval here based on the selected option
//       // Update the listingData state variable with the fetched data
//       const data = await fetchListingData(selectedOption);
//       setListingData(data);
//     } catch (error) {
//       console.error('Error fetching listing data:', error);
//     }
//   };

//   // Handle option selection event
//   const handleOptionSelect = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedOption(selectedValue);
//   };

//   return (
//     <div>
//       {/* Option selection mechanism */}
//       <select onChange={handleOptionSelect}>
//         <option value="">Select an option</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         {/* Add more options as needed */}
//       </select>

//       {/* Button to fetch listing data */}
//       <button onClick={fetchListingData}>Fetch Listing Data</button>

//       {/* Display the listing */}
//       <ul>
//         {listingData.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TtimeTable;