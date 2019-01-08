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
                            <li className="menu" style={{paddingTop: "6px"}} itemprop="telephone">
                            <a href="tel:+1-814-504-7656" className="box pr3">
                                    +1 (814) 504 7656
                                </a>
                            </li>
                            <li className="menu" style={{paddingTop: "6px"}}>
                                <a href="mailto:livingwatersroatan@gmail.com" cc="desyardis@gmail.com" className="box pr4">
                                    livingwatersroatan@gmail.com
                                </a>
                            </li>
                            <li className="menu">
                                <a href="#" className="box button -blue">
                                    Book Now
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
