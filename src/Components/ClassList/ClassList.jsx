import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserList } from "../../Apis/employee";
import ReactPaginate from "react-paginate";
import { BaseURL } from "../../api/DataApis";

const ClassLists = () => {

  const [classs, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [paginatedstudents, setPaginatedStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [searchTerm, setSearchTerm] = useState("");

  const requestData = async ( class_id ) => {
    setTimeout(() => {
      const userList = getUserList( class_id );
      if (userList.length == 0) {
        // props.setProgress(70);
        setLoading(false);
        // props.setProgress(100);
      }
    }, 1000);
    // props.setProgress(20);
    setLoading(true);
    // props.setProgress(40);
    const data = await getUserList( class_id );
    console.log('data',data)
    // props.setProgress(70);
    setTimeout(() => {
      if (data) {
        const student = data?data.students:[];
        console.log('student',student);
        setLoading(false);
        setStudents(student);
        //setPaginatedStudents(_(data).slice(0).take(pageSize).value());
      }
      // props.setProgress(100);
    }, 1000);
  };

  const fetchData = async () => {
    const response = await axios.get(`${BaseURL}/classes/getClasses`).then((resp)=>{
      setClasses(resp.data.classes)
    })
  };

  useEffect(() => {
    fetchData();
  }, []);



  

  function studentList( e ) {

    var class_id = e.target.value;
    requestData(class_id);
    alert(class_id);
  }

  return (
    <>
      <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
        <select onChange={studentList} className="form-control text-center">
          <option value="">Select Class</option>
          <option value="">View All</option>
          {classs.map((classes) => {
            return <option key={classes.classesID} value={classes.classesID}>{classes.classes}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default ClassLists;



