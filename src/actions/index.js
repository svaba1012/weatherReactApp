import weatherApi from "../apis/weatherApi";

export const getWeatherForecast = (latitude, longitude) => async (dispatch) => {
  let response = await weatherApi.get("/forecast.json", {
    params: { q: latitude + "," + longitude, days: 3 },
  });
  dispatch({
    type: "FETCH_WEATHER_FORECAST",
    payload: response.data,
  });
};

export const selectDayAndHour = (dayId, hour) => {
  return { type: "SELECT_DAY_AND_TIME", payload: { day: dayId, hour: hour } };
};
