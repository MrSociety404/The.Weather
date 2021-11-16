import { Line } from "react-chartjs-2";

const Temp = ({ weather }) => {
  const weatherData = [];

  for (let i = 0; i < 48; i += 8) {
    weatherData.push(weather.hourly[i].temp);
  }

  const dt = new Date(weather.hourly[0].dt * 1000);

  let labels = new Array(6);
  for (let i = 0; i < labels.length; i++) {
    if (i === 0) {
      labels[i] = dt.getHours();
    } else {
      if (labels[i - 1] === 23) {
        labels[i] = 0;
      } else {
        labels[i] = labels[i - 1] + 1;
      }
    }
  }

  labels = labels.map((label) => {
    return label >= 10 ? `${label}:00` : `0${label}:00`;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temp in C°",
        data: weatherData,
        fill: false,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgb(255, 255, 255)",
      },
    ],
    color: "white",
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="temp">
      <h2 className="temp__title">Temperatures</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Temp;
