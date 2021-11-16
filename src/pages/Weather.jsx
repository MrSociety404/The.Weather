import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Result from "../components/Weather/Result";
import Details from "../components/Weather/Details";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Weather = () => {
  const { city } = useParams();
  const history = useHistory();
  const [weather, setWeather] = useState({});
  const [fullWeather, setFullWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToDayWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14f3dfd97269a3e18459e25e58baeb32&units=metric`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        const res2 = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lon=${data.coord.lon}&lat=${data.coord.lat}&units=metric&exclude=minutely&appid=14f3dfd97269a3e18459e25e58baeb32`
        );
        if (!res2.ok) throw new Error(res2.statusText);
        const newdata = await res2.json();
        setWeather(data);
        setFullWeather(newdata);
        setLoading(false);
      } catch (err) {
        console.error(err);
        //history.push('/error')
      }
    };

    getToDayWeather();
  }, [city]);

  useEffect(() => {
    let history = JSON.parse(localStorage.getItem("weatherKey"));
    if (!history) {
      history = [{
        id: uuidv4(),
        city: city,
        date: new Date()
      }];
    } else {
      if (history.length < 4) {
        history.push({
          id:uuidv4(),
          city: city,
          date: new Date()
        });
      } else {
        history.shift();
        history.push({
          id:uuidv4(),
          city: city,
          date: new Date()
        });
      }
    }
    localStorage.setItem("weatherKey", JSON.stringify(history));
  }, []);

  document.querySelector("body").removeAttribute("class");
  if (!loading) {
    if (weather.cod === "404") {
      history.push("/error");
    } else {
      switch (weather.weather[0].main) {
        case "Snow":
          document.querySelector("body").classList.add("result-page-snow");
          break;
        case "Rain":
          document.querySelector("body").classList.add("result-page-rain");
          break;
        default:
          document.querySelector("body").classList.add("result-page");
          break;
      }
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="weather">
          <div className="weather__info">
            <NavBar />
            <Result weather={weather} />
          </div>
          <Details
            weather={weather}
            fullWeather={fullWeather}
            classList="weather__details"
          />
        </main>
      )}
    </>
  );
};

export default Weather;
