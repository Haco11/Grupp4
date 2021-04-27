import './App.css';
import React from "react";
import Likes from './Likes';
import Threads from './Threads';
import Comments from './Comments';
import Category from './Category';

import Routing from './Routing';


const App1 = () => 
   <div>
     
     <Routing/>
     <Category/>
    <Threads/>
    <Comments/>
    <Likes/>
    


  </div>

export default App1;
