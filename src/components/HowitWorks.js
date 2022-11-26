import React from "react";
import HowData from "./HowDataFile";

function HowitWorks() {
  return (
    <section id="howitworks">
      <div className="howitworks-container" id="#howitworks-container">
        <h1 className="heading">How it works</h1>
        <div className="howitworks-inner">
          {HowData.map((data) => {
            const { heading, img, text, number, color } = data;

            return (
              <div className="how-item-container">
                <div className="how-item">
                  <div className="how-img">
                    <img src={img} alt="" />
                  </div>
                  <div className="how-item-content">
                    <h3 className="item-heading">{heading}</h3>
                    <p>{text}</p>
                    <div
                      className="circle"
                      style={{ background: color, color: "white" }}
                    >
                      <p>{number}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowitWorks;
