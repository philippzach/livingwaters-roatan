import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Logo from '../images/logo.svg';


import Bnb from '../images/social/airbnb.svg';
import Vrbo from '../images/social/vrbo.svg';
import Trip from '../images/social/tripadvisor.svg';
import Face from '../images/social/facebook.svg';
import Insta from '../images/social/instagram.svg';

const Container = styled.div`
background-color: #0f7bbc;
color: white;
`
const SubContainer = styled.div`
display: flex;
justify-content: space-between;
max-width: 1200px;
@media and screen only (max-width: 850px) {
flex-direction: column;
}
@media and screen only (min-width: 850px) {
    flex-direction: row;
}
`

const Footer = () => (
    <Container>
        <div className="flex justify-center pt4" style={{backgroundColor: "lightskyblue",}}>
            <a href="" target="_blank"><img src={Bnb} alt="" className="ph3" height="30px"/></a>
            <a href="" target="_blank"><img src={Vrbo} alt="" className="ph3" height="30px"/></a>
            <a href="" target="_blank"><img src={Trip} alt="" className="ph3" height="30px"/></a>
            <a href="" target="_blank"><img src={Face} alt="" className="ph3" height="30px"/></a>
            <a href="" target="_blank"><img src={Insta} alt="" className="ph3" height="30px"/></a>
        </div>
        <SubContainer className="center flex-column flex-row-l pv4">
        <img src={Logo} alt="" className="logosvg"/>
                            <div className="flex flex-column flex-row-l items-center">
                            <div className="menu">
                            <div className="footercon">
                            <Link to="/luxury-beachfront-vaction-rental" className="footernav">
                                    The Lodge
                                </Link>
                                </div>
                            </div>
                            <div className="menu" >
                                <div className="footercon">
                                <Link to="/campbay" className="footernav">
                                    Camp Bay
                                </Link>
                                </div>
                            </div>
                            <div className="menu" >
                            <div className="footercon">
                                <Link to="/dining" className="footernav">
                                    Dining
                                </Link>
                                </div>
                            </div>
                            <div className="menu" >
                            <div className="footercon">
                                <Link to="/gallery" className="footernav">
                                    Gallery
                                </Link>
                                </div>
                            </div>
                            <div className="menu" >
                            <div className="footercon">
                                <Link to="/contactus" className="footernav">
                                    Contact Us
                                </Link>
                                </div>
                            </div>
                            </div>
        </SubContainer>
    </Container>
)

export default Footer;

{/* <div className="w-100 w-third-l">
<h5>Location:</h5>
    <address >
            <p >Lot #6, Camp Bay Beach
                                    <br />Roatan
                                    <br />Bay Islands, Honduras
                                    <br />
            </p>
    </address>
</div>
<div className="w-100 w-third-l">
<h5>1st Contact:</h5>
    <address>
            <p className="b mb0">Blaine Bell</p>
            <p className="mb0"><a href="mailto:livingwatersroatan@gmail.com">livingwatersroatan@gmail.com</a></p>
            <p className="mb0"><a href="tel:+1-814-504-7656">+1 814 504 7656</a></p>
    </address>
</div>
<div className="w-100 w-third-l">
    <h5>2nd Contact:</h5>
        <address >
            <p className="b mb0">Desiree Yardis</p>
            <p className="mb0"><a href="mailto:desyardis@gmail.com">desyardis@gmail.com</a></p>
            <p className="mb0"><a href="tel:+504-9799-3970">+504 9799 3970</a></p>
    </address>
</div> */}