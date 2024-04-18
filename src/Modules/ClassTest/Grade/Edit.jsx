import React from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  document.title = "Grade | Edit";

  let navigate = useNavigate();
  const redirect = () => {
    let path = `/viho/grade`;
    navigate(path);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
              <div className="portlet-title row">
                  <div className="caption font-dark col-md-10">
                    <h4 className="caption-subject bold uppercase mx-3">
                   Edit Grade Details
                    </h4>
                  </div>
                  <div className="caption font-dark col-md-2">
                    <h5 className="caption-subject bold uppercase mx-3">
                      <button className="btn btn-success" onClick={redirect}>
                        Back
                      </button>
                    </h5>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                      >
                        <div class="form-group">
                          <div className="row">
                            <label for="grade" class="col-sm-2 control-label">
                              Grade Name
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="grade"
                                name="grade"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label for="point" class="col-sm-2 control-label">
                              Grade Point
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="point"
                                name="point"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="gradefrom"
                              class="col-sm-2 control-label"
                            >
                              Mark From
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="gradefrom"
                                name="gradefrom"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="gradeupto"
                              class="col-sm-2 control-label"
                            >
                              Mark Upto
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                id="gradeupto"
                                name="gradeupto"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label for="note" class="col-sm-2 control-label">
                              Note
                            </label>
                            <div class="col-sm-6">
                              <textarea
                                style={{resize:"none"}}
                                class="form-control"
                                id="note"
                                name="note"
                              ></textarea>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              class="btn btn-success"
                              value="Update Grade"
                            />
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
    </>
  );
}

export default Edit;
