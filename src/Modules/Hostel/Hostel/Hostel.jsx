import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
import request from "../../../Apis/request";


function Hostel() {
  const [HostelData, setHostelData] = useState([]);
  
  const [loading, setLoading] = useState(false);
  // const [selectedHostelType, setSelectedhoste] = useState("");
  



  useEffect(() => {
  const FetchHostelData = async () => {
    setLoading(true);

    const url = `${BaseURL}/hostel/getHostels`
    

    try {
      const res = await request({
        url: url,
        method: "POST",
        data: JSON.stringify({
          schoolyearID: schoolyearID,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      console.log("res", res);

      if (res && res.hostels) {
        setHostelData(res.hostels);
}

    

      
    
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };


  FetchHostelData();
  }, []);

  console.log("HostelData", HostelData);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <div className="col-sm-4 add">
                  <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/hostel/add"
                    >
                      <i className="fa fa-plus"></i> Add Hostel
                    </Link>
                    {/* <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/marks/add"
                    >
                      <i className="fa fa-plus"></i> Add a Mark{" "}
                    </Link> */}
                  </div>
                </div>
                <div>
              
                  <hr />
                  <h5>All Hostels</h5>
                </div>
               
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Note</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {HostelData &&
                        HostelData.map((u, i) => { 
                       return (
                      <tr>
                        <td>{i+1}</td>
                        <td>{u?.name}</td>
                        <td>{u?.htype}</td>
                        <td>{u?.address}</td>
                        <td>{u?.note}</td>
                        <td>
                        {/* <Link to="/transportmember/add">
                            <i
                              className="fa fa-plus"
                              style={{ fontSize: "18px" }}
                            ></i>{" "}
                          </Link> */}
                          <Link to="">
                            <i
                              className="fa fa-check-square-o"
                              style={{ fontSize: "18px" }}
                            ></i>{" "}
                          </Link>
                          <Link to="">
                            <i
                              className="fa fa-edit"
                              style={{ fontSize: "18px" }}
                            ></i>{" "}
                          </Link>
                          <Link>
                            {" "}
                            <i
                              className="fa fa-trash"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </Link>
                        </td>
                      </tr>
                       ); 
                     })}
                    </tbody>
                   
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

export default Hostel;
