import React from "react";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import "../../assets/css/datatables.css";
import "../../assets/css/style_my.css";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import AddButton from "../../Components/Buttons/AddButton";
import ClassList from "../../Components/ClassList/ClassList";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import ReactPaginate from "react-paginate";
import { PieChart } from "react-minimal-pie-chart";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { BorderRadius } from "../../Constant";
import "./Student.css";

function System_admin(props) {
  document.title = "Students";

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <Link
                    className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                    style={{ width: "auto" }}
                    to="/students/add"
                  >
                    <i className="fa fa-plus"></i> Add System Admin{" "}
                  </Link>
                </div>
                <div>
                  <hr style={{ marginTop: "12px" }} />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex">
                      <div className="custom-select12">
                        <button
                          className="drop-marg12"
                          style={{ marginLeft: "-8px", height: "32px" }}
                        >
                          {" "}
                          copy
                        </button>
                        <button
                          className="drop-marg12"
                          style={{ marginLeft: "-8px", height: "32px" }}
                        >
                          {" "}
                          Excel
                        </button>
                        <button
                          className="drop-marg12"
                          style={{ marginLeft: "-8px", height: "32px" }}
                        >
                          {" "}
                          CSV
                        </button>
                        <button
                          className="drop-marg12"
                          style={{ marginLeft: "-8px", height: "32px" }}
                        >
                          {" "}
                          PDF
                        </button>
                      </div>
                      <div className="d-flex mlsearch">
                        <input
                          className="drop-marg_searchs12"
                          type="text"
                          placeholder="search here"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <hr style={{ marginTop: "2px" }} />
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>photo</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>{/* Render student list */}</tbody>
                  </table>
                  {/* Render pagination */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default System_admin;
