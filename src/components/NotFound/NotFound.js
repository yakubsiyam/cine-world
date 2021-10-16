import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/notfound.png";

const NotFound = () => {
  return (
    <div className="row align-items-center justify-content-center container-fluid my-4">
      <img className="col-md-6 w-50 mx-auto" src={notfound} alt="" />
      <div className="col-md-6">
        <h2 className="text-danger text-center mb-4">Page Not Found!!</h2>
        <Link
          to="/home"
          className="col-md-4 btn btn-danger btn-lg d-block mx-auto my-4"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
