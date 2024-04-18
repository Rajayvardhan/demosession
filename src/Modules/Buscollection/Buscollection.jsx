import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";
import request from "../../Apis/request";
import { BaseURL, schoolyearID } from "../../api/DataApis";


function Buscollection(props) {

  const apiEndpoint = `${BaseURL}/classes/getClasses`;

    document.title = "Feecollection";
//   const [subject, setSubject] = useState([]);

  const [loading, setLoading] = useState(false);
  const [feeCollection, setFeeCollection] = useState([]);
  const [classes, setClasses] = useState([]);
  const[selectedClass, setSelectedClass] = useState([]);
  const [selectClassid, setSelectClassid] = useState("");
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => { 
    if( feeCollection.status=1)
    setToggled(isToggled);
     else
     setToggled (!isToggled);
  };
  const handleClassChange = (event) => {
    setSelectClassid(event.target.value);
    fetchData( event.target.value );
  };

//   const fetchData = async () => {
//     // props.setProgress(10);
//     setLoading(true);
//     const response = await axios.get(
//       "http://localhost/schoolcode/myapi"
//     );
//     const data = await response.data;
//     // props.setProgress(80);
//     setTimeout(() => {
//       if (data) {
//         setLoading(false);
//         setSubject(data.subjects);
//       }
//       // props.setProgress(100);
//     }, 1000);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDelete = (id) => {
//     Swal.fire({
//       icon: "warning",
//       title: "Are you sure?",
//       // text: "You won't be able to revert this!",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "No, cancel!",
//     }).then((results) => {
//       if (results.value) {
//         axios.delete(`https://demo.keendroid.in/subject/delSubject/${id}` );
//         Swal.fire({
//           icon: "success",
//           title: "Deleted!",
//           text: "Data Deleted Successfully...",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         fetchData();
//       }
//     });
//   };



const SelectClassHandler = (e) => {

  setSelectClassid(e.target.value);
  // fetchData( e.target.value );

}

const fetchData = async ( selectedClass ) => {
  //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
  // props.setProgress(10);
  setLoading(true);

  var url = `${BaseURL}/buscollection/getBusFeeCollection`;
  // if( selectedClass ) {
  //   url = "https://demo.keendroid.in/feecollection/getFeeCollection/"+selectedClass;
  // } 

  let res = await request({
    
    url:url,
    // url: 'posts',
    method:"POST",
    data: JSON.stringify({
      "schoolyearID": schoolyearID
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
   }
  });
  console.log("res",res);
  //setClasses(res.classes);
  if (res && res.BusFeeCollection) {
    //const data = res.data.student;
     //console.log("res",res.students)
     setFeeCollection(res.BusFeeCollection);
    //   
    console.log("feeCollection", feeCollection );
    
    //sreturn res.student;
    }


  return [];
}

useEffect(() => {
 fetchData ();
}, []);
// console.log("classes", classes);

const fetchDataa = async ( ) => {
  // console.log("classID", classesID);
  //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
  // props.setProgress(10);
  setLoading(true);

  var url = apiEndpoint;

  let res = await request({
    
    url:url,
    // url: 'posts',
    method:"GET",
 
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
   }
  });
  console.log("res",res)
  if (res && res.classes) {
    //const data = res.data.student;
     //console.log("res",res.students)
    // setExamState(res.exam_list);
    setClasses(res.classes);  
    // console.log("exam state", ExamState);
    //sreturn res.student;
    }


  return [];
}

useEffect(() => {
fetchDataa ();
}, []);


const handleDelete = async (BcID) => {
  Swal.fire({
    icon: "warning",
    title: "Are you sure?",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
  }).then(async (results) => {
    const DeleteFeeCollectionApi = `${BaseURL}/buscollection/deleteBusFee`;

    if (results.value) {
      try {
        const res = await request({
          url: `${DeleteFeeCollectionApi}/${BcID}`,
          method: "POST",
          data: JSON.stringify({
            schoolyearID: schoolyearID,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (res.status === "200") {
          // Update feeCollection state after successful deletion
          setFeeCollection(feeCollection.filter((item) => item.bcID !== BcID));
          fetchData();
          console.log("deleted");

          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Data Deleted Successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          alert("Error");
        }
      } catch (error) {
        console.error("Error deleting class:", error);
      }
    }
    });
  };



  return (
    <>
      {/* <Breadcrumb title="Subject" /> */}
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
                      to="/buscollection/add"
                    >
                      <i className="fa fa-plus"></i> Add Bus Fee
                    </Link>
                    <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
               <select className= "select1"  onChange={handleClassChange} style={{padding:"8px 10px",borderRadius:"40px",marginLeft:"634px", marginTop:"9px",position:"relative",top:"-45px"}}>
               <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      {classes.map((classses) => {
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}
                          >
                            {classses.classes}
                          </option>
                        );
                      })}
                        </select>
                  </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5> Bus Fee Collection</h5>
              </div>
              <div className="card-body">
                {/* {loading && <Loader />} */}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                      <th>Receipt No</th>
                        <th>Student Bar Code</th>
                        <th>Name</th>
                        <th>Transaction Date</th>
                        <th>Payment Method</th>
                        <th>Route Distance</th>
                        <th>Deposit Amount</th>
                        <th>Bus Name</th>
                        <th>Stand</th>
                       <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {feeCollection &&
                        feeCollection.map((u, i) => { 
                          return (
                        <tr>
                            <td>{u.receiptNO}</td>
                            <td>{u.studentID}</td>
                            <td>{u.name}</td>
                            <td>{u.creationDate}</td>
                            <td>{u.paymentMethod}</td>
                            <td>{}</td>
                            <td>{u.dAmount}</td>
                            <td>{u.comments}</td>
                            <td>{}</td>
                            
                            
                            <td>
                            
                          <Link to={"/buscollection/edit"}>
                            <i className="fa fa-edit edit"></i>
                          </Link>
                          <Link>
                            <i className="fa fa-eye view"></i>
                          </Link>
                          <Link onClick={(e)=>{e.preventDefault();handleDelete(u.bcID);}}>
                                  <i className="fa fa-trash delete"></i>
                                </Link>
                        </td>
                            
                                
                        </tr>
                              );  
                             })}  
                    </tbody>
                    {/* <tbody>
                      {subject &&
                        subject.map((u, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{u.subject}</td>
                              <td>{u.subject_code}</td>
                              <td>{u.classes}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-xs"
                                >
                                  {u.type == 1 ? "Mandatory" : "Optional"}
                                </button>
                              </td>
                              <td>
                                <Link to={`/subject/edit/${u.subjectID}`}>
                                  <i
                                    className="fa fa-edit edit"
                                  ></i>
                                </Link>
                                <Link
                                  onClick={() =>
                                    handleDelete(u.subjectID)
                                  }
                                >
                                  <i
                                    className="fa fa-trash delete"
                                  ></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody> */}
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

export default Buscollection;
