import React from 'react'


    
    function Backup() {
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
                          Backup Details
                        </h4>
                      </div>
                    </div>
    
                    <div class="box-body">
                      <div class="row">
                        <div class="col-sm-12">
                          <div className="row">
                            <form
                              action="http://localhost/schoolcode/bulkimport/teacher_bulkimport"
                              class="form-horizontal"
                              role="form"
                              method="post"
                              enctype="multipart/form-data"
                            >
                              <div class="form-group">
                                <div className="row px-3">
                                  <label
                                    for="photo"
                                    class="col-sm-2 control-label col-md-2"
                                  >
                                    backup-database &nbsp;
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
    
                                
    
                                 
                                  <div class="col-md-3">
                                    <a
                                      class="btn btn-info"
                                      href="http://localhost/schoolcode/assets/csv/sample_teacher.csv"
                                    >
                                      <i class="fa fa-download"></i> Download mysql
                                    </a>
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
          </div>
        </>
      );
    }
    
    export default Backup;
    
    