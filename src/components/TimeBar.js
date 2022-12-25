import React from "react";
import { connect } from "react-redux";
import { selectDayAndHour } from "../actions";
import { extractTime } from "../utils";
import "./GraphInfo.css";
import "./App.css";

function TimeBar(props) {
  let day = props.day;
  day = day < 0 ? 0 : day;
  let timeBarStyle = {
    width: props.blockWidth * props.hours.length + "rem",
  };
  let timeBlockStyle = {
    width: 100 / props.hours.length + "%",
  };
  return (
    <div className="flex-cont clickable" style={timeBarStyle}>
      {props.hours.map((hour, id) => {
        return (
          <div
            className="text-center"
            style={timeBlockStyle}
            key={id}
            onClick={() => props.selectDayAndHour(day, id)}
          >
            {hour}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    day: state.selectedDayAndTime.day,
    hours: extractTime(state.weatherForecast, state.selectedDayAndTime.day),
  };
};

export default connect(mapStateToProps, { selectDayAndHour })(TimeBar);
