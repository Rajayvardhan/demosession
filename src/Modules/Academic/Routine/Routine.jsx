import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BaseURL } from "../../../api/DataApis";

function Routine() {
  document.title = "Routine | Listing";
    
  const[dataload,setDataload]=useState('') ;
  const [periods, setPeriods] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [subject, setSubject] = useState([]);

const classesChange = (e)=>{
  setDataload(e.target.value);
}

  const fetchDatas = async () => {

    await axios
    .get(`${BaseURL}/classes/getClasses`)
    .then((resp) => {
      setClasses(resp.data.classes);
    });
    await axios
      .get(`${BaseURL}/period/getPeriods`)
      .then((resp) => {
        setPeriods(resp.data.period);
      });
    await axios
      .get(`${BaseURL}/teacher/getStaff`)
      .then((resp) => {
        setTeacher(resp.data.staff);
      });
      await axios
      .get(`${BaseURL}/subject/getSubjects`)
      .then((resp) => {
        setSubject(resp.data.subjects);
      });
  };
  useEffect(() => {
    fetchDatas();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  {/* <div className="col-sm-4 add">
                    <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/routine/add"
                    >
                      <i className="fa fa-plus"></i> Add Routine
                    </Link>
                  </div> */}
                  <div className="col-sm-4  pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
                    <select
                      className="select1"
                      style={{
                        padding: "6px 10px",
                        borderRadius: "40px",
                        marginleft: "10px",
                      }}
                      onChange={classesChange}
                    >
                      <option value="">Select Class</option>
                      {classes.map((classs) => {
                        return (
                          <option
                            key={classs.classesID}
                            value={classs.classesID}
                          >
                            {classs.classes}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Routine</h5>
              </div>
              <div className="card-body">
              {dataload!==""? 
                <div className="table-responsive">
                <table className="display dataTable" id="advance-1">
                  <div class="tab-content">
                    <div id="all" class="tab-pane active">
                      <div id="hide-table-2">
                        <table
                          id="table"
                          className="table table-secondary table-striped table-bordered"
                        >
                          <thead>
                            <tr>
                              <th></th>
                              {periods.map((period) => {
                                return (
                                  <th>
                                    {period.periodSTime} -
                                    {period.periodETime}
                                  </th>
                                );
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>MONDAY</th>
                              {periods.map((period) => {
                                return (
                                  <td>
                                    <select className="form-control my-2">
                                      <option>Select Teacher</option>
                                      {teacher.map((teacheres) => {
                                        return (
                                          <option
                                            key={teacheres.teacherID}
                                            value={teacheres.teacherID}
                                          >
                                            {teacheres.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <select className="form-control">
                                      <option>Select Subject</option>
                                      {subject.map((subjects) => {
                                        return (
                                          <option
                                            key={subjects.subjectID}
                                            value={subjects.subjectID}
                                          >
                                            {subjects.subject}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </td>
                                );
                              })}
                            </tr>
                            <tr>
                              <th>TUESDAY</th>
                              {periods.map((period) => {
                                return (
                                  <td>
                                    <select className="form-control my-2">
                                      <option>Select Teacher</option>
                                      {teacher.map((teacheres) => {
                                        return (
                                          <option
                                            key={teacheres.teacherID}
                                            value={teacheres.teacherID}
                                          >
                                            {teacheres.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <select className="form-control">
                                      <option>Select Subject</option>
                                      {subject.map((subjects) => {
                                        return (
                                          <option
                                            key={subjects.subjectID}
                                            value={subjects.subjectID}
                                          >
                                            {subjects.subject}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </td>
                                );
                              })}
                            </tr>
                            <tr>
                              <th>WEDNESDAY</th>
                              {periods.map((period) => {
                                return (
                                  <td>
                                    <select className="form-control my-2">
                                      <option>Select Teacher</option>
                                      {teacher.map((teacheres) => {
                                        return (
                                          <option
                                            key={teacheres.teacherID}
                                            value={teacheres.teacherID}
                                          >
                                            {teacheres.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <select className="form-control">
                                      <option>Select Subject</option>
                                      {subject.map((subjects) => {
                                        return (
                                          <option
                                            key={subjects.subjectID}
                                            value={subjects.subjectID}
                                          >
                                            {subjects.subject}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </td>
                                );
                              })}
                            </tr>
                            <tr>
                              <th>THURSDAY</th>
                              {periods.map((period) => {
                                return (
                                  <td>
                                    <select className="form-control my-2">
                                      <option>Select Teacher</option>
                                      {teacher.map((teacheres) => {
                                        return (
                                          <option
                                            key={teacheres.teacherID}
                                            value={teacheres.teacherID}
                                          >
                                            {teacheres.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <select className="form-control">
                                      <option>Select Subject</option>
                                      {subject.map((subjects) => {
                                        return (
                                          <option
                                            key={subjects.subjectID}
                                            value={subjects.subjectID}
                                          >
                                            {subjects.subject}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </td>
                                );
                              })}
                            </tr>
                            <tr>
                              <th>FRIDAY</th>
                              {periods.map((period) => {
                                return (
                                  <td>
                                    <select className="form-control my-2">
                                      <option>Select Teacher</option>
                                      {teacher.map((teacheres) => {
                                        return (
                                          <option
                                            key={teacheres.teacherID}
                                            value={teacheres.teacherID}
                                          >
                                            {teacheres.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <select className="form-control">
                                      <option>Select Subject</option>
                                      {subject.map((subjects) => {
                                        return (
                                          <option
                                            key={subjects.subjectID}
                                            value={subjects.subjectID}
                                          >
                                            {subjects.subject}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </td>
                                );
                              })}
                            </tr>
                            <tr>
                              <th>SATURDAY</th>
                              {periods.map((period) => {
                                return (
                                  <td>
                                    <select className="form-control my-2">
                                      <option>Select Teacher</option>
                                      {teacher.map((teacheres) => {
                                        return (
                                          <option
                                            key={teacheres.teacherID}
                                            value={teacheres.teacherID}
                                          >
                                            {teacheres.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <select className="form-control">
                                      <option>Select Subject</option>
                                      {subject.map((subjects) => {
                                        return (
                                          <option
                                            key={subjects.subjectID}
                                            value={subjects.subjectID}
                                          >
                                            {subjects.subject}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </td>
                                );
                              })}
                            </tr>
                            <tr>
                              <th>SUNDAY</th>
                              {periods.map((period) => {
                                return (
                                  <td>
                                    <select className="form-control my-2">
                                      <option>Select Teacher</option>
                                      {teacher.map((teacheres) => {
                                        return (
                                          <option
                                            key={teacheres.teacherID}
                                            value={teacheres.teacherID}
                                          >
                                            {teacheres.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <select className="form-control">
                                      <option>Select Subject</option>
                                      {subject.map((subjects) => {
                                        return (
                                          <option
                                            key={subjects.subjectID}
                                            value={subjects.subjectID}
                                          >
                                            {subjects.subject}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </table>
              </div>
                :""
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Routine;
