import React from "react";
import { Link } from "react-router-dom";

function Add() {
  document.title = "Bus Route | Monthly Route";
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
                      Bus Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr />
                  <div className="row">
                  <form class="form-horizontal" role="form" method="post">
                <div class="box-body">
                  <div class="row">
                    <div class="col-sm-12">
                        
                      <div class="month_block d-flex">
                        <div class="select_month col-xs-6 col-md-2">
                          <select
                            name="month"
                            id="month"
                            class="form-control select2" style={{marginBottom:"5px", width:"168px",}}
                          >
                            <option value="00">Select a Month</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>
                        </div>
                        <div class="col-xs-6 col-md-10">
                          <input
                            type="submit"
                            class="btn btn-success iss-mar"
                            value="Find Route"
                          />
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                
              </form>
              <div class="row p-5" style={{paddingLeft: "15px",paddingRight: "15px"}}>
                <div class="col-sm-12">
                  <table
                    id="mexample_route"
                    class="table"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Bus Name</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                        <th>13</th>
                        <th>14</th>
                        <th>15</th>
                        <th>16</th>
                        <th>17</th>
                        <th>18</th>
                        <th>19</th>
                        <th>20</th>
                        <th>21</th>
                        <th>22</th>
                        <th>23</th>
                        <th>24</th>
                        <th>25</th>
                        <th>26</th>
                        <th>27</th>
                        <th>28</th>
                        <th>29</th>
                        <th>30</th> <th>Total Distance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-title="#">1 </td>
                        <td data-title="">RJ14PC8196(Teoler School) </td>
                        <td data-title="Route Distance1">0.00 Km </td>
                        <td   id="m2" data-title="2">
                          0.00 Km
                        </td>
                        <td   id="m3" data-title="3">
                          0.00 Km
                        </td>
                        <td   id="m4" data-title="4">
                          0.00 Km
                        </td>
                        <td   id="m5" data-title="5">
                          0.00 Km
                        </td>
                        <td   id="m6" data-title="6">
                          0.00 Km
                        </td>
                        <td   id="m7" data-title="7">
                          0.00 Km
                        </td>
                        <td   id="m8" data-title="8">
                          0.00 Km
                        </td>
                        <td   id="m9" data-title="9">
                          0.00 Km
                        </td>
                        <td   id="m10" data-title="10">
                          0.00 Km
                        </td>
                        <td   id="m11" data-title="11">
                          0.00 Km
                        </td>
                        <td   id="m12" data-title="12">
                          0.00 Km
                        </td>
                        <td   id="m13" data-title="13">
                          0.00 Km
                        </td>
                        <td   id="m14" data-title="14">
                          0.00 Km
                        </td>
                        <td   id="m15" data-title="15">
                          0.00 Km
                        </td>
                        <td   id="m16" data-title="16">
                          0.00 Km
                        </td>
                        <td   id="m17" data-title="17">
                          0.00 Km
                        </td>
                        <td   id="m18" data-title="18">
                          0.00 Km
                        </td>
                        <td   id="m19" data-title="19">
                          0.00 Km
                        </td>
                        <td   id="m20" data-title="20">
                          0.00 Km
                        </td>
                        <td   id="m21" data-title="21">
                          0.00 Km
                        </td>
                        <td   id="m22" data-title="22">
                          0.00 Km
                        </td>
                        <td   id="m23" data-title="23">
                          0.00 Km
                        </td>
                        <td   id="m24" data-title="24">
                          0.00 Km
                        </td>
                        <td   id="m25" data-title="25">
                          0.00 Km
                        </td>
                        <td   id="m26" data-title="26">
                          0.00 Km
                        </td>
                        <td   id="m27" data-title="27">
                          0.00 Km
                        </td>
                        <td   id="m28" data-title="28">
                          0.00 Km
                        </td>
                        <td   id="m29" data-title="29">
                          0.00 Km
                        </td>
                        <td   id="m30" data-title="30">
                          0.00 Km
                        </td>
                        <td   id="arr">
                          0 Km
                        </td>
                      </tr>
                      <tr>
                        <td data-title="#">2 </td>
                        <td data-title=""></td>
                        <td data-title="Route Distance1">0.00 Km </td>
                        <td   id="m2" data-title="2">
                          0.00 Km
                        </td>
                        <td   id="m3" data-title="3">
                          0.00 Km
                        </td>
                        <td   id="m4" data-title="4">
                          0.00 Km
                        </td>
                        <td   id="m5" data-title="5">
                          0.00 Km
                        </td>
                        <td   id="m6" data-title="6">
                          0.00 Km
                        </td>
                        <td   id="m7" data-title="7">
                          0.00 Km
                        </td>
                        <td   id="m8" data-title="8">
                          0.00 Km
                        </td>
                        <td   id="m9" data-title="9">
                          0.00 Km
                        </td>
                        <td   id="m10" data-title="10">
                          0.00 Km
                        </td>
                        <td   id="m11" data-title="11">
                          0.00 Km
                        </td>
                        <td   id="m12" data-title="12">
                          0.00 Km
                        </td>
                        <td   id="m13" data-title="13">
                          0.00 Km
                        </td>
                        <td   id="m14" data-title="14">
                          0.00 Km
                        </td>
                        <td   id="m15" data-title="15">
                          0.00 Km
                        </td>
                        <td   id="m16" data-title="16">
                          0.00 Km
                        </td>
                        <td   id="m17" data-title="17">
                          0.00 Km
                        </td>
                        <td   id="m18" data-title="18">
                          0.00 Km
                        </td>
                        <td   id="m19" data-title="19">
                          0.00 Km
                        </td>
                        <td   id="m20" data-title="20">
                          0.00 Km
                        </td>
                        <td   id="m21" data-title="21">
                          0.00 Km
                        </td>
                        <td   id="m22" data-title="22">
                          0.00 Km
                        </td>
                        <td   id="m23" data-title="23">
                          0.00 Km
                        </td>
                        <td   id="m24" data-title="24">
                          0.00 Km
                        </td>
                        <td   id="m25" data-title="25">
                          0.00 Km
                        </td>
                        <td   id="m26" data-title="26">
                          0.00 Km
                        </td>
                        <td   id="m27" data-title="27">
                          0.00 Km
                        </td>
                        <td   id="m28" data-title="28">
                          0.00 Km
                        </td>
                        <td   id="m29" data-title="29">
                          0.00 Km
                        </td>
                        <td   id="m30" data-title="30">
                          0.00 Km
                        </td>
                        <td   id="arr">
                          0 Km
                        </td>
                      </tr>
                      <tr>
                        <td data-title="#">3 </td>
                        <td data-title=""></td>
                        <td data-title="Route Distance1">0.00 Km </td>
                        <td   id="m2" data-title="2">
                          0.00 Km
                        </td>
                        <td   id="m3" data-title="3">
                          0.00 Km
                        </td>
                        <td   id="m4" data-title="4">
                          0.00 Km
                        </td>
                        <td   id="m5" data-title="5">
                          0.00 Km
                        </td>
                        <td   id="m6" data-title="6">
                          0.00 Km
                        </td>
                        <td   id="m7" data-title="7">
                          0.00 Km
                        </td>
                        <td   id="m8" data-title="8">
                          0.00 Km
                        </td>
                        <td   id="m9" data-title="9">
                          0.00 Km
                        </td>
                        <td   id="m10" data-title="10">
                          0.00 Km
                        </td>
                        <td   id="m11" data-title="11">
                          0.00 Km
                        </td>
                        <td   id="m12" data-title="12">
                          0.00 Km
                        </td>
                        <td   id="m13" data-title="13">
                          0.00 Km
                        </td>
                        <td   id="m14" data-title="14">
                          0.00 Km
                        </td>
                        <td   id="m15" data-title="15">
                          0.00 Km
                        </td>
                        <td   id="m16" data-title="16">
                          0.00 Km
                        </td>
                        <td   id="m17" data-title="17">
                          0.00 Km
                        </td>
                        <td   id="m18" data-title="18">
                          0.00 Km
                        </td>
                        <td   id="m19" data-title="19">
                          0.00 Km
                        </td>
                        <td   id="m20" data-title="20">
                          0.00 Km
                        </td>
                        <td   id="m21" data-title="21">
                          0.00 Km
                        </td>
                        <td   id="m22" data-title="22">
                          0.00 Km
                        </td>
                        <td   id="m23" data-title="23">
                          0.00 Km
                        </td>
                        <td   id="m24" data-title="24">
                          0.00 Km
                        </td>
                        <td   id="m25" data-title="25">
                          0.00 Km
                        </td>
                        <td   id="m26" data-title="26">
                          0.00 Km
                        </td>
                        <td   id="m27" data-title="27">
                          0.00 Km
                        </td>
                        <td   id="m28" data-title="28">
                          0.00 Km
                        </td>
                        <td   id="m29" data-title="29">
                          0.00 Km
                        </td>
                        <td   id="m30" data-title="30">
                          0.00 Km
                        </td>
                        <td   id="arr">
                          0 Km
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>{" "}
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
