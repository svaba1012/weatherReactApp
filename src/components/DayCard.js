import React from "react";
import { connect } from "react-redux";
import { getDayInWeek } from "../utils";
import { selectDayAndHour } from "../actions";
import "./DayCard.css";
import "./App.css";

function DayCard(props) {
  return (
    <div
      className="card-in-week border clickable"
      onClick={() => props.selectDayAndHour(props.id, null)}
    >
      <div className="day-in-week">
        {getDayInWeek(props.id).substring(0, 3)}
      </div>
      <img
        src={props.dayInfo.day.condition.icon}
        alt="icon"
        className="img-in-week"
      />
      <div className="temp-in-week">
        <span>{props.dayInfo.day.maxtemp_c}&#176;C</span>
        <span style={{ color: "grey" }}>
          {" " + props.dayInfo.day.mintemp_c}&#176;C
        </span>
      </div>
    </div>
  );
}

export default connect(null, { selectDayAndHour })(DayCard);
