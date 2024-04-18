import React, { useState, useEffect } from "react";
import _, { transform } from "lodash";
import "../../../assets/css/datatables.css";
import "../../../assets/css/style_my.css";
import { getStudentList } from "../../../Apis/StAttendance";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import AddButton from "../../../Components/Buttons/AddButton";
import ClassList from "../../../Components/../Components/ClassList/ClassList";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import ReactPaginate from "react-paginate";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import Swal from "sweetalert2";
import { BaseURL } from "../../../api/DataApis";
import request from "../../../Apis/request";

function Students(props) {
  // console.log("props",props)
  const [classs, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [paginatedstudents, setPaginatedStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [searchTerm, setSearchTerm] = useState("");
  const apiEndpoint = `${BaseURL}/classes/getClasses`;
  const DeleteApi = `${BaseURL}/student/delStudent`;
  const requestData = async (class_id) => {
    setTimeout(() => {
      if (getStudentList.length == 0) {
        // props.setProgress(70);
        setLoading(false);
        // props.setProgress(100);
      }
    }, 1000);
    // props.setProgress(20);
    setLoading(true);
    // props.setProgress(40);
    const data = await getStudentList(class_id);
    // props.setProgress(70);
    setTimeout(() => {
      if (data) {
        setLoading(false);
        setStudents(data);
        setPaginatedStudents(_(data).slice(0).take(pageSize).value());
      }
      // props.setProgress(100);
    }, 1000);
  };

  const StudentList = (e) => {
    if (e.target.value == students.length) {
      setPaginatedStudents(students);
    } else if (e.target.value != students.length) {
      requestData(e.target.value);
      setPageSize(pageSize);
      setPaginatedStudents(_(students).slice(0).take(pageSize).value());
    }
  };
  const onchange = (e) => {
    setPageSize(e.target.value);
    // requestData();
  };

  const fetchData = async () => {
    // console.log("classID", classesID);
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    // setLoading(true);

    var url = apiEndpoint;

    let res = await request({
      url: url,
      // url: 'posts',
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("res", res);
    if (res && res.classes) {
      //const data = res.data.student;
      //console.log("res",res.students)
      // setExamState(res.exam_list);
      setClasses(res.classes);
      // console.log("exam state", ExamState);
      //sreturn res.student;
    }

    return [];
  };

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
        axios.delete(`${DeleteApi}/${id}`);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Data Deleted Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        StudentList();
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* <Breadcrumb title="Student Attendance" /> */}
      {/* <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div style={{height:"400px"}}>
              <PieChart
                style={{ height: "330px", transform: "translateY(35px)" }}
                // lineWidth={100}
                // startAngle={100}
                // lengthAngle={360}
                paddingAngle={0.5}
                // reveal={95}
                // background="white"
                // radius={50}
                // center={[50,50]}
                // viewBoxSize={[100,100]}
                animate
                animationDuration={1000}
                // animationEasing="steps(16, end)"
                // animationEasing="cubic-bezier(0.1, 0.7, 1, 0.1)"
                // animationEasing="steps(10, jump-end)"
                // animationEasing="steps(20, jump-none)"
                animationEasing="steps(35, jump-both)"
                // animationEasing="ease-in-out"
                // animationEasing="ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1)"
                data={[
                  { title: "One", value: 20, color: "#ea9034"},
                  { title: "Two", value: 25, color: "#33ec9e" },
                  { title: "Three", value: 20, color: "#6b1f35" },
                  { title: "Four", value: 25, color: "#27d4f4" },
                  { title: "Five", value: 20, color: "#93202b" },
                  { title: "Six", value: 25, color: "#452aed" },
                  { title: "Seven", value: 20, color: "#eaf122" },
                  { title: "Eight", value: 25, color: "red" },
                  { title: "Nine", value: 15, color: "#333333" },
                  { title: "Ten", value: 25, color: "purple" },
                  { title: "Eleven", value: 20, color: "green" },
                  { title: "Twelve", value: 25, color: "pink" },
                ]}
                // label={(data) => data.dataEntry.title}
                //       labelPosition={80}
                //       labelStyle={{
                //         fontSize: "5px",
                //         fontColor: "FFFFFA",
                //         fontWeight: "800",
                //       }}
              />
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <Link
                    className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                    to="/attendance/studentattendance/add"
                  >
                    <i className="fa fa-plus"></i> Add Student Attendance{" "}
                  </Link>
                  {/* <AddButton name= "Add Student Attendance" path="/attendance/studentattendance/add" /> */}
                  <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
                    <select
                      style={{
                        padding: "8px 10px;",
                        borderRadius: "40px",
                        marginLeft: "28px",
                        marginTop: "9px",
                        border: "1px solid",
                      }}
                      onChange={StudentList}
                      className="form-control text-center"
                    >
                      <option value="">Select Class</option>
                      {/* <option value="-1">View All</option> */}
                      {classs.map((classes) => {
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
                  <hr />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex">
                      <div className="d-flex">
                        <select
                          name="selectcount"
                          className="drop-marg12"
                          onChange={onchange}
                          style={{ marginLeft: "7px" }}
                        >
                          <option value="show">Show</option>
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value={students.length}>All</option>
                        </select>
                      </div>
                      <div className="d-flex mlsearch">
                        {/* <label>Search:</label> */}
                        <input
                          className="drop-marg searchs"
                          type="text"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          placeholder="Search"
                          style={{
                            width: "67%",
                            height: "32px",
                            marginLeft: "71px",
                            border: "1px #7d7d7d solid",
                            borderRadius: "24px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <hr style={{ marginTop: "-10px" }} />
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>sr. no</th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Email</th>

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
                              <td>{u && u.roll}</td>
                              <td>{u && u.email}</td>
                              <td>
                                {" "}
                                <img src={u && u.photo} />
                              </td>
                              {/* <td>{u && u.phone}</td> */}
                              {/* <td>{u && u.registerNO}</td> */}

                              <td>
                                {/* <Link to={`/attendance/studentattendance/edit`}> */}
                                <i className="fa fa-edit edit"></i>
                                {/* </Link> */}
                                <Link to={`/attendance/studentattendance/view`}>
                                  <i className="fa fa-eye view"></i>
                                </Link>
                                <Link onClick={() => handleDelete(u.studentID)}>
                                  <i className="fa fa-trash delete"></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr style={{ backgroundColor: "#f5f7fb" }}>
                          <td colSpan="8" className="text-center">
                            <h5>No Record Found</h5>
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
