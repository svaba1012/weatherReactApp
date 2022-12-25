import React from "react";
import { connect } from "react-redux";
import { getPeriodInfo, getDayInWeek } from "../utils";

function LocatioInfo(props) {
  return (
    <div className="border" style={{ textAlign: "right" }}>
      <div>
        <h2>{props.city}</h2>
        <h4>{props.day + " " + props.hour}</h4>
        <h3>{props.desc}</h3>
      </div>
    </div>
  );
}

const mapStateToProp = (state) => {
  let city = state.weatherForecast.location.name;
  let dayId = state.selectedDayAndTime.day;
  let hour = state.selectedDayAndTime.hour;
  let desc = getPeriodInfo(state.weatherForecast, dayId, hour).condition.text;

  hour = hour ? hour + ":00" : "";
  let day = getDayInWeek(dayId);
  return { city, day, hour, desc };
};

export default connect(mapStateToProp)(LocatioInfo);
