import React, { useEffect , useState } from 'react';
import axios from 'axios';
import ThreadsTable from './ThreadsTable'
import Thread from './ThreadFrom'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import ThreadsList from './ThreadsList'



const Threads = () => 
{


    const [elements, setElements] = useState([])
    const [isLoading, setIsLoading] = useState (true)
    
    useEffect(() => {

      

       const fetchElements = async () => {
         const result = await axios("https://forum-api-jkrop.ondigitalocean.app/category/6092645ee747d9001dee9785/thread"+ url +"/thread")
  
         console.log(result.data)
  
         setElements(result.data)
         setIsLoading(false)
       }
  
       fetchElements()
    },  [])
    
    return (
        <div className='container'>
            <h1>Threads</h1>
            <ThreadsTable isLoading={isLoading} elements={elements} />
            <Thread/> 
        </div>
      ) 
    }

    function ThreadRoute() {
      let ThreadsList =[
        {name:'Thread1', id:1},
        {name:'Thread2', id:2},
        {name:'Thread3', id:3},
        {name:'Thread4', id:4},
      ]
      return (
        <div className="ThreadRoute">
          <Router>
            <h1>Dynamic threadlist</h1>
            {
              ThreadsList.map((item) =>
              <div><Link to={"/ThreadsList/"+item.id+"/"+item.name}>{item.name}</Link></div>)
            }
            <Route path="/ThreadsList/:id/:name" ><ThreadsList /></Route>
          </Router>
        </div>
      )
    }

export default Threads;