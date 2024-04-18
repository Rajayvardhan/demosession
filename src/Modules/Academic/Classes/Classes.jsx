

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import axios from "axios";
import Cadd from "./Cadd";
import Cedit from "./Cedit";
import Swal from "sweetalert2";
import request from "../../../Apis/request";
import { BaseURL, Token, schoolyearID } from "../../../api/DataApis";

function Class(props) {
  const [classs, setClasss] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ids, setIds] = useState("");
  const [ClassID, setClassID] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BaseURL}/classes/getClasses`);
      
      setClasss(response.data.classes);
      setClassID(response.data.classes);
    } catch (error) {
      console.error("Error fetching classes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    setIds(id);
  };

  // const handleDelete = async (id) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'You will not be able to recover this class!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //     const resp = await axios.delete(`https://demo.keendroid.in/classes/delClasses/${id}`);
  //     if(resp.message === "Success") {
  //         Swal.fire(
  //           'Deleted!',
  //           'The class has been deleted.',
  //           'success'
  //         );
  //     }
  //         // Refresh class listing after deletion
         
  //       }
        
  //       catch (error) {
  //         console.error("Error deleting class:", error);
         
  //         Swal.fire(
  //           'Error!',
  //           'An error occurred while deleting the class.',
  //           'error'
  //         );
  //         // Refresh class listing even if there's an error
  //         fetchData();
        
  //       }
  //     }
  //   });
  // };
  const handleDelete = async (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(async (results) => {
      const DeleteClassApi = `${BaseURL}/classes/delClasses`;
      

      if (results.value) {
        try {
          const res = await request({
            url: `${DeleteClassApi}/${id}`,
            method: "POST",
            data: JSON.stringify({
               schoolyearID: schoolyearID
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Token":Token
            },
          });

          if (res.status === "200") {
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "Data Deleted Successfully...",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchData();
          } else {
            alert("Error");
          }
        } catch (error) {
          console.error("Error deleting class:", error);
        }
      }
    });
  };  

    useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <h5>All Classes</h5>
                </div>
                <hr />
              </div>
              <div className="card-body">
                {loading ? (
                  <Loader />
                ) : (
                  <div className="table-responsive">
                    <table className="display dataTable" id="advance-1">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Class</th>
                          <th>Class Numeric</th>
                          <th>Shift Name</th>
                          <th>Note</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {classs.length > 0 ? (
                          classs.map((classItem, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{classItem.classes}</td>
                              <td>{classItem.classes_numeric}</td>
                              <td>{classItem.shift_name}</td>
                              <td>{classItem.note}</td>
                              <td>
  <Link  to="/academic/class/edit" state={{ classesData: classItem}}>
    <i className="fa fa-edit edit"></i>
  </Link>
  

  
  
  <Link onClick={(e) => { e.preventDefault(); handleDelete(classItem.classesID); }}>
    <i className="fa fa-trash delete"></i>
  </Link>
</td>

                            </tr>
                          ))
                        ) : (
                          <tr style={{ backgroundColor: "#f5f7fb" }}>
                            <td colSpan="6" className="text-center">
                              <h5>No Records Found</h5>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
          {ids === "" ? <Cadd fetchData={fetchData} /> : <Cedit ids={ids} fetchData={fetchData} setIds={setIds} />}
        </div>
      </div>
    </>
  );
}

export default Class;