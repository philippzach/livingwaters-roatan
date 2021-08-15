import React from 'react';
import styled from '@emotion/styled';

const Pricing = styled.div`
display: flex; 
justify-content: space-between;
`

const Price = () => (
    <div>
            <div>
                <h2 className="">Our Price</h2>
                <span>Please contact us for special pricing during the off season or during Christmas, New Year’s, and Easter!</span>

                <Pricing className="pv3 w-100 w-50-l center mt4">
                    <div className="">1-4 People</div>
                    <div className="b" >$400/Night</div>
                </Pricing>
                <Pricing className="pv3 w-100 w-50-l center">
                    <div className="">Additional Person</div>
                    <div className="b">$50/Night</div>
                </Pricing>
                <div className="center pv3 button -blue">Book Now</div>
            </div>
        <div>
            <div >
                <div className="tc pv5">
                    <iframe frameborder="0" height="1024" scrolling="no" src="https://www.vrbo.com/1477872/calendar?widget=true" style={{overflow:"hidden", border:"none"}} width="592"></iframe><a href="http://www.vrbo.com/1477872" rel="nofollow" style={{display:"block", textAlign:"center", marginTop: "-30px", fontSize:"12px" }}>VRBO.com #1477872</a></div>
            </div>
        </div>
    </div>
);

export default Price;