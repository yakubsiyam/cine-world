import React, { useEffect, useState } from "react";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import banner5 from "../../images/banner5.jpg";
import banner6 from "../../images/banner6.jpg";
import NowShowing from "../NowShowing/NowShowing";

const Home = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("./moviedata.json")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);
  const nowShows = shows.slice(0, 4);

  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div
          id="carouselExampleIndicators"
          className="col-md-7 carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={banner3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={banner4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={banner5} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={banner6} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-md-4 text-end px-5 me-5">
          <h1 className="text-danger fs-1">Welcome.</h1>
          <p className="text-dark">Search for your favourite movie</p>
          <div className="input-group mb-3 ps-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search Movies"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-danger"
              type="button"
              id="button-addon2"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-danger text-center">Now Showing</h2>
        <div className="mt-2 row justify-content-between g-4">
          {nowShows.map((nowShow) => (
            <NowShowing key={nowShow.id} show={nowShow}></NowShowing>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
