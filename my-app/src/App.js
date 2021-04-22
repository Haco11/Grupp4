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

import './App.css';
import React from "react";
import Likes from './Likes';
import Threads from './Threads';
import Comments from './Comments';
import Category from './Category';

const App = () => 
   <div>
     <Category/>
    <Threads/>
    <Comments/>
    <Likes/>

  </div>

export default App;