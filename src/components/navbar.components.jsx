import React from 'react'

import {Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExerTracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto mr-5"> 
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">
                                Exercises
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">
                                Create Exercise Log
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">
                                Create User
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;