import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Taylor</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/Hotel">Hotels</Link>
                            <Link className="nav-item nav-link" to="/Restaurant">Restaurants</Link>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar ;     