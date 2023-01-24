import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./root.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "rsuite/dist/styles/rsuite-default.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/works">
          <Projects />
        </Route>
        <Route>Check the path</Route>
      </Switch>
    </div>
  );
}

export default App;
