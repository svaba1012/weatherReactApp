import React from "react";
import { connect } from "react-redux";
import "./GeneralInfo.css";
import { getPeriodInfo } from "../utils";

function GeneralInfo(props) {
  return (
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={props.icon} className="general-pic" alt="slika" />
          </div>
          <div className="content">
            <div className="header">{props.temp_c} &#176;C</div>

            <div className="description">
              <p>Humidity: {props.humidity}%</p>
              <p>Wind: {props.wind} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  let day = state.selectedDayAndTime.day;
  let hour = state.selectedDayAndTime.hour;

  let periodInfo = getPeriodInfo(state.weatherForecast, day, hour);
  if (!hour && day >= 0) {
    return {
      temp_c: periodInfo.avgtemp_c,
      humidity: periodInfo.avghumidity,
      wind: periodInfo.maxwind_kph,
      icon: periodInfo.condition.icon,
    };
  }

  return {
    temp_c: periodInfo.temp_c,
    humidity: periodInfo.humidity,
    wind: periodInfo.wind_kph,
    icon: periodInfo.condition.icon,
  };
};

export default connect(mapStateToProps)(GeneralInfo);
