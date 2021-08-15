import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.css';
import Logo from '../images/logo.svg';

const Header = ({ siteTitle }) => (
  <header id="header" className="no-sticky" >
        <a href="mailto:eastendmanagers@gmail.com?cc=livingwatersroatan@gmail.com"  to="#" className="book-btn">Reservations</a>
            
                <div className="container clearfix">
                    <div id="logo">
                        <Link to="/" className="retina-logo"><img className="logosvg" src={Logo} alt="Living Waters Roatan - Camp Bay Beachfront Luxury Vacation" /></Link>
                    </div>
                    <nav id="primary-menu" className="style-4">
                        <ul className="one-page-menu" >
                            <li className="menu"  itemprop="telephone">
                            <Link to="/luxury-beachfront-vaction-rental" className=" ">
                                    The Villa
                                </Link>
                            </li>
                            <li className="menu" >
                                <Link to="/campbay" className=" ">
                                    Camp Bay
                                </Link>
                            </li>
                            <li className="menu" >
                                <Link to="/dining" className="">
                                    Dining
                                </Link>
                            </li>
                            <li className="menu" >
                                <Link to="/gallery" className="">
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </nav>
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
