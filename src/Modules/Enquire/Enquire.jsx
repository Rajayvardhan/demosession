import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import request from "../../Apis/request";
import {  useNavigate, useLocation, useParams } from "react-router-dom";
import { BaseURL, schoolyearID } from '../../api/DataApis';

function Enquire() {
  const { enquiryID, classesID } = useParams();
  const [classes, setClasses] = useState([]);
  const [studentss, setStudents] = useState([]);
  const [selectClassid, setSelectClassid] = useState("");
  const [loading, setLoading] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [EnquiryStatus, setEnquiryStatus] = useState('');
  const [EnquiryyData, setEnquiryyData] = useState({});


  const handleToggle = () => { 
    if( studentss.status=1)
    setToggled(isToggled);
     else
     setToggled (!isToggled);
  };

  const SelectClassHandler = (e) => {
   setSelectClassid(e.target.value);
    fetchData( e.target.value );

  }

  const fetchData = async ( classesID ) => {
    const apiEndpoint = `${BaseURL}/enquiry/getEnquiries`;

  setLoading(true);

    var url = apiEndpoint;
    if( classesID ) {
      url = `${apiEndpoint}/${classesID}`;
    } 

    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "schoolyearID": schoolyearID,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    setClasses(res.classes); 
  
 console.log("res",res)
console.log("enquiry_status",EnquiryStatus);
    if (res && res.students) {
     
       setStudents(res.students);
    
      console.log("student_list", studentss );
      setEnquiryyData(res.students);

      }

  
    return [];
}




useEffect(() => {
  fetchData ();
}, []);

console.log("classes", classes);
console.log("enquiry-data", EnquiryyData);

  return (
    <>
   
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
           
              <div className="card-header pb-0">
                <div className="d-flex">
              <div className="col-sm-4 add">
              <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" style={{width:'auto'}} to="/enquire/add"><i className="fa fa-plus"></i>  Add a Enquiry </Link>
              <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
               <select className= "select1" onChange={SelectClassHandler} style={{padding:"8px 10px",borderRadius:"40px",marginLeft:"500px", marginTop:"9px",position:"relative",top:"-45px"}}>
               <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      { classes && classes.map((classes) => {
                        return (
                          <option
                          key={classes.classesID}
                          value={classes.classesID}
                          >
                            {classes.classes}
                          </option>
                        );
                      })}
                        </select>
                  </div>
              </div>
              
              </div>
              <div>
                <hr style={{marginTop:"18px"}} />
              </div>
                <h5>All Enquiries</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                      {studentss &&
                        studentss.map((u, i) => { 
                          const result = classes.find(item => item.classesID === u.classesID);
                          return (
                            <tr>
                              <td>{i+1}</td>
                              <td>{u.name}</td>
                              <td>{u.email}</td>
                             <td>{u.phone}</td>
                              <td>{u.remark}</td>
                              <td>{u.status === '1' ? 'Closed' : u.status === '0' ? 'Open' : ''}</td>
                              
                              <td>
                                <Link to={`/enquire/edit/${u.enquiryID}/${u.classesID}`} state={{ students:u}}><i className="fa fa-edit" style={{fontSize:"18px"}}></i> </Link>
                                <Link to={`/enquire/view/${u.enquiryID}/${u.classesID}`} state={{ students:u}}><i className="fa fa-eye view"> </i>
                                  {/* <i className="fa fa-eye view"></i> */}
                                </Link>
                                {/* <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link> */}
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
  )
}

export default Enquire;
