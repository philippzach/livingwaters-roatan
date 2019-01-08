import React from 'react';
import styled from '@emotion/styled';

import Bnb from '../images/social/airbnb.svg';
import Vrbo from '../images/social/vrbo.svg';
import Trip from '../images/social/tripadvisor.svg';
import Face from '../images/social/tripadvisor.svg';
import Insta from '../images/social/instagram.svg';

const Container = styled.div`
background-color: #0f7bbc;
color: white;
`
const SubContainer = styled.div`
display: flex;
max-width: 1200px;
`

const Footer = () => (
    <Container>
        <div className="flex">
            <a href="" target="_blank"><img src={Bnb} alt="" /></a>
            <a href="" target="_blank"><img src={Vrbo} alt="" /></a>
            <a href="" target="_blank"><img src={Trip} alt="" /></a>
            <a href="" target="_blank"><img src={Face} alt="" /></a>
            <a href="" target="_blank"><img src={Insta} alt="" /></a>
        </div>
        <SubContainer className="center">
        <div className="w-100 w-third-l">
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
         </div>

</SubContainer>
    </Container>
)

export default Footer;