import React from "react";
import "./App.css";
import errorImg from "./assets/ErrorPage.gif";
import Header from "../src/Home/components/Header";
import { useNavigate } from "react-router-dom";

const E404 = () => {
  const navigate = useNavigate();
  const gotToHomePage = () => {
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="contianer-fluid d-block p-5 mt-5 text-center">
        <div className="row">
          <div className="col-md-12">
            <h2>
              Error 404 : URL you are looking for is not avilable.. Sorry !!!
            </h2>
            <img
              src={errorImg}
              className="error-img"
              alt="Page Not Found Error Page"
            ></img>
          </div>
        </div>

        <button
          type="button"
          onClick={() => gotToHomePage()}
          className="btn btn-success btn-md button my-4"
        >
          Back To PrizmX
        </button>
      </div>
    </>
  );
};

export default E404;
