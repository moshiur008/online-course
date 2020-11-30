import React from 'react';
import logo from './../images/programming-hero-web-logo.png'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="dark-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <a href="./"><img src={logo} alt=""/></a>
                    </div>
                    <div className="col-md-8">
                        <div className="mainnav">
                            <ul>
                                <li><a href="./">Home</a></li>
                                <li><a href="/my-account">My Account</a></li>
                                <li><a href="/my-courses">My Courses</a></li>
                                <li><a href="/cart">Cart <FontAwesomeIcon icon={faShoppingCart} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;