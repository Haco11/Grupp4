import React from 'react'
import {Route, BrowserRouter as Router, Link} from "react-router-dom"

const CategoryTable = ({ items, isLoading}) => {

<<<<<<< HEAD
    return (<section className="categories">
=======
    return isLoading ? (<h1>Loading...</h1>) : (<section className="categories">
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
      {items.map(item => (
         <Router>
         <div>
        <li><Link to="/"> {item.name}</Link></li>
        <Route path="/" component={item.name}/>
        </div> 
        </Router>
      ))}

    </section>)
}

export default CategoryTable