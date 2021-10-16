import React from "react";
import { Link } from "react-router-dom";

const NowShowing = (props) => {
  const { id, name, year, genre, tomato, img } = props.show;
  return (
    <div className="col-lg-3 col-md-6">
      <div className="h-100 shadow rounded bg-light">
        <img className="img-fluid rounded-3" src={img} alt="" />
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="">{name}</h5>
            <h6>({year})</h6>
          </div>
          <small>{genre}</small>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mt-3">
              Popularity: <span className="fw-bold">{tomato}%</span>
            </p>

            <Link to="" className="btn btn-danger">
              Details <i className="fas fa-info-circle"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowShowing;
