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
            <Link to="/busattendance"> Bus Attendance </Link>
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
              <div id="example1_wrapper" className="dataTables_wrapper form-inline no-footer" >
                <section class="panel">
                  <div class="panel-body profile-view-dis">
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
                            style={{width: "61.6667px"}}
                          >
                            #
                          </th>
                          <th
                            class="col-sm-2 sorting"
                            tabindex="0"
                            aria-controls="example1"
                            rowspan="1"
                            colspan="1"
                            aria-label="Name: activate to sort column ascending"
                            style={{width: "140.667px"}}
                          >
                            Name
                          </th>
                          <th
                            class="col-sm-3 sorting"
                            tabindex="0"
                            aria-controls="example1"
                            rowspan="1"
                            colspan="1"
                            aria-label="In: activate to sort column ascending"
                            style={{width: "216.667px"}}
                          >
                            In
                          </th>
                          <th
                            class="col-sm-4 sorting"
                            tabindex="0"
                            aria-controls="example1"
                            rowspan="1"
                            colspan="1"
                            aria-label="Out: activate to sort column ascending"
                            style={{width: "294.667px"}}
                          >
                            Out
                          </th>
                          <th
                            class="col-sm-5 sorting"
                            tabindex="0"
                            aria-controls="example1"
                            rowspan="1"
                            colspan="1"
                            aria-label="In Time: activate to sort column ascending"
                            style={{width: "139.667px"}}
                          >
                            In Time
                          </th>
                          <th
                            class="col-sm-6 sorting"
                            tabindex="0"
                            aria-controls="example1"
                            rowspan="1"
                            colspan="1"
                            aria-label="Out Time: activate to sort column ascending"
                            style={{width: "25.6667px"}}
                          >
                            Out Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="odd">
                          <td valign="top" colspan="6" class="dataTables_empty">
                            No data available in table
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
