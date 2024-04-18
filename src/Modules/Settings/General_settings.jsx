import React from 'react'

export default function General_settings() {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <h1 className="page-title"></h1>
          <div className="portlet light bordered">
          <div className="portlet-title row">
              <div className="caption font-dark col-md-10">
                <h4 className="caption-subject bold uppercase mx-3">
                  Genral-setting
                </h4>
              </div>
              <div className="caption font-dark col-md-2">
                <h5 className="caption-subject bold uppercase mx-3">
                  {/* <button className="btn btn-success" onTouchMove={redirect}>
                    Back
                  </button> */}
                </h5>
              </div>
            </div>
            <div className="portlet-body mx-3">
              <hr style={{marginTop:"-10px"}} />
              <div className="row">
                <div className="col-sm-12">
                  <form
                    className="form-horizontal"
                    role="form"
                    method="post"
                    style={{marginTop:"-23px"}}
                  >
                  
                   
                   
                    <div className="form-group">
                      <div className="row">
                        <label htmlFor="exam" class="col-sm-2 control-label">
                        Site Title{" "}
                        </label>
                        <div className="col-sm-6">
                          <input 
                            type="text"
                            class="form-control"
                            id="exam"
                            name="site-title"
                            value= ""
                            
                          />
                        </div>
                        <span class="col-sm-4 control-label"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <label htmlFor="exam" class="col-sm-2 control-label">
                          Phone no.{" "}
                        </label>
                        <div className="col-sm-6">
                          <input 
                            type="text"
                            class="form-control"
                            id="exam"
                            name="phone"
                            value= ""
                            
                          />
                        </div>
                        <span class="col-sm-4 control-label"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <label htmlFor="exam" class="col-sm-2 control-label">
                          System email{" "}
                        </label>
                        <div className="col-sm-6">
                          <input 
                            type="email"
                            class="form-control"
                            id="exam"
                            name="email"
                            value= ""
                            
                          />
                        </div>
                        <span class="col-sm-4 control-label"></span>
                      </div>
                    </div>
                    <div class="form-group">
                          <div className="row">
                            <label htmlFor="note" class="col-sm-2 control-label">
                            auto invoice generate
                            </label>
                            <div class="col-sm-6">
                              <select value= ""
                                style={{ resize: "none" }}
                                class="form-control"
                                id="note"
                                name="note"
                               
                              >
                              <option>no</option>
                          <option value="1">yes</option>
                          <option value="2">no</option>


                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                      <div className="row">
                        <label htmlFor="exam" class="col-sm-2 control-label">
                          Currency code{" "}
                        </label>
                        <div className="col-sm-6">
                          <input 
                            type="email"
                            class="form-control"
                            id="exam"
                            name="email"
                            value= ""
                            // placeholder='RS'
                            
                          />
                        </div>
                        <span class="col-sm-4 control-label"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <label htmlFor="exam" class="col-sm-2 control-label">
                          Currency symbol{" "}
                        </label>
                        <div className="col-sm-6">
                          <input 
                            type="email"
                            class="form-control"
                            id="exam"
                            name="email"
                            value= ""
                            
                          />
                        </div>
                        <span class="col-sm-4 control-label"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <label htmlFor="exam" class="col-sm-2 control-label">
                          Footer{" "}
                        </label>
                        <div className="col-sm-6">
                          <input 
                            type="email"
                            class="form-control"
                            id="exam"
                            name="email"
                            value= ""
                            
                          />
                        </div>
                        <span class="col-sm-4 control-label"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <label htmlFor="exam" class="col-sm-2 control-label">
                          Address{" "}
                        </label>
                        <div className="col-sm-6">
                          <input 
                            type="email"
                            class="form-control"
                            id="exam"
                            name="email"
                            value= ""
                            
                          />
                        </div>
                        <span class="col-sm-4 control-label"></span>
                      </div>
                    </div>
                    <div class="form-group">
                          <div className="row">
                            <label htmlFor="note" class="col-sm-2 control-label">
                            Default Attendance
                            </label>
                            <div class="col-sm-6">
                              <select value= ""
                                style={{ resize: "none" }}
                                class="form-control"
                                id="note"
                                name="note"
                               
                              >
                              <option>ENGLISH</option>
                          <option value="1">ENGLISH</option>
                          <option value="2">HINDI</option>


                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label htmlFor="note" class="col-sm-2 control-label">
                            Default Attendence
                            </label>
                            <div class="col-sm-6">
                              <select value= ""
                                style={{ resize: "none" }}
                                class="form-control"
                                id="note"
                                name="note"
                               
                              >
                              <option>Select Attendance system</option>
                          <option value="1">Per Daywise Attendase</option>
                          <option value="2">Subjectwise Attendance</option>


                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label htmlFor="note" class="col-sm-2 control-label">
                            Default accademic year
                            </label>
                            <div class="col-sm-6">
                              <select value= ""
                                style={{ resize: "none" }}
                                class="form-control"
                                id="note"
                                name="note"
                               
                              >
                              <option>no</option>
                          <option value="1">yes</option>
                          <option value="2">no</option>


                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label htmlFor="note" class="col-sm-2 control-label">
                            Note
                            </label>
                            <div class="col-sm-6">
                              <select value= ""
                                style={{ resize: "none" }}
                                class="form-control"
                                id="note"
                                name="note"
                               
                              >
                              <option>no</option>
                          <option value="1">yes</option>
                          <option value="2">no</option>


                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                            <div className="row px-3">
                              <label
                                for="photo"
                                class="col-sm-2 control-label col-md-2"
                              >
                                Logo
                                <i
                                  class="fa fa-question-circle"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="Download the teacher sample csv file first then see the format and make a copy of that file and add your data with exact format which is used in our csv file then upload the file."
                                ></i>
                              </label>
                              {/* <div class="col-sm-2 col-md-2">
                            <input
                              class="form-control"
                              id="uploadFile"
                              placeholder="Choose File"
                              disabled=""
                            />
                          </div> */}

                              <div class="col-sm-4">
                                <div
                                  class="input-group image-preview"
                                  data-original-title=""
                                  title=""
                                >
                                  <input
                                    style={{ background: "gray" }}
                                    type="text"
                                    class="form-control image-preview-filename"
                                    disabled=""
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default image-preview-clear"
                                      style={{ display: "none" }}
                                    >
                                      <span class="fa fa-remove"></span>Clear
                                    </button>
                                    <div
                                      class="btn btn-success image-preview-input"
                                      style={{ marginLeft: "-15px" }}
                                    >
                                      <span class="fa fa-repeat"></span>
                                      <span class="image-preview-input-title">
                                        File Browse
                                      </span>
                                      <input
                                        type="file"
                                        id="image"
                                        accept="image/png, image/jpeg, image/gif"
                                        name="photo"
                                      />
                                    </div>
                                  </span>
                                </div>
                              </div>

                              
                              
                            </div>
                          </div>

                          <div className="form-group">
                      <div className="row">
                        <label htmlFor="exam" class="col-sm-2 control-label">
                          Mark-Setting{" "}
                        </label>
                        <div className="col-sm-6">
                        <input type="checkbox"  name="final marks" id="" />final marks <br />
                        <input type="checkbox" name="final marks" id="" />P.A 1 <br />
                        <input type="checkbox"  name="final marks" id="" />Half yearly <br />
                        <input type="checkbox"  name="final marks" id="" /> P.A <br />
                        <input type="checkbox"  name="final marks" id="" /> VIVA <br />
                        
                        </div>
                        <span class="col-sm-4 control-label"></span>
                      </div>
                    </div>

                  
                  
                   
                   
                
                 
                    <span class="col-sm-4 control-label"></span>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4">
                        <input
                          type="submit"
                          className="btn btn-success"
                          value="Add Exam"
                       
                        />
                        </div>
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
  )
}
