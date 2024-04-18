import React, { useState, useEffect } from "react";
import _, { transform } from "lodash";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import "../../assets/css/datatables.css";
import "../../assets/css/style_my.css";
import { getUserList } from "../../Apis/employee";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import AddButton from "../../Components/Buttons/AddButton"; 
import ClassList from "../../Components/ClassList/ClassList";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import ReactPaginate from "react-paginate";
import { PieChart } from "react-minimal-pie-chart";
import {  useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { BorderRadius } from "../../Constant";
import "./Student.css";
import { BaseURL } from "../../api/DataApis";
import request from "../../Apis/request";
function Students(props) {

  document.title ="Students";
  const { studentID, classesID } = useParams();//state={{ data:i}}const { samaj_id } = useParams();//state={{ data:i}}
  // console.log("props",props)
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [paginatedstudents, setPaginatedStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [searchTerm, setSearchTerm] = useState("");
  // function goToView() {
  //   navigate("/students/view", {state : {students : students}})
  // }
  const requestData = async (class_id) => {
    console.log("id", class_id);
    setTimeout(() => {
      if (getUserList.length == 0) {
        // props.setProgress(70);
        // setLoading(false);
        // props.setProgress(100);
      }
    }, 1000);
    // props.setProgress(20);
    setLoading(true);
    // props.setProgress(40);
    const data = await getUserList(class_id);
    // props.setProgress(70);
    setTimeout(() => {
      if (data) {
        setLoading(false);
        setStudents(data);
        // console.error("students", data);
        setPaginatedStudents(_(data).slice(0).take(pageSize).value());
      }
      // props.setProgress(100);
    }, 1000);
  };
  // useEffect(() => {
  //   requestData();
  // }, []);

  const studentList = (e) => {
    if (e.target.value == students.length) {
      setPaginatedStudents(students);
    } else if (e.target.value != students.length) {
      requestData(e.target.value);
      setPageSize(pageSize);
      setPaginatedStudents(_(students).slice(0).take(pageSize).value());
    }
  };

  //
  const onchange = (e) => {
    setPageSize(e.target.value);
    // requestData();
  };
  const apiEndpoint = `${BaseURL}/classes/getClasses`;
  const deleteApi = `${BaseURL}/student/delStudent`;
  const fetchData = async ( ) => {
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

  
    return []
}

useEffect(() => {
  fetchData ();
}, []);

  const pageCount = students ? Math.ceil(students.length / pageSize) : 0;

  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNO) => {
    setCurrentPage(pageNO);
    const startIndex = (pageNO - 1) * pageSize;
    const paginatedStudents = _(students)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedStudents(paginatedStudents);
  };

  const handlePageClick = (pageNO) => {
    let currentPage = pageNO.selected + 1;
    pagination(currentPage);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
const filteredStudents = !searchTerm
    ? paginatedstudents
    : students.filter((student) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          student.name.toLowerCase().includes(searchTermLower) ||
          student.registerNO.includes(searchTermLower) //||
          // student.phone.includes(searchTermLower)
        );
      });

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((results) => {
      if (results.value == true) {
        axios.delete(`${deleteApi}/${id}`);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Data Deleted Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        studentList();
      }
    });
  };

  return (
    <>
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  {/* <AddButton name= "Add Student" path="/students/add" /> */}
                  <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" style={{width:'auto'}} to="/students/add"><i className="fa fa-plus"></i> Add Student </Link>
                  <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
                    <select className= "select1" style={{padding:"8px 10px",borderRadius:"40px",marginLeft:"169px", marginTop:"9px"}}
                      onChange={studentList}>
                      <option value="">Select Class</option>
                      <option value="-1">View All</option>
                      {classes.map((classes) => {
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
                <div>
                  <hr style={{marginTop:"12px"}} />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex">
                      {/* <div className="d-flex"> */}
                      <div className="custom-select12">
                        {/* <label>Show:</label> */}
                        <select
                          name="selectcount"
                          className="drop-marg12"
                          onChange={onchange}
                          style={{marginLeft:"-8px",height:"32px"}}
                        >
                         <option value="show">Show</option>
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value={students.length}>All</option>
                        </select>
                      </div>
                      <div className="d-flex mlsearch">
                        {/* <label className="searchbar12 ">Search:</label> */}
                        <input className="drop-marg_searchs12" type="text" placeholder="search here" value={searchTerm} onChange={handleSearchChange} />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <hr style={{ marginTop: "2px" }} />
                {/* {loading && <Loader />} */}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>sr no.</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Phone</th>
                        <th>registerNO</th>
                        <th>section</th>
                        <th>Photo</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.length > 0 ? (
                        paginatedstudents &&
                        filteredStudents.map((u, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{u && u.name}</td>
                              <td> {u && u.classesID && classes.find(c => c.classesID === u.classesID)?.classes}</td>
                              <td>{u && u.phone}</td>
                              <td>{u && u.registerNO}</td>
                              <td>{u && u.sectionID}</td>
                              <td>
                                <img src={u && u.photo} />
                              </td>
                              <td>
                                <Link to={`/students/edit/${u.studentID}/${u.classesID}`} state={{ students:u}}>
                                  <i className="fa fa-edit edit"></i>
                                </Link>
                                <Link  to={`/students/view/${u.studentID}/${u.classesID}`} state={{ students:u}}>
                                  <i className="fa fa-eye view"></i>
                                </Link>
                                <Link onClick={() => handleDelete(u.studentID)}>
                                  <i className="fa fa-trash delete"></i>
                                </Link>
                              </td>
                            </tr>
                          );
                          //schoolyearID": 9,
                        })
                      ) : (
                        <tr style={{ backgroundColor: "#f5f7fb" }}>
                          <td colSpan="8" className="text-center mt-3">
                            <h5 style={{marginTop:"8px"}}>No Record Found</h5>
                          </td>
                        </tr>
                      )}
                    </tbody>
                    
                  </table>
                  {searchTerm ? (
                    ""
                  ) : (
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      breakLabel={"..."}
                      pageCount={pageCount}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={2}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextClassName={"page-item"}
                      nextLinkClassName={"page-link"}
                      breakClassName={"page-item"}
                      breakLinkClassName={"page-link"}
                      activeClassName={"active"}
                    />
                  )}
                  <nav
                    className="d-flex justify-content-center"
                    style={{ cursor: "pointer" }}
                  >
                    <ul className="pagination" style={{ display: "none" }}>
                      {pages.map((page) => (
                        <li
                          key={page}
                          className={
                            page === currentPage
                              ? "page-item active"
                              : "page-item"
                          }
                        >
                          <p
                            className="page-link"
                            onClick={() => pagination(page)}
                          >
                            {page}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;
