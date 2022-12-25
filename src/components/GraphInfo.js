import React from "react";
import TimeBar from "./TimeBar";
import "./GraphInfo.css";
import "./App.css";

function GraphInfo({ arr, secCol, primCol, min, max, unit }) {
  let blockStyle = {
    height: "100px",
    backgroundColor: primCol,
    width: 100 / arr.length + "%",
  };

  let flexBoxStyle = {
    width: 4 * arr.length + "rem",
  };

  let measureBlockStyle = {
    width: 100 / arr.length + "%",
  };

  return (
    <div>
      <div className="flex-cont" style={flexBoxStyle}>
        {arr.map((el, id) => {
          return (
            <div
              className="text-center"
              style={measureBlockStyle}
              dangerouslySetInnerHTML={{ __html: el + unit }}
              key={id}
            ></div>
          );
        })}
        {arr.map((el, id) => (
          <div style={blockStyle} key={id}>
            <div
              style={{
                height: 100 - ((el - min) / (max - min)) * 100 + "%",
                backgroundColor: "white",
                borderBottomWidth: "4px",
                borderBottomStyle: "solid",
                borderBottomColor: secCol,
              }}
            ></div>
          </div>
        ))}
      </div>
      <TimeBar blockWidth={4} />
    </div>
  );
}

export default GraphInfo;
