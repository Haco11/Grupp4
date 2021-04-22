import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Forum from "./Pages/Forum"
import React from "react";
import Likes from './Likes';
import Threads from './Threads';
import Comments from './Comments';
import Category from './Category';


function App() {
  return (
    <Router>
      <div className="routeContainer">
        <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/forum">Forum</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      <Route path="/" exact component={Home}/>
      <Route path="/Forum" component={Forum}/>
      <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}


const App = () => 
   <div>
     <Category/>
    <Threads/>
    <Comments/>
    <Likes/>

  </div>

export default App;