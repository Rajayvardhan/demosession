import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import axios from "axios";
import { BaseURL } from "../../../api/DataApis";

function Add() {
  document.title = "Exam Attendance | Add";

  let navigate = useNavigate();
  const redirect = () => {
    let path = `/viho/eattendance`;
    navigate(path);
  };

  const [options, setOptions] = useState([""]);
  const [sections, setSections] = useState([""]);
  const [subjects, setSubjects] = useState([""]);

  const getData = async () => {
    const arr = [];
    await axios
      .get(`${BaseURL}/classes/getClasses`)
      .then((res) => {
        let result = res.data.classes;
        result.map((classs) => {
          return arr.push({
            text: classs.classes,
            value: classs.classesID,
            key: classs.classesID,
          });
        });
        setOptions(arr);
      });

      const arrsection = [];
    await axios
      .get(`${BaseURL}/section/getSections`)
      .then((res) => {
        let result = res.data.sections;
        result.map((section) => {
          return arrsection.push({
            text: section.section,
            value: section.sectionID,
            key: section.sectionID,
          });
        });
        setSections(arrsection);
      });

      const arrsubject = [];
    await axios
      .get(`${BaseURL}/subject/getSubjects`)
      .then((res) => {
        let result = res.data.subjects;
        result.map((subject) => {
          return arrsubject.push({
            text: subject.subject,
            value: subject.subjectID,
            key: subject.subjectID,
          });
        });
        setSubjects(arrsubject);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
              <div className="portlet-title row">
                  <div className="caption font-dark col-md-10">
                    <h4 className="caption-subject bold uppercase mx-3">
                    Exam Attendance Details
                    </h4>
                  </div>
                  <div className="caption font-dark col-md-2">
                    <h5 className="caption-subject bold uppercase mx-3">
                      <button className="btn btn-success" onClick={redirect}>
                        Back
                      </button>
                    </h5>
                  </div>
                </div>
                <div className="box-body">
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                      >
                        <div className="row" style={{padding:'10px'}}>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen1"
                                    className="control-label"
                                  >
                                    Exam
                                  </label>
                                  <Select2
                                className="form-control"
                                name="examID"
                                data={[
                                  // { value: " ", text: "Select Exam" },
                                  { value: "hyearly", text: "Half Yearly" },
                                  { value: "ctest", text: "Class Test" },
                                ]}
                                options={{
                                  placeholder: "Select Exam",
                                }}
                              />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen2"
                                    className="control-label"
                                  >
                                    Class
                                  </label>
                                  <Select2
                                className="form-control"
                                name="classesID"
                                // value={classes}
                                data={options}
                                options={{
                                  placeholder: "Select Class",
                                }}
                              />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label className="control-label">Section</label>
                                  <Select2
                                className="form-control"
                                name="sectionID"
                                data={sections}
                                options={{
                                  placeholder: "Select Section",
                                }}
                              />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label
                                    htmlFor="s2id_autogen4"
                                    className="control-label"
                                  >
                                    Subject
                                  </label>
                                  <Select2
                                className="form-control"
                                name="subjectID"
                                data={subjects}
                                options={{
                                  placeholder: "Select Subject",
                                }}
                              />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <input
                                        type="submit"
                                        className="btn btn-success col-md-12 mt-4"
                                        style={{marginTop:"20px"}}
                                        value="Attendance"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                      </form>
                    </div>
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

export default Add;
