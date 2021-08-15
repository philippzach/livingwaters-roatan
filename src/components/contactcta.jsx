import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
background-color: #0f7bbc;
color: white;
padding: 3em;
`
const Link = styled.a`
color: white;
text-decoration: none;
`

const Cta = () => (
    <Container >
        <div className="flex flex-column items-center">
        <div>
        <h3 className="ma0 lh-copy pv3">
        Call us today at <Link
            href="tel:+1-814-504-7656">
             <span style={{backgroundColor: "#004975b3", padding: ".1em"}}>+1 814 504 7656</span></Link> or Email us at <Link  
            href="mailto:livingwatersroatan@gmail.com" 
            cc="desyardis@gmail.com">
            <span style={{backgroundColor: "#004975b3", padding: ".1em"}}> livingwatersroatan@gmail.com</span></Link></h3></div>
        <div><span className="lh-copy fw3">We strive to provide the best service to make your experience wonderful</span></div>
        </div>
    </Container>
)

export default Cta;