import React from 'react';
import './map.css';

import RoatanMap from '../images/others/1.png';


const Map = () => (
    <div>
                <div className="block">
                            <div className="">
                                <div className="">
                                    <audio src="demos/spa/music/oceans.m4a" controls autoplay>
                                        <embed src="demos/spa/music/oceans.m4a" width="500" height="90" loop="true" autostart="false" />
                                    </audio>
                                    <h1 className="">Oceanfront Vacation Rental in Roatan</h1></div>
                                <p>The Best Roatan Vacation Villa on the Isles East End. Pristine and beachfront lodging guaranteed. Living Waters is a brand new, high-end, luxurious, private, beachfront vacation home in Roatan! This magnificent two-story beachfront villa sits just steps from the Caribbean Sea in Camp Bay Beach, home of the most beautiful natural beach in Roatan, Honduras and also just a short swim to the second largest coral barrier reef in the world! "The" private beach rental at Camp Bay Beach, here you can enjoy snorkeling, scuba diving, kite surfing, fishing, private boat tours, and wind surfing, and you can enjoy all of these either on your own, or with world-className instruction from Dive Pangea Roatan and Kitesurf Roatan, both of which are located just a few hundred feet down the beach from Living Waters.</p>
                            </div>
                            <div className="tc"><img classNameName="" src={RoatanMap} alt="Location Living Waters Roatan Island" /></div>
                </div>
                <div className="">
                            <div className="block cf ph2-ns">
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn">
                                    <div className="">
                                        <img src="demos/spa/images/Icons/24.png" height="48px" width="48px" alt="24h Logo"></img>
                                        
                                    </div>
                                    <h3>Concierge Service</h3>
                                    <p>Arrangements can be made for our guests for diving, kite surfing, sight seeing and tours, hiking, fishing, or for whatever you want to make your stay at Living Waters spectacular and carefree.</p>
                                </div>
                            </div>
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn" data-delay="200">
                                    <div className="">
                                        <img src="demos/spa/images/Icons/bus.png" height="48px" width="48px" alt="Concierge Logo"></img>
                                        
                                    </div>
                                    <h3>Transportation</h3>
                                    <p>We provide transportation from the airport, and also to a local grocery store to purchase anything you might need to make your stay more comfortable. Airport drop off has a nominal charge.</p>
                                </div>
                            </div>
                            </div>

                            <div className="block cf ph2-ns">
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn" data-delay="1000">
                                    <div className="">
                                    <img src="demos/spa/images/Icons/diving.png" height="48px" width="48px" alt="Dive Roatan Logo"></img>
                                    </div>
                                    <h3>Diving &amp; Snorkeling</h3>
                                    <p>Camp Bay provides pristine underwater sites to be enjoyed at the undeveloped East End of Roatan, and there is world-className diving instruction by "Dive Pangea Roatan" available only a few lots down the beach</p>
                                </div>
                            </div>
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn" data-delay="800">
                                    <div className="">
                                        <img src="demos/spa/images/Icons/dive.png" height="48px" width="48px" alt="Dive Roatan Logo"></img>
                                        
                                    </div>
                                    <h3>Private Dining</h3>
                                    <p>Along with local restaurants like La Sirena and Camp Bay Lodge located within short walking distance, arrangements can be made for a private chef to prepare your island favorites while staying at Living Waters!</p>
                                </div>
                            </div>
                            </div>

                            <div className="block cf ph2-ns">
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn" data-delay="1000">
                                    <div className="">
                                        <img src="demos/spa/images/Icons/kite.png" height="48px" width="48px" alt="Kitesurf Roatan Logo"></img>
                                       
                                    </div>
                                    <h3>Kite Surfing &amp; Kayaking </h3>
                                    <p>World className kite surfing instruction by Kitesurf Roatan, just down the beach. One and two man kayaks are available at the house for our guests to enjoy for free!</p>
                                </div>
                            </div>
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn" data-delay="1000">
                                    <div className="">
                                        <img src="demos/spa/images/Icons/fish.png" height="48px" width="48px" alt="Fishing Roatan Logo"></img>
                                        
                                    </div>
                                    <h3>Fishing &amp; Sightseeing</h3>
                                    <p>Local guides can pick you up from our private dock for absolutely great fishing or for a private sight seeing tour of Roatan or the other Bay Islands.</p>
                                </div>
                            </div>
                            </div>
                </div>
        </div>     
)

export default Map;