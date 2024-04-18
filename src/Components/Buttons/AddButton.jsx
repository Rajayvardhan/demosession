import React from "react";
import { Link } from "react-router-dom";
function AddButton(props) {
  return (
    <div className="col-sm-4 add">
      <Link
        className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
        style={{ width:"175px" ,textAlign:"center",padding:"9px"}}
        to={props.path}>
        <i className="fa fa-plus"></i> {props.name}
        </Link>
    </div>
  );
}

export default AddButton;



