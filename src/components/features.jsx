import React from 'react';

import './features.css';



const Features = () => (
    <div className="flex flex-column flex-row-ns pb5">
        <div className="w-third-ns w-100 pa3">
            <div className="">
                <div className="" style={{padding: "0 40px"}}><img src=""
                        alt="Living Waters Roatan Master Bedroom"
                        className="round"    
                        />
                </div>
                <div className="fbox-desc">
                    <h3>Relax.<span className="subtitle cookie-font">Everything you need, right here</span></h3>
                    <p className="lh-copy">All the luxury you are used to right there on your private Caribbean beach!</p>
                </div>
            </div>
        </div>
        <div className="w-third-ns w-100 pa3">
            <div className="">
                <div className="" style={{padding: "0 40px"}}><img src=""
                        alt="Living Waters Roatan Outside Pool Area"
                        className="round"    
                        />
                </div>
                <div className="fbox-desc">
                    <h3>Away from it all.<span className="subtitle cookie-font">Private, exclusive, and pristine location</span></h3>
                    <p className="lh-copy">There's no other location on Roatan that is so peaceful and so away from the maddening crowds,
                        and yet, Living Waters will surround you with first-class luxury!</p>
                </div>
            </div>
        </div>
        <div className="w-third-ns w-100 pa3">
            <div className="">
                <div className="" style={{padding: "0 40px"}}><img src=""
                        alt="Kitesurfing Roatan Core Kites Philipp Zach"
                        className="round"    
                        />
                </div>
                <div className="fbox-desc">
                    <h3>Adventure.<span className="subtitle cookie-font">Enjoy all that nature has to offer</span></h3>
                    <p className="lh-copy">Diving, kite surfing, wind surfing, paddle boarding, fishing, sight seeing, hiking, and all can
                        be booked with our concierge service or you can do it on your own!</p>
                </div>
            </div>
        </div>
    </div>
)

export default Features;