import React from "react";
import { Link } from "react-router-dom";

function View() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ms-4">
            <i className="fa fa-laptop"></i>
            <Link to="/"> Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/transportmember"> Transport Member </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            View
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div id="printablediv">
                <section class="panel">
                  <div class="profile-view-head">
                    <a href="#">
                      <img className="imagev"
                        src="http://localhost/schoolcode/uploads/images/defualt.png"
                        alt=""
                      />{" "}
                    </a>

                    
                  </div>



                  <div class="panel-body profile-view-dis">
                        <h1>Personal Information</h1>
                        <div class="row">
                            <div class="profile-view-tab">
                                <p><span>Register NO </span>: K02</p>
                            </div>

                            <div class="profile-view-tab">
                                <p><span>Roll </span>: </p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Section </span>: N/A</p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Route Name </span>: Route No 13</p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Transport Fee </span>: 0.00</p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Join Date </span>: 15 Apr 2023</p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Date of Birth </span>: </p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Gender </span>: Male</p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Blood Group </span>: </p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Religion </span>: </p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Email </span>: </p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Phone </span>: 7297879578</p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Address </span>: </p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>State </span>: </p>
                            </div>
                            <div class="profile-view-tab">
                                <p><span>Country </span>: </p>
                            </div>

                        </div>
                    </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
