import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseURL } from "../../api/DataApis";
import request from "../../Apis/request";

function Parents(props) {
  const [parents, setParents] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiEndpoint = `${BaseURL}/parents/getParents`;
  const deleteParentsApi = `${BaseURL}/parents/delParent`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await request({
        url: apiEndpoint,
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      });

      if (response && response.parents) {
        setParents(response.parents);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [parents]);

  const handleDelete = async (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(async (result) => {
      if (result.value) {
        await axios.delete(`${deleteParentsApi}/${id}`);
        setParents(parents.filter(parent=> parent.parentsID !== id));
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Data Deleted Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        fetchData();
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
                  <h5>All Parents</h5>
                  <hr />
                </div>
              </div>
              <div className="card-body">
                {/* {loading && <Loader />} */}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Student Names</th>
                        <th>Father`s Name</th>
                        <th>Mother`s Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parents &&
                        parents.map((parent, index) => {
                          const studentNames = parent.students.map(student => student.name).join(', ');
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{studentNames}</td>
                              <td>{parent.father_name}</td>
                              <td>{parent.mother_name}</td>
                              <td>{parent.phone}</td>
                              <td>{parent.email}</td>
                              <td>
                                <Link to={`/parents/edit/${parent.parentsID}`}>
                                  <i className="fa fa-edit edit"></i>
                                </Link>
                                <Link to={`/parents/view/${parent.parentsID}`}>
                                  <i className="fa fa-eye view"></i>
                                </Link>
                                <Link onClick={() => handleDelete(parent.parentsID)}>
                                  <i className="fa fa-trash delete"></i>
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

export default Parents;
