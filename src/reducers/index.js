import { combineReducers } from "redux";

const getWeatherForecastReducer = (oldWeather = null, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_FORECAST":
      return action.payload;
    default:
      return oldWeather;
  }
};

const selectDayAndHour = (
  selectedDayAndTime = { day: -1, hour: undefined },
  action
) => {
  switch (action.type) {
    case "SELECT_DAY_AND_TIME":
      return action.payload;
    default:
      return selectedDayAndTime;
  }
};

export default combineReducers({
  weatherForecast: getWeatherForecastReducer,
  selectedDayAndTime: selectDayAndHour,
});
