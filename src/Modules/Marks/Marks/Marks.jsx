import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import AddButton from "../../../Components/Buttons/AddButton"; 
import request from "../../../Apis/request";
import axios from "axios";
import { BaseURL } from '../../../api/DataApis';

function Marks() {
  const [ classs, setClasses ] = useState([]);
  // const [classs, setClasses] = useState([]);
  const [selectClassid, setSelectClassid] = useState("");
  const [loading, setLoading] = useState(false);
  const [ExamState, setExamState] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`${BaseURL}/classes/getClasses`)
      .then((resp) => {
        setClasses(resp.data.classes);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
 return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
            <div className="card-header pb-0">
                <div className="d-flex">
              {/* <div className="col-sm-4 add"> */}
              {/* <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" style={{width:'auto'}} to="/marks/marksadd"><i className="fa fa-plus"></i>  Add a Mark  </Link> */}
              <AddButton name="Add Marks" path="/marks/marksadd" />
              {/* <AddButton name="Add Marks" path="/marks/marksapitest" /> */}
              <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
                    <select
                      onChange=""
                      className="form-control text-center" style={{height:"34px", marginTop:"10px", borderRadius:"32px"}} >
                      <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      return(
                      { classs.map((i) => {
                      {/* {classes.map((classes) => { */}
                          return (
                          <option
                          key={i.classesID}
                          value={i.classesID}>
                            {i.classes}
                          </option>
                        );
                           } )}
                            {/* {classes.classes} */}
                          
                            {/* }) }; */}
                      
                    </select>
                  {/* </div> */}
             
             
              </div>
              </div>
              <div>
                <hr />
              </div>
                <h5>All Mark</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {students &&
                        students.map((u, i) => { */}
                          {/* return ( */}
                            <tr>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{}</td>
                              <td>
                                <Link to="/marks/edit"><i className="fa fa-edit" style={{fontSize:"18px"}}></i> </Link>
                                <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link>
                              </td>
                            </tr>
                          {/* ); */}
                        {/* })} */}
                    </tbody>
                    
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Marks;
