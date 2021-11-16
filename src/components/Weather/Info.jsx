const Info = ({weather}) => {
  return (
    <div className="details__info">
      <h2 className="details__title">Weather details</h2>
      <ul className="details__list">
        <li className="details__item">
          <p>Clouds</p>
          <p>{weather.clouds.all} %</p>
        </li>
        <li className="details__item">
          <p>Humidity</p>
          <p>{weather.main.humidity} %</p>
        </li>
        <li className="details__item">
          <p>Wind</p>
          <p>{Math.round(weather.wind.speed * 3.6)} km/h</p>
        </li>
      </ul>
    </div>
  );
};

export default Info;
