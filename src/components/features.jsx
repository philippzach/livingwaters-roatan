import React from 'react';
import Relax from '../images/services/1.jpg';
import Away from '../images/services/2.jpg';
import Adventure from '../images/services/3.jpg';
import './features.css';



const Features = () => (
    <div className="flex flex-column flex-row-ns">
        <div className="w-third-ns w-100 pa2">
            <div className="">
                <div className="" style={{padding: "0 40px"}}><img src={Relax}
                        alt="Living Waters Roatan Master Bedroom"
                        className="round"    
                        />
                </div>
                <div className="fbox-desc">
                    <h3>Relax.<span className="subtitle cookie-font">Everything you need, right here</span></h3>
                    <p>All the luxury you are used to right there on your private Caribbean beach!</p>
                </div>
            </div>
        </div>
        <div className="w-third-ns w-100 pa2">
            <div className="">
                <div className="" style={{padding: "0 40px"}}><img src={Away}
                        alt="Living Waters Roatan Outside Pool Area"
                        className="round"    
                        />
                </div>
                <div className="fbox-desc">
                    <h3>Away from it all.<span className="subtitle cookie-font">Private, exclusive, and pristine location</span></h3>
                    <p>There's no other location on Roatan that is so peaceful and so away from the maddening crowds,
                        and yet, Living Waters will surround you with first-className luxury!</p>
                </div>
            </div>
        </div>
        <div className="w-third-ns w-100 pa2">
            <div className="">
                <div className="" style={{padding: "0 40px"}}><img src={Adventure}
                        alt="Kitesurfing Roatan Core Kites Philipp Zach"
                        className="round"    
                        />
                </div>
                <div className="fbox-desc">
                    <h3>Adventure.<span className="subtitle cookie-font">Enjoy all that nature has to offer</span></h3>
                    <p>Diving, kite surfing, wind surfing, paddle boarding, fishing, sight seeing, hiking, and all can
                        be booked with our concierge service or you can do it on your own!</p>
                </div>
            </div>
        </div>
    </div>
)

export default Features;