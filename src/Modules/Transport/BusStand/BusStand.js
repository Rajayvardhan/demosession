import React from 'react'
import { Link } from 'react-router-dom'
const BusStand = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
        
          <div className="card">
         
            <div className="card-header pb-0">
            <div className="col-sm-4 add">
                    <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/transport/busstand/add"
                    >
                      <i className="fa fa-plus"></i> Add  Bus Stand{" "}
                    </Link>
                  </div>
              <div className="d-flex">
            </div>
            <div>
              <hr />
            </div>
              <h5>Bus Stands</h5>
            </div>
            <div className="card-body">
           
              <div className="table-responsive">
                <table className="display dataTable" id="advance-1">
                  <thead>
                    <tr>
                      <th>Sr.no</th>
                      <th>Stand Name</th>
                      <th>Bus No.</th>
                      <th>Monthly Fees</th>
                      {/* <th>Phone</th> */}
                      {/* <th>Email</th> */}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                        
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                            <td>
                              <Link to={`/parents/edit`}><i className="fa fa-edit" style={{fontSize:"18px"}}></i> </Link>
                              <Link to={`/parents/view`}> <i className="fa fa-eye" style={{fontSize:"18px"}}></i> </Link>
                              <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link>
                            </td>
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
  )
}

export default BusStand
