import React from 'react';

function Shift_Model() {
  return (
    <>
      <div className="modal fade bd-example-modal-lg shift-modal" id="ModalShift" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-bs-backdrop="static">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content w-75">
                          <div className="modal-header">
                            <h4 className="modal-title" id="myLargeModalLabel">SHIFT DETAILS</h4>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                          <form className="form-horizontal" role="form" method="post">
                        <div className="form-group">
                          <div className="row">
                          <label
                            htmlFor="shift_name"
                            className="col-sm-3 control-label"
                          >
                            Shift Name<span className="text-red">*</span>
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="shift_name"
                              name="shift_name"
                              value=""
                            />
                          </div>
                          </div>
                        </div>
                        <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="classInTime"
                            className="col-sm-3 control-label"
                          >
                            Shift In Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift In Start Time"
                              className="form-control"
                              id="shiftInSTime"
                              name="shiftInSTime"
                              value=""
                            />
                          </div>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift In End Time"
                              className="form-control"
                              id="shiftInETime"
                              name="shiftInETime"
                              value=""
                            />
                          </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                          <label
                            htmlFor="classOutTime"
                            className="col-sm-3 control-label"
                          >
                            Shift Return Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift Return Start Time"
                              className="form-control"
                              id="shiftSTime"
                              name="shiftSTime"
                              value=""
                            />
                          </div>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift Return End Time"
                              className="form-control"
                              id="shiftETime"
                              name="shiftETime"
                              value=""
                            />
                          </div>
                          </div>
                        </div>
                        <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="classOutTime"
                            className="col-sm-3 control-label"
                          >
                            Shift Out Time <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift Out Start Time"
                              className="form-control"
                              id="shiftOutSTime"
                              name="shiftOutSTime"
                              value=""
                            />
                          </div>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              placeholder="Shift Out End Time"
                              className="form-control"
                              id="shiftOutETime"
                              name="shiftOutETime"
                              value=""
                            />
                          </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Add Shift"
                            />
                          </div>
                        </div>
                      </form>
                          </div>
                        </div>
                      </div>
                    </div> 
    </>
  );
}

export default Shift_Model;
