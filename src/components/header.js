import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      
         <nav className="navbar navbar-default" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">Business Casual</a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                    <li><Link to="/" >Home</Link>
                    </li>
                    <li><Link to="/resume" >Resume</Link>
                    </li>
                    <li><Link to="/contact" >Contact</Link>
                    </li>
                    <li><a href="projects">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      
    )
  }
}
