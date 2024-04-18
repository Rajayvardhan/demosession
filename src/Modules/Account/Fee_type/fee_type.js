import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import request from "../../../Apis/request";
import axios from "axios";
import { BaseURL, schoolyearID } from "../../../api/DataApis";
// import PPinvoice from "./PPinvoice";
function Fee_type() {
  const [Subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const [FeeLists, setFeeLists] = useState([]);
  const [selectClassid, setSelectClassid] = useState("");
  const [loading, setLoading] = useState(false);
  const [Tenure, setTenure] = useState([]);

  const apiEndpoint = `${BaseURL}/feetypes/getFeetypes`;
  document.title = "Fee Type";

  const SelectClassHandler = (e) => {
    setSelectClassid(e.target.value);
  };

  const FetchFeeData = async (classesID) => {
    setLoading(true);

    const url = classesID
      ? `${BaseURL}/feetypes/getFeetypes/${classesID}`
      : apiEndpoint;

    try {
      const res = await request({
        url: url,
        method: "POST",
        data: JSON.stringify({
          schoolyearID: schoolyearID,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      console.log("res", res);

      if (res && res.fee_list) {
        setFeeLists(res.fee_list);
        setClasses(res.classes);
      }

      if (res && res.tenure) {
        setTenure(res.tenure);
      }

      console.log("FeeLists", FeeLists);
      console.log("Tenure", Tenure);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchFeeData(selectClassid);
  }, [selectClassid]);  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <div className="col-sm-4 add">
                  <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" style={{width:'auto'}} to="/account/feetypes/add"><i className="fa fa-plus"></i>  Add Fee Type </Link>
                    {/* <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/marks/add"
                    >
                      <i className="fa fa-plus"></i> Add a Mark{" "}
                    </Link> */}
                      <div className="col-sm-4 drop pull-right drop-marg col-lg-2 col-md-2 col-xs-12">
                    <select onChange="" className="form-control text-center" style={{marginLeft: "632px",borderRadius:"34px",marginTop: "-36px", width:"577%",
                  border:"-1px "}}>
                      <option value="">Select class</option>
                      { classes && classes.map((classes) => {
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}
                          >
                            {classes.classes}
                          </option>
                        );
                      })}
                      {/* <option value="-1">View All</option> */}
                      {/* {classes.map((classes) => {
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}
                          >
                            {classes.classes}
                          </option>
                        );
                      })} */}
                    </select>
                  </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>Fee types</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Month</th>
                        <th>Fee Type</th>
                        <th>Fee Amount Regular</th>
                        <th>Fee Amount Repeat</th>
                        <th>Order</th>
                       <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                    {FeeLists &&
  FeeLists.map((e, i) => {
    const result = classes.find(item => item.classesID === e.class_id);
    console.log("result", result); // Add this line for debugging
    console.log("result", result);
    console.log("e.class_id", e.class_id);
    return (
      <tr key={e.subfeetype_id}>
        <td>{i + 1}</td>
        <td>{e.fee_name}</td>
        <td>{result ? result.classes : ''}</td> {/* Change this line */}
        <td>{result ? result.name : ''}</td>
        <td>{e.fee_tenure === '1' ? 'General' : e.fee_tenure === '0' ? 'Optional' : ''}</td>
        <td>{e.fee_amount_old}</td>
        <td>{e.fee_amount}</td>
        <td>{e.display_order}</td>
        <td>
          <Link to="/transportmember/add">
            <i className="fa fa-plus" style={{ fontSize: "18px" }}></i>{" "}
          </Link>
          <Link to="/transportmember/view">
            <i className="fa fa-check-square-o" style={{ fontSize: "18px" }}></i>{" "}
          </Link>
          <Link to="/transportmember/edit">
            <i className="fa fa-edit" style={{ fontSize: "18px" }}></i>{" "}
          </Link>
          <Link>
            {" "}
            <i className="fa fa-trash" style={{ fontSize: "18px" }}></i>
          </Link>
        </td>
      </tr>
    );
  })}

                      {/* ); */}
                      {/* })} */}
                    </tbody>
                    <tfoot>
                      <tr>
                    </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fee_type;
