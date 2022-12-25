export const getPeriodInfo = (weatherObj, day, hour) => {
  if (day < 0) {
    return weatherObj.current;
  }
  if (hour) {
    return weatherObj.forecast.forecastday[day].hour[hour];
  }
  return weatherObj.forecast.forecastday[day].day;
};

export const getDayInfo = (weatherObj, day) => {
  if (day < 0) {
    day = 0;
  }
  return weatherObj.forecast.forecastday[day];
};

export const extractTemps = (weatherObj, day) => {
  if (day < 0) {
    day = 0;
  }
  let curDay = getDayInfo(weatherObj, day);
  return curDay.hour.map((hour) => hour.temp_c);
};

export const extractHumidity = (weatherObj, day) => {
  if (day < 0) {
    day = 0;
  }
  let curDay = getDayInfo(weatherObj, day);
  return curDay.hour.map((hour) => hour.humidity);
};

export const extractRain = (weatherObj, day) => {
  if (day < 0) {
    day = 0;
  }
  let curDay = getDayInfo(weatherObj, day);
  return curDay.hour.map((hour) => hour.chance_of_rain);
};

export const extractWindSpeed = (weatherObj, day) => {
  if (day < 0) {
    day = 0;
  }
  let curDay = getDayInfo(weatherObj, day);
  return curDay.hour.map((hour) => hour.wind_kph);
};

export const extractWindDeg = (weatherObj, day) => {
  if (day < 0) {
    day = 0;
  }
  let curDay = getDayInfo(weatherObj, day);
  return curDay.hour.map((hour) => hour.wind_degree);
};

export const extractTime = (weatherObj, day) => {
  if (day < 0) {
    day = 0;
  }
  let curDay = getDayInfo(weatherObj, day);
  return curDay.hour.map((hour) =>
    hour.time.substring(hour.time.length - 5, hour.time.length)
  );
};

let _daysInWeek = [
  "Sunday",
  "Monday",
  "Thuesday",
  "Wednesday",
  "Thuersday",
  "Friday",
  "Saturday",
];

export const getDayInWeek = (dayId) => {
  if (dayId < 0) {
    dayId = 0;
  }
  let dayInWeek = (new Date().getDay() + dayId) % 7;
  return _daysInWeek[dayInWeek];
};
