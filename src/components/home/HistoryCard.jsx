import { useHistory } from "react-router";

const HistoryCard = ({ history }) => {
  const date = new Date(history.date);
  const router = useHistory();

  const goOnCity = () => {
    router.push(`/weather/${history.city}`);
  };

  return (
    <div className="historyCard" onClick={goOnCity}>
      <img src="https://source.unsplash.com/random" alt="city pick" className="historyCard__img"></img>
      <div className="historyCard__text">
        <h4 className="historyCard__title"> {history.city} </h4>
        <p className="historyCard__date">
          {date.toLocaleString("en-US", {
            weekday: "short",
            day: "2-digit",
            hour: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default HistoryCard;
