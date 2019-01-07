import React from 'react';

const Price = () => (
    <div>
        <div className="container clearfix">
            <div className="heading-block center bottommargin">
                <h3 className="cookie-font capitalize color">Our Price</h3><span>Please contact us for special pricing during the off season or during Christmas, New Year’s, and Easter!</span>
                <div className="container">
                    <div className="tab-container">
                        <div className="col-md-6 service-wrap nobottommargin">
                            <div className="service-header">
                                <div className="service-name">
                                    <span>1-4 People</span>
                                </div>
                                <div className="service-dots"><span className="separator-dots"></span></div>
                                <div className="service-price color">$300/Night</div>
                            </div>
                            <p className="service-desc">Inlcuding all Amenities, Transportation and a Welcome Gift.</p>
                        </div>
                        <div className="col-md-6 service-wrap nobottommargin">
                            <div className="service-header">
                                <div className="service-name"><a href="#">Each Additional Person</a></div>
                                <div className="service-dots"><span className="separator-dots"></span></div>
                                <div className="service-price color">$75/Night</div>
                            </div>
                            <p className="service-desc"></p>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-calendar">
            <div className="container-fluid center clearfix">
                <div className="inline">
                    <iframe frameborder="0" height="1024" scrolling="no" src="http://www.vrbo.com/964561/calendar?widget=true" style={{overflow:"hidden", border:"none"}} width="592"></iframe><a href="http://www.vrbo.com/964561" rel="nofollow" style={{display:"block", textAlign:"center", marginTop: "-30px", fontSize:"12px" }}>VRBO.com #964561</a></div>
            </div>
        </div>
    </div>
);

export default Price;