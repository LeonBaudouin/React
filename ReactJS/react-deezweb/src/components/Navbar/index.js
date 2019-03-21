import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import logo from "../../logo.svg";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">
                        <img src={logo} alt="React Logo" width="42" />{" "}
                        Deezweb
                    </span>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav"
						>
                        <ul className="navbar-nav">
                            <ActiveLink activeOnlyWhenExact to="/">
                                <i className="fas fa-search" />{" "}
                                Rechercher un titre
                            </ActiveLink>
                            <ActiveLink to="/favorites">
                                <i className="fas fa-heartbeat" /> Mes
                                favoris
                            </ActiveLink>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

const ActiveLink =  ({ to, children, activeOnlyWhenExact, ...rest }) => (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? "nav-item active" : "nav-item"}>
            <Link to={to} className="nav-link">
                {children}
            </Link>
        </li>
      )}
    />
  );

export default Navbar;