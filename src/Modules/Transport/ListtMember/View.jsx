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
            <Link to="/listtmember"> Bus Listt Member </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            View
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div Id="hide-table">
              <h1 className="page-title"></h1>
              <div
                id="example1_wrapper"
                className="dataTables_wrapper form-inline no-footer"
              >
                <table
                  id="example1"
                  class="table table-striped table-bordered table-hover dataTable no-footer"
                  role="grid"
                  aria-describedby="example1_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        class="col-sm-1 sorting_asc"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="#: activate to sort column descending"
                        style={{width: "310.667px"}}
                      >
                        #
                      </th>
                      <th
                        class="col-sm-2 sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Student Name: activate to sort column ascending"
                        style={{width: "638.667px"}}
                      >
                        Student Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" class="odd">
                      <td
                        style={{fontSize: "20px"}}
                        data-title="#"
                        class="sorting_1"
                      >
                        1{" "}
                      </td>
                      <td style={{fontSize: "20px"}} data-title="Student Name">
                        Devendra Sunda{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
