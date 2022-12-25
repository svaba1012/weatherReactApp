import React, { useEffect } from "react";
import { connect } from "react-redux";
import GeneralInfo from "./GeneralInfo";
import DayCard from "./DayCard";
import LocationInfo from "./LocationInfo";
import TabView from "./TabView";
import GraphInfo from "./GraphInfo";
import WindInfo from "./WindInfo";
import { getWeatherForecast } from "../actions";
import {
  extractTemps,
  extractHumidity,
  extractRain,
  extractWindSpeed,
  extractWindDeg,
} from "../utils";
import "./App.css";

function App(props) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        props.getWeatherForecast(
          location.coords.latitude,
          location.coords.longitude
        );
      },
      (err) => console.log(err)
    );
  }, []);

  const render = (data) => {
    if (!data) {
      return (
        <div>
          <h1>Loading...</h1>
          <p>Please wait a moment</p>
          <p>If the page isn't loading turn on location and refresh the page</p>
        </div>
      );
    }
    return (
      <div>
        <div className="flex">
          <div style={{ width: "30vw" }}>
            <GeneralInfo />
          </div>
          <div style={{ width: "30vw" }}>
            <LocationInfo />
          </div>
        </div>
        <div className="ui segment">
          <TabView tabs={["Temperature", "Humidity", "Chance of Rain", "Wind"]}>
            <GraphInfo
              arr={extractTemps(props.weather, props.day)}
              primCol="#E7f748"
              secCol="orange"
              min={-30}
              max={50}
              unit={"&#176;C"}
              key={0}
            />
            <GraphInfo
              arr={extractHumidity(props.weather, props.day)}
              primCol="#92cbdf"
              secCol="blue"
              min={0}
              max={100}
              unit={"%"}
              key={1}
            />
            <GraphInfo
              arr={extractRain(props.weather, props.day)}
              primCol="#92cbdf"
              secCol="blue"
              min={0}
              max={100}
              unit={"%"}
              key={2}
            />
            <WindInfo
              arrSpeed={extractWindSpeed(props.weather, props.day)}
              arrDeg={extractWindDeg(props.weather, props.day)}
              unit="km/h"
              key={3}
            />
          </TabView>
        </div>
        <div className="days-in-week">
          {props.weather.forecast.forecastday.map((el, id) => (
            <DayCard dayInfo={el} key={id} id={id} />
          ))}
        </div>
      </div>
    );
  };

  return <div className="ui container">{render(props.weather)}</div>;
}

const mapStateToProps = (state) => {
  return {
    weather: state.weatherForecast,
    day: state.selectedDayAndTime.day,
  };
};

export default connect(mapStateToProps, { getWeatherForecast })(App);
