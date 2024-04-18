import React from "react";
import { Link } from "react-router-dom";

const View = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ms-4">
            <i className="fa fa-laptop"></i>
            <Link to="/"> Dashboard</Link>
            {/* <i className="fa fa-circle"></i> */}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/students"> Student </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            View
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div id="printablediv">
                <section className="panel">
                  {/* <h4 className="mx-3">Student Details</h4>
                    <hr /> */}
                  <div className="profile-view-head">
                    <a href="#">
                      <img
                        className="imagev"
                        src="http://localhost/schoolcode/uploads/images/defualt.png"
                        alt=""
                      />
                    </a><br /><br /><br /><br /><br />


                    
                  </div>
                  <div class="panel-body profile-view-dis">
                <h1>Personal Information</h1>
                <div class="row">
                    <div class="profile-view-tab">
                        <p><span>Date Of Birth </span>: 03 Jan 2022</p>
                    </div>
                    <div class="profile-view-tab">
                        <p><span>Joining Date </span>: 01 Jan 1970</p>
                    </div>
                    <div class="profile-view-tab">
                        <p><span>Gender </span>: Male</p>
                    </div>
                    <div class="profile-view-tab">
                        <p><span>Religion </span>: </p>
                    </div>
                    <div class="profile-view-tab">
                        <p><span>Email </span>: </p>
                    </div>
                    <div class="profile-view-tab">
                        <p><span>Phone </span>: 9460156522</p>
                    </div>
                    <div class="profile-view-tab">
                        <p><span>Address </span>: </p>
                    </div>

                    <div class="profile-view-tab">
                        <p><span>Username </span>: 9460156522</p>
                    </div>

                </div>

                <h1>Attendance Information</h1>

                <div class="row">
                    <div class="col-sm-12">
                        <div id="hide-table">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>                                    </tr>
                                </thead>
                                                            </table>
                        </div>
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
};

export default View;
