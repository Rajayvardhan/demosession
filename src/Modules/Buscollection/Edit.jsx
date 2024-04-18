import React from "react";

export default function Edit() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    //   setData({
    //     ...saveData,
    //     [name]: value,
    //   });
  };
  const savaeData = (e) => {};
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <h1 className="page-title"></h1>
            <div className="portlet light bordered">
              <div className="portlet-title">
                <div className="caption font-dark">
                  <h4 className="caption-subject bold uppercase mx-3">
                    Edit Details
                  </h4>
                </div>
              </div>
              <div className="portlet-body mx-3">
                <hr />
                <div className="row">
                  <div className="col-sm-10">
                    <form
                      className="form-horizontal"
                      role="form"
                      method="post"
                      encType="multipart/form-data"
                    >
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="name_id"
                            className="col-sm-2 control-label"
                          >
                            Name <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="name_id"
                              name="name"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="name_id"
                            className="col-sm-2 control-label"
                          >
                            Father-name <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="name_id"
                              name="name"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="name_id"
                            className="col-sm-2 control-label"
                          >
                            Class <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="name_id"
                              name="name"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="name_id"
                            className="col-sm-2 control-label"
                          >
                            Total-fees <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="name_id"
                              name="name"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="name_id"
                            className="col-sm-2 control-label"
                          >
                            Deposited-fees<span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="name_id"
                              name="name"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="name_id"
                            className="col-sm-2 control-label"
                          >
                            Due Fee <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="name_id"
                              name="name"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="name_id"
                            className="col-sm-2 control-label"
                          >
                            Selected-bus <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6" style={{ display: "flex" }}>
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="name_id"
                              name="name"
                            />
                            <button className="btn btn-success col-md-2 col-xs-12">
                              edit
                            </button>
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="name_id"
                            className="col-sm-2 control-label"
                          >
                            Route-distance <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="name_id"
                              name="name"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="name_id"
                            className="col-sm-2 control-label"
                          >
                            Select Bus fee (no of months i.e.2,3 or 5)*{" "}
                            <span className="text-red">*</span>
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="name_id"
                              name="name"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>

                      {/* <div className="form-group">
                          <div className="row">
                            <label htmlFor="photo" className="col-sm-2 control-label">
                              Photo
                            </label>
                            <div className="col-sm-6">
                              <div className="input-group image-preview">
                                <input
                                  type="text"
                                  className="form-control image-preview-filename"
                                  disabled="disabled"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="button"
                                    className="btn btn-default image-preview-clear"
                                    style={{ display: "none" }}
                                  >
                                    <span className="fa fa-remove"></span>
                                    Clear
                                  </button>
                                  <div className="btn btn-success image-preview-input" style={{width:"355px"}}>
                                    <span className="fa fa-repeat"></span>
                                    <span className="image-preview-input-title">
                                      File Browse
                                    </span>
                                    <input
                                      type="File"
                                      id="image"
                                      accept="image/png, image/jpeg, image/gif"
                                      name="photo"
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>
                            <span className="col-sm-4"></span>
                          </div>
                        </div> */}

                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="aadhar"
                            className="col-sm-2 control-label"
                          >
                            Deposite amount
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="aadhar"
                              name="aadhar"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="ssmid"
                            className="col-sm-2 control-label"
                          >
                            Student bar code
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="ssmid"
                              name="ssmid"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="policy"
                            className="col-sm-2 control-label"
                          >
                            payment-method
                          </label>
                          <div className="col-sm-6">
                            <select
                              className="form-control"
                              id="enquiry_class"
                              name="enquiry_class"
                            >
                              <option value="cash">Cash</option>
                              <option value="UPI">UPI</option>
                              <option value="Net-banking">Net-banking</option>
                            </select>
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <label
                            htmlFor="remarks"
                            className="col-sm-2 control-label"
                          >
                            Remarks
                          </label>
                          <div className="col-sm-6">
                            <input
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control"
                              id="remarks"
                              name="remarks"
                            />
                          </div>
                          <span className="col-sm-4 control-label"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8">
                          <button
                            type="submit"
                            className="btn btn-success add-student"
                            value="Add Student"
                            onClick={savaeData}
                          >
                            Update Student
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
