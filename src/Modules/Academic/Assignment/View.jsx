import React from 'react';
import { Link } from "react-router-dom";

function View() {
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
            <Link to="/assignment"> Assignment </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
           View
          </li>
        </ol>
      </nav>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
         
            
            <div className="card-body">
              <div className="table-responsive">
                <table className="display dataTable" id="advance-1">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student</th>
                      <th>Roll</th>
                      <th>Section</th>
                      <th>Submission Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                          <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
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

export default View;
