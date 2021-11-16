import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Error from "./pages/Error";
import "./styles/styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/weather/:city" component={Weather} />
        <Route component={Error} />
      </Switch>
      <footer>Copyright © MrSociety404 - 2021</footer>
    </BrowserRouter>
  );
};

export default App;
