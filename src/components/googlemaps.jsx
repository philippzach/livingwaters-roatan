import React from 'react';
import styled from '@emotion/styled';



const Google = () => (
    <div className="cf flex flex-column flex-row-l">
        <div className="w-100 w-50-l flex items-center">
        <div className="ph4" style={{ color: "#0f7bbc"}}>
        <h2 className="ma0 lh-copy pv3">
        Call us today at <a
            href="tel:+1-814-504-7656">
             <span  style={{fontSize: "1.1em"}} className="underline" >+1 814 504 7656</span></a> or Email us at <a  
            href="mailto:livingwatersroatan@gmail.com" 
            cc="desyardis@gmail.com">
            <span style={{fontSize: "1.1em"}} className="underline" > livingwatersroatan@gmail.com</span></a></h2>
        </div>
        </div>
        <div className="w-100 w-50-l">
            <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d8402.12085590168!2d-86.30135213920904!3d16.42760046189704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x8f69e89e2d14803f%3A0xc4163ee32855338f!2sRoat%C3%A1n+Airport%2C+Coxen+Hole%2C+Honduras!3m2!1d16.317156999999998!2d-86.5230222!4m3!3m2!1d16.428948!2d-86.291957!5e1!3m2!1sde!2sat!4v1480481645873" width="582px" height="515px" frameborder="0" style={{border:"0"}}></iframe>
        </div>
    </div>

)

export default Google;