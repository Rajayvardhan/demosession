import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseURL } from "../../api/DataApis";
import request from "../../Apis/request";
import { Token } from "../api/DataApis";

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
          "Content-type": "application/json; charset=UTF-8",
          "Token":Token
        },
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
        setParents(parents.filter((parent) => parent.parentsID !== id));
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
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>scholar no.</th>
                        <th>Student Names</th>
                        <th colSpan="20">Subjects</th>
                        <th>Grand Total</th>
                        <th>%</th>
                        <th colSpan="10">Subjects</th>
                        <th>Grand Total</th>
                        <th colSpan="8">physical education</th>
                        <th></th>
                        <th>att.</th>
                        <th>result</th>
                      
                      </tr>
                      <tr>
                        <th></th>
                        <th></th>
                        <th colSpan="5">Hindi</th>
                        <th colSpan="5">Mathematics</th>
                        <th colSpan="5">EVS</th>
                        <th colSpan="5">English</th>
                        <th></th>
                        <th></th>
                        <th colSpan="5">computer</th>
                        <th colSpan="5">g.k</th>
                        <th></th>
                        <th colSpan="2"  >work-education</th>
                        <th colSpan="2"  >art-education</th>
                        <th colSpan="2"  >helth-education</th>
                        <th colSpan="2"  >dicipline</th>
                        
                        <th   >rank</th>

                      </tr>

                      <tr>
                        <th></th>
                        <th></th>
                        <th colSpan="2">Term 1</th>
                        <th colSpan="2">Term 2</th>
                        <th>sub-total</th>
                        <th colSpan="2">Term 1</th>
                        <th colSpan="2">Term 2</th>
                        <th>sub-total</th>

                        <th colSpan="2">Term 1</th>
                        <th colSpan="2">Term 2</th>
                        <th>sub-total</th>

                        <th colSpan="2">Term 1</th>
                        <th colSpan="2">Term 2</th>
                        <th>sub-total</th>

                        <th></th>
                        <th></th>
                        <th colSpan="2">Term 1</th>
                        <th colSpan="2">Term 2</th>
                        <th>sub-total</th>
                        <th colSpan="2">Term 1</th>
                        <th colSpan="2">Term 2</th>
                        <th>sub-total</th>
                        <th></th>
                        
                        
                        <th colSpan="1">Term 1</th>
                        <th colSpan="1">Term 2</th>
                        <th colSpan="1">Term 1</th>
                        <th colSpan="1">Term 2</th>
                        <th colSpan="1">Term 1</th>
                        <th colSpan="1">Term 2</th>
                        <th colSpan="1">Term 1</th>
                        <th colSpan="1">Term 2</th>
                        <th></th>
                        <th   >224</th>

                        <th></th>
                      </tr>
                      <tr>
                        <th></th>
                        <th></th>

                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th></th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th></th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th></th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th></th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                        <th>oral subject</th>
                        <th>writen subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>80</td>
                        <td>75</td>
                        <td>90</td>
                        <td>90</td>
                        <td>90</td>
                        <td>90</td>

                        <td>85</td>
                        <td>85</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>88</td>
                        <td>88</td>
                        <td>82</td>
                        <td>82</td>
                        <td>82</td>
                        <td>82</td>
                        <td>82</td>
                        <td>82</td>
                        <td>82</td>
                        <td>82</td>
                        <td>82</td>
                        <td>82</td>
                        <td>720</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Doe</td>
                        <td>75</td>
                        <td>78</td>
                        <td>85</td>
                        <td>82</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>80</td>
                        <td>75</td>
                        <td>82</td>
                        <td>78</td>
                        <td>698</td>

                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                        <td>87.25%</td>
                      </tr>
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
