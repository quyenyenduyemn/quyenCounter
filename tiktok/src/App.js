import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Couter from "./components/Couter";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/home" component={Home} />
        <Route path="/counter" component={Couter} />
      </div>
    </Router>
  );
};
export default App;
