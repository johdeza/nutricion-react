import React from "react";
import Mynavbar from "../../Sharedcomponents/Mynavbar.js";
import Myfooter from "../../Sharedcomponents/Myfooter.js";

const Home = () => {
  return (
    <div>
      <Mynavbar></Mynavbar>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light">NUTRICIÓN</h1>
              <p className="lead">
                Conviértelo en tu estilo de vida, no en una obligación.
              </p>
            </div>
          </div>
        </div>
      </header>
      <Myfooter></Myfooter>
    </div>
  );
};

export default Home;
