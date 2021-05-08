import React from 'react'
import {Route, BrowserRouter as Router, Link} from "react-router-dom"



const CategoryTable = ({ items, isLoading}) => {

    return isLoading ? (<h1>Loading...</h1>) : (<section className="categories">
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