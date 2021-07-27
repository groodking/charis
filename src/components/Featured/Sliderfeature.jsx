import React from "react";
import "./Featured.css";
import Swiperslide from './Swiperslide';

function Sliderfeature() {
  return (
    <>
      <div className="fbackg container-fluid">
        <div className="fcircle"></div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 ftextbox  ">
            <h2>Jute Bags</h2>
            <p>
              Jute is a long, soft, shiny bast fiber that can be spun into
              coarse, strong threads. It is produced from flowering plants in
              the genus Corchorus, which is in the mallow family Malvaceae. The
              primary source of the fiber is Corchorus olitorius, but such fiber
              is considered inferior to that derived from Corchorus capsularis.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 fsliders  ">
              <Swiperslide/>
          </div>
           
        </div>
      </div>
    </>
  );
}

export default Sliderfeature;
