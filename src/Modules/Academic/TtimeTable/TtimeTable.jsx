import React,  { useState }  from "react";
import { Link } from "react-router-dom";
import AddButton from "../../../Components/Buttons/AddButton";
import TimeTableListing from "./TimeTableListing";

function TtimeTable() {
    const [showSecondSelect, setShowSecondSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
const handleFirstSelectChange = (event) => {
        const selectedValue = event.target.value;
        setShowSecondSelect(selectedValue === 'Teacher-name');
     };
const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
      };
      const renderComponent = () => {
        switch (selectedOption) {
          case 'component1':
            return <TimeTableListing />;
          case 'component2':
            // return <Component2 />;
          default:
            return null;
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
                  <div className="col-sm-8 add">
                    {/* <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/routine/add"
                    > */}
                        <select onChange={handleFirstSelectChange} className= "select1" style={{padding:"6px 10px",borderRadius:"40px",marginleft: "10px"}} placeholder="select type">
                        <option value="Report-Type">Report Type</option>
                        <option value="Teacher-name">Select Teacher Name</option>
                        <option value="">Time Base</option>
                    </select>
         {showSecondSelect && (
        <select className= "select1" style={{padding:"6px 30px",borderRadius:"40px",marginLeft:"8px"}} placeholder="Teacher Name" onChange={handleSelectChange}>
        <option value="option5">Teacher Name</option>
          <option value="option3">Gopal ji</option>
          <option value="option4">mahesh ji</option>
        </select>)}
        {/* {renderComponent()} */}
{/* {showSecondSelect === 'option3' &&  } */}
        
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>Time Table</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <div className="tab-content">
                      <div id="all" className="tab-pane active">
                        <div id="hide-table-2">
                          <table id="table" className="table table-striped ">
                            <tbody>
                              <tr>
                                <td>MONDAY</td>
                              </tr>
                              <tr>
                                <td>TUESDAY</td>
                              </tr>
                              <tr>
                                <td>WEDNESDAY</td>
                              </tr>
                              <tr>
                                <td>THURSDAY</td>
                              </tr>
                              <tr>
                                <td>FRIDAY</td>
                              </tr>
                              <tr>
                                <td>SATURDAY</td>
                              </tr>
                              <tr>
                                <td>SUNDAY</td>
                              </tr>{" "}
                            </tbody>
                          </table>
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
    </>
  );
}

export default TtimeTable;
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