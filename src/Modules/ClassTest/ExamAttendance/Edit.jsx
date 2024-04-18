import React from 'react';
import { Link } from "react-router-dom";

function Edit() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ms-4">
            <i className="fa fa-laptop"></i>
            <Link to="/"> Dashboard</Link>
            {/* <i className="fa fa-circle"></i> */}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/shift"> Exam Attendance </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                     Edit Exam Attendance Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form className="form-horizontal" role="form" method="post">
                       Exam Attendance Edit
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

export default Edit;
