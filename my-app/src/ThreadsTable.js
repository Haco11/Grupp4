import React from 'react'
import {Route, BrowserRouter as Router, Link} from "react-router-dom"

const ThreadsTable = ({ elements, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className="threads">
      {elements.map(element => (
         <Router>
         <div>
        <li><Link to="/"> {element.title}</Link></li>
        <Route path="/."  component={element.title}/>
        </div>
         </Router>
      ))}

    </section>)
}

export default ThreadsTable