const NextDay = ({ weather }) => {
  const date = new Date(weather.dt * 1000);
  return (
    <div className="next__day">
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon weather"  className="next__day-icon"/>
      <p className="next__day-day">
        {" "}
        {date.toLocaleString("en-US", { weekday: "short" })}{" "}
      </p>
      <p className="next__day-temp">
        {Math.round(weather.temp.min)}°-{Math.round(weather.temp.max)}°
      </p>
    </div>
  );
};

export default NextDay;
