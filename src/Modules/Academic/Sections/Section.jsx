import React, {useState, useEffect} from 'react'
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import {Link} from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import Swal from 'sweetalert2';
import axios from 'axios';
import request from '../../../Apis/request';
import { BaseURL } from '../../../api/DataApis';

function Section(props) {
  const [section, setSection] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    // props.setProgress(10)
    setLoading(true);
    const response = await axios.get(
      `${BaseURL}/section/getSections`
    );
    // props.setProgress(30)
    const data = await response.data;
    // props.setProgress(80)
    setTimeout(() => {
      if (data) {  
        setLoading(false);
        setSection(data.sections); 
      }
      // props.setProgress(100)
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(async (results) => {
      const DeleteSectionApi = `${BaseURL}/section/delSection`;

      if (results.value) {
        try {
          const res = await request({
            url: `${DeleteSectionApi}/${id}`,
            method: "POST",
            data: JSON.stringify({
              // schoolyearID: 10,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Token":Token,
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
//https://demo.keendroid.in/section/delSection

  return (
    <>
      {/* <Breadcrumb title="Section" /> */}
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
                      to="/section/add"
                    >
                      <i className="fa fa-plus"></i> Add Section
                    </Link>
                  </div>
                </div>
              <div>
                <hr />
              </div>
              <h5>All Section</h5>
              </div>
              <div className="card-body">
              {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Section</th>
                        <th>Capacity</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section &&
                        section.map((u, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{u.section}</td>
                              <td>{u.capacity}</td>
                              <td>
                                <Link to={`/section/edit/${u.sectionID}`}><i className="fa fa-edit edit"></i> </Link>
                                <Link onClick={(e) => { e.preventDefault(); handleDelete(u.sectionID); }}>
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
  )
}

export default Section
