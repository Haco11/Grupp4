import React from 'react'
import {Route, BrowserRouter as Router, Link} from "react-router-dom"

const ThreadsTable = ({ elements, isLoading}) => {
<<<<<<< HEAD
    return (<section className="threads">
=======
    return isLoading ? (<h1>Loading...</h1>) : (<section className="threads">
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
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