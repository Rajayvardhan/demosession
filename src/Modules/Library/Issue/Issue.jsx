import React from 'react'
import {Link} from "react-router-dom";

function Issue() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
           
              <div className="card-header pb-0">
                <div className="d-flex">
              <div className="col-sm-4 add">
              <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" style={{width:'auto'}} to="/library/issue/add"><i className="fa fa-plus"></i>  Issue a Books  </Link>
              </div>
              
              </div>
              <div class="col-lg-6 col-lg-offset-3 list-group" style={{marginLeft:"30%"}}>
                    <div class="list-group-item list-group-item-warning">
                        <form  class="form-horizontal" role="form" method="post" enctype="multipart/form-data">
                              <div class="form-group">
                                <div className="row p-3">
                                <label for="lid" class="col-sm-3 control-label">
                                    Library ID                                </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="lid" name="lid" value=""/>
                                </div>
                                <div class="col-sm-3">
                                    <input type="submit" class="btn btn-success iss-mar" value="Search"/>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
              <div>
                <hr />
              </div>
                <h5>All Issue Books</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Book</th>
                        <th>Serial No</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {students &&
                        students.map((u, i) => { */}
                          {/* return ( */}
                            <tr>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{}</td>
                              <td>
                                <Link to="/issue/edit"><i className="fa fa-edit" style={{fontSize:"18px"}}></i> </Link>
                                <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link>
                              </td>
                            </tr>
                          {/* ); */}
                        {/* })} */}
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

export default Issue;
