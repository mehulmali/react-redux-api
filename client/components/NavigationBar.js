/**
 * Created by User on 10/19/2016.
 */

import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">WebSiteName</Link>
                </div>

                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>
    )
}
