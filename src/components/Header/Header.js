import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import logo from "../../logo.png";

const Header = () => {
  const { user, logOut, googleSignIn } = useFirebase();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container">
          <Link className="navbar-brand fw-bold text-light fs-3" to="/home">
            <img
              src={logo}
              alt=""
              width="50"
              height="44"
              className="d-inline-block align-text-center me-2"
            />
            Cine<span className="text-danger"> World</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex fw-bold">
              <Link className="nav-link text-light" to="/movies">
                Movies
              </Link>
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
              {user.email && (
                <Link className="nav-link text-danger">
                  Hello,{user.displayName}{" "}
                </Link>
              )}

              {user.email ? (
                <Link className="nav-link text-light" onClick={logOut}>
                  Logout <i class="fas fa-sign-out-alt fw-normal"></i>
                </Link>
              ) : (
                <Link className="nav-link text-light" onClick={googleSignIn}>
                  Login <i className="fas fa-sign-in-alt fw-normal"></i>
                </Link>
              )}
              {/* <Link className="nav-link text-light" to="/login">
                Login <i className="fas fa-sign-in-alt fw-normal"></i>
              </Link> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
