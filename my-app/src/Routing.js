
import {Route, BrowserRouter as Router, Link} from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Forum from "./Pages/Forum"

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

  export default App;