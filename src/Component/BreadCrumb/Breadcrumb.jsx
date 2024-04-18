import React from 'react';
import {Link} from "react-router-dom";

function Breadcrumb(props) {
  // console.log("title", props.title);
  return (
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item ms-4">
        <i className="fa fa-laptop"></i>
        <Link to="/"> Dashboard</Link>
        {/* <i className="fa fa-circle"></i> */}
      </li>
      {props.title &&
      <li className="breadcrumb-item active" aria-current="page">
        {props.path?<Link to={props.path}>{props.title} </Link>:props.title}
      </li>}
      {props.subtitle && 
      <li className="breadcrumb-item active" aria-current="page">
       {props.subtitle}
      </li> }
    </ol>
  </nav>
  );
}

export default Breadcrumb;
