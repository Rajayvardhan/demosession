import React, { useState, useEffect } from 'react';
import { useParams  } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import axios from 'axios';
import { BaseURL } from '../../api/DataApis';

function View() {
  const params = useParams();
  let id=params.id;

  const [parents, setParents] = useState([]);

  const editFetch= async ()=>{
    const apiEndpoint = `${BaseURL}/parents/viewParent`;
    const response=  await axios.get(
      `${apiEndpoint}/${id}`
    );
    const data = await response.data;
    const result=data.parents;
    setParents(result);
  }

  useEffect(() => {
    editFetch();
  }, []);
  return (
    <>
      <Breadcrumb title="Parents" path="/parents" subtitle="View" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div id="printablediv">
                <section className="panel">
                 
                  <div className="profile-view-head">
                    <a href="#">
                      <img
                        className="imagev"
                        src="https://ctmirror-images.s3.amazonaws.com/wp-content/uploads/2021/01/dummy-man-570x570-1.png"
                        alt=""
                      />
                    </a>

                    <h5>{parents.name}</h5>
                    <p></p>
                  </div>
                  <div className="panel-body profile-view-dis">
                    <h3>Personal Information</h3>
                    <div className="row">
                      <div className="profile-view-tab">
                        <p>
                          <span>Father's Name </span>: {parents.father_name}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Mother's Name </span>: {parents.mother_name}
                        </p>
                      </div>
                      <div className="profile-view-tab">
                        <p>
                          <span>Phone </span>: {parents.phone}
                        </p>
                      </div>  
                      <div className="profile-view-tab">
                        <p>
                          <span>Username </span>: {parents.username}
                        </p>
                      </div>

                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
