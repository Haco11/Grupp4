import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"

function App() {
  return (
    <Router>
      <div className="Hoppas routingen funkar"></div>
      <Route path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>

    </Router>
  );
}

export default App;
