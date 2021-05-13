import React from "react";
import {Route, BrowserRouter as Router, Link} from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Forum from "./Pages/Forum"


function App() {
    return (
      <Router>
        <div className="routeContainer">
          <nav>
            <ul>
                <img className="Header-logo" src="/logo.png" alt="Logo" />
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Forum">Forum</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul> 
          </nav>
        <Route path="/Home" exact component={Home}/>
        <Route path="/Forum" component={Forum}/>
        <Route path="/Contact" component={Contact}/>
        </div>
      </Router>
    );
  }

  export default App;