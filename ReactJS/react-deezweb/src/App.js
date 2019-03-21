import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends Component {
    
    render() {

        return (
            <div className="App">
				<Router>
					<Navbar/>
					<Route path="/" exact component={Home} />
					<Route path="/favorites" component={Favorites} />
				</Router>
            </div>
			
        );
    }
}

export default App;
