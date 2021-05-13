import React from "react";
import {Route, BrowserRouter as Router, Link, HashRouter, Switch} from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Forum from "./Pages/Forum"



function App() {
    return (
      <Router>
        <div className="routeContainer">
          <HashRouter>
          <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Forum">Forum</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul> 
          </nav>
          <Switch>
        <Route path="/Home" exact component={Home}/>
        <Route path="/Forum" component={Forum}/>
        <Route path="/Contact" component={Contact}/>
        </Switch>
        </HashRouter>
        </div>
      </Router>
    );
  }

  export default App;