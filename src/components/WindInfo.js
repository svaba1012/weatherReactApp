import React from "react";
import "./GraphInfo.css";
import TimeBar from "./TimeBar";

const WIND_COEF = 30;
const WIND_BASE = 15;

function WindInfo({ arrSpeed, arrDeg, unit }) {
  let windInfoStyle = { width: 5 * arrSpeed.length + "rem" };
  let windSpeedStyle = {
    width: 100 / arrSpeed.length + "%",
    textAlign: "center",
  };
  let windDirectionStyle = {
    ...windSpeedStyle,
    height: "100px",

    lineHeight: "120px",
  };
  return (
    <div>
      <div className="flex-cont" style={windInfoStyle}>
        {arrSpeed.map((el, id) => {
          return (
            <div
              style={windSpeedStyle}
              dangerouslySetInnerHTML={{ __html: el + unit }}
              key={id}
            ></div>
          );
        })}
        {arrDeg.map((el, id) => {
          let windArrowStyle = {
            transform:
              "rotate(" +
              el +
              "deg) scale(" +
              (1 + (arrSpeed[id] - WIND_BASE) / WIND_COEF) +
              ")",
            fontSize: "3rem",
          };
          return (
            <div style={windDirectionStyle} key={id}>
              <i className="fa-solid fa-arrow-up " style={windArrowStyle}></i>
            </div>
          );
        })}
      </div>
      <TimeBar blockWidth={5} />
    </div>
  );
}

export default WindInfo;
