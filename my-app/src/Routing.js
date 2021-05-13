import React from "react";
<<<<<<< HEAD
import {Route, BrowserRouter as Router, Link} from "react-router-dom"
=======
import {Route, BrowserRouter as Router, Link, HashRouter, Switch} from "react-router-dom"
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Forum from "./Pages/Forum"


<<<<<<< HEAD
=======

>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
function App() {
    return (
      <Router>
        <div className="routeContainer">
<<<<<<< HEAD
          <nav>
            <ul>
                <img className="Header-logo" src="/logo.png" alt="Logo" />
=======
          <HashRouter>
          <nav>
            <ul>
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Forum">Forum</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul> 
          </nav>
<<<<<<< HEAD
        <Route path="/Home" exact component={Home}/>
        <Route path="/Forum" component={Forum}/>
        <Route path="/Contact" component={Contact}/>
=======
          <Switch>
        <Route path="/Home" exact component={Home}/>
        <Route path="/Forum" component={Forum}/>
        <Route path="/Contact" component={Contact}/>
        </Switch>
        </HashRouter>
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
        </div>
      </Router>
    );
  }

  export default App;