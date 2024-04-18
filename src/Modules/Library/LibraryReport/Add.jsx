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
                      Report Details
                    </h4>
                  </div>
                  <hr style={{marginTop:"-5px"}}/>
                </div>
                <div class="box-body " style={{marginTop:"-23px"}}>
                  <div class="row">
                    <div class="col-sm-12">
                      <div className="row p-1">
                      <div class="form-group col-sm-2">
                        <label>Type</label>
                        <select name="type" id="type" class="form-control">
                          <option value="Both">Both</option>
                          <option value="Issue">Issue</option>
                          <option value="Return">Return</option>
                        </select>{" "}
                      </div>
                      <div class="form-group col-sm-2">
                        <label>Class</label>
                        <select
                          name="classesID"
                          id="classesID"
                          class="form-control"
                        >
                          <option value="0">Select Class</option>
                          <option value="all">All</option>
                          <option value="1">I</option>
                          <option value="5">II</option>
                          <option value="6">III</option>
                          <option value="7">IV</option>
                          <option value="8">V</option>
                          <option value="9">VI</option>
                          <option value="10">VII</option>
                          <option value="11">VIII</option>
                          <option value="12">IX</option>
                          <option value="14">X</option>
                          <option value="2">NUR</option>
                          <option value="3">PREP</option>
                          <option value="4">KG</option>
                          <option value="15">Dwps</option>
                          <option value="16">DPWIS,SIKAR</option>
                          <option value="17">JSP</option>
                          <option value="18">Euro school</option>
                          <option value="19">IMP</option>
                        </select>{" "}
                      </div>
                      <div class="form-group col-sm-2">
                        <label>Section</label>
                        <select
                          name="sectionID"
                          id="sectionID"
                          class="form-control"
                        >
                          <option value="0">Select Section</option>
                          <option value="2">A</option>
                          <option value="3">B</option>
                          <option value="4">C</option>
                          <option value="5">D</option>
                        </select>{" "}
                      </div>
                      <div class="form-group col-sm-1" id="dateDiv">
                        <label>Year</label>
                        <input
                          class="form-control"
                          name="year"
                          id="year"
                          value=""
                          type="text"
                        />
                      </div>
                      <div class="form-group col-sm-1" id="dateDiv">
                        <label>Month</label>
                        <input
                          class="form-control"
                          name="month"
                          id="month"
                          value=""
                          type="text"
                        />
                      </div>
                      <div class="form-group col-sm-1" id="selectDateDiv">
                        <label>Date</label>
                        <input
                          class="form-control"
                          name="date"
                          id="selectDate"
                          value=""
                          type="text"
                        />
                      </div>

                      <div class="col-sm-2">
                        <button
                          id="get_libreport"
                          class="btn btn-success"
                          style={{marginTop:"23px"}}
                        >
                          {" "}
                          Get Report
                        </button>
                      </div>
                      </div>
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
