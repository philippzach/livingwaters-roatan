import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.css';
import Logo from '../images/logo.svg';

const Header = ({ siteTitle }) => (
  <header id="header" className="no-sticky" >
            <div id="header-wrap">
                <div className="container clearfix">
                    <div id="logo">
                        <Link href="/" className="retina-logo"><img className="logosvg" src={Logo} alt="Living Waters Roatan - Camp Bay Beachfront Luxury Vacation" /></Link>
                    </div>
                    <nav id="primary-menu" className="style-4">
                        <ul className="one-page-menu" >
                            <li className="menu">
                                <a className="link" href="#section-about">
                                    <div className="box">About Us</div>
                                </a>
                            </li>
                            <li className="menu">
                                <a className="link" href="#section-am">
                                    <div className="box">Amenities</div>
                                </a>
                            </li>
                            <li className="menu">
                                <a className="link" href="#section-price">
                                    <div className="box">Price</div>
                                </a>
                            </li>
                            <li className="menu">
                                <a className="link" href="#section-calendar">
                                    <div className="box">Calendar</div>
                                </a>
                            </li>
                            <li className="menu">
                                <a className="link" href="#section-contact">
                                    <div className="box">Contact</div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
