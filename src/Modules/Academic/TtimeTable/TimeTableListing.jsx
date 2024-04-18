import React from 'react'
import AddButton from "../../../Components/Buttons/AddButton";
const TimeTableListing = () => {
  return (
    <div>
       <div className="card-body">

       <select className= "select1" style={{padding:"6px 10px",borderRadius:"40px",}} placeholder="select type" >
        <option>Teacher Name</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
       </select>
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <div class="tab-content">
                      <div id="all" class="tab-pane active">
                        <div id="hide-table-2">
                          <table id="table" class="table table-striped ">
                            <tbody>
                              <tr>
                                <td>MONDAY</td>
                              </tr>
                              <tr>
                                <td>TUESDAY</td>
                              </tr>
                              <tr>
                                <td>WEDNESDAY</td>
                              </tr>
                              <tr>
                                <td>THURSDAY</td>
                              </tr>
                              <tr>
                                <td>FRIDAY</td>
                              </tr>
                              <tr>
                                <td>SATURDAY</td>
                              </tr>
                              <tr>
                                <td>SUNDAY</td>
                              </tr>{" "}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </table>
                </div>
              </div>
    </div>

  )
}

export default TimeTableListing
