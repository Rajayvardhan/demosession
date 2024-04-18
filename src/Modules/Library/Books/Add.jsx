import React from "react";
import { Link } from "react-router-dom";

function Add() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Books Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form class="form-horizontal" role="form" method="post" style={{marginTop:"-23px"}}>
                        <div class="form-group">
                        <div className="row">
                          <label for="book" class="col-sm-2 control-label">
                            Name{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="book"
                              name="book"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="author" class="col-sm-2 control-label">
                            Author{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="author"
                              name="author"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label
                            for="subject_code"
                            class="col-sm-2 control-label"
                          >
                            Subject code{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="subject_code"
                              name="subject_code"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="price" class="col-sm-2 control-label">
                            Price{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="price"
                              name="price"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                        <div className="row">
                          <label for="quantity" class="col-sm-2 control-label">
                            Quantity{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="quantity"
                              name="quantity"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                          <div className="row">
                          <label for="rack" class="col-sm-2 control-label">
                            Rack No{" "}
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="rack"
                              name="rack"
                              value=""
                            />
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              class="btn btn-success"
                              value="Add Book"
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

export default Add;
