const Result = ({ weather }) => {
  const date = new Date()
  const dateOption = {weekday: 'short', day:"numeric", month: "short" }

  return (
    <section className="result">
      <h2 className="result__title">{Math.round(weather.main.temp)}°C</h2>
      <div className="result__location">
        <h3 className="result__city"> {weather.name} </h3>
        <p className="result__time"> {date.toLocaleDateString("en-US", dateOption)} </p>
      </div>
      <div className="result__weather">
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon weather" className="result__icon" />
        <p className="result__weather-desc"> {weather.weather[0].main} </p>
      </div>
    </section>
  );
};

export default Result;
