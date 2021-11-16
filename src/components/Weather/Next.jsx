import NextDay from "./NextDay";

const Next = ({weather}) => {

  const weatherList = []
  for (let i = 1; i < 6; i++) {
    weatherList.push(weather.daily[i])
  }

  

  return (
    <div className="next">
      <h2 className="next__title">Next Days</h2>
      <div className="next__days">
        {weatherList.map((weather) => (
          <NextDay weather={weather} key={weather.dt} />
        ))}
      </div>
    </div>
  );
};

export default Next;
