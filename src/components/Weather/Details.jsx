import Info from "./Info";
import Temp from "./Temp";
import Next from "./Next";

const Details = ({ weather, fullWeather }) => {
  return (
    <section className="details">
      <Info weather={weather} />
      <Temp weather={fullWeather} />
      <Next weather={fullWeather} />
    </section>
  );
};

export default Details;
