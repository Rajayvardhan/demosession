import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function View() {

  let location = useLocation();
  const {transportViewData} = location.state;
console.log("transportViewData", transportViewData);

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
                <section className="panel">
                  <div className="profile-view-head">
                    <a href="#">
                      <img className="imagev"
                        src="http://localhost/schoolcode/uploads/images/defualt.png"
                        alt=""
                      />{" "}
                    </a>

                    
                  </div>



                  <div className="panel-body profile-view-dis">
                        <h1>Personal Information</h1>
                        <div className="row">
                            <div className="profile-view-tab">
                                <p><span>Register NO </span>: {transportViewData?.registerNO}</p>
                            </div>

                            <div className="profile-view-tab">
                                <p><span>Roll </span>: {transportViewData?.studentID}</p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span> Bus Name</span>: N/A</p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Stand Name </span>: Route No 13</p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Distance</span>: 0.00</p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Month </span>: </p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Transport Fee</span>: </p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Join Date</span>: {transportViewData?.doj}</p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Date of Birth</span>: {transportViewData?.dob} </p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Gender</span>: </p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Religion</span>: </p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Email</span>: {transportViewData?.email}</p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Phone</span>: {transportViewData?.phone} </p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Address</span>: </p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>State</span>:{transportViewData?.state} </p>
                            </div>
                            <div className="profile-view-tab">
                                <p><span>Country</span>: {transportViewData?.country} </p>
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
