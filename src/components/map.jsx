import React from 'react';
import './map.css';

import RoatanMap from '../images/Icons/map.svg';
import Service from '../images/Icons/service.svg'
import Transport from '../images/Icons/transport.svg'
import Diving from '../images/Icons/diving.svg'
import Dining from '../images/Icons/dining.svg'
import Kitesurf from '../images/Icons/kitesurfing.svg'
import Fishing from '../images/Icons/fishing.svg'


const Map = () => (
    <div>
                <div className="block">
                                    <audio src="demos/spa/music/oceans.m4a" controls autoplay>
                                        <embed src="demos/spa/music/oceans.m4a" width="500" height="90" loop="true" autostart="false" />
                                    </audio>
                            <div className="center" style={{  maxWidth: "500px" }}><img className="" src={RoatanMap} alt="Location Living Waters Roatan Island" /></div>
                </div>
                <div className="">
                            <div className="block cf ph2-ns">
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn">
                                    <div className="">
                                        <img src={Service} height="55px" width="55px" alt="24h Logo"></img>
                                        
                                    </div>
                                    <h3>Concierge Service</h3>
                                    <p>Arrangements can be made for our guests for diving, kite surfing, sight seeing and tours, hiking, fishing, or for whatever you want to make your stay at Living Waters spectacular and carefree.</p>
                                </div>
                            </div>
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn" data-delay="200">
                                    <div className="">
                                        <img src={Transport} height="55px" width="55px" alt="Concierge Logo"></img>
                                        
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
                                    <img src={Diving} height="55px" width="55px" alt="Dive Roatan Logo"></img>
                                    </div>
                                    <h3>Diving &amp; Snorkeling</h3>
                                    <p>Camp Bay provides pristine underwater sites to be enjoyed at the undeveloped East End of Roatan, and there is world-class diving instruction by "Dive Pangea Roatan" available only a few lots down the beach</p>
                                </div>
                            </div>
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn" data-delay="800">
                                    <div className="">
                                        <img src={Dining} height="55px" width="55px" alt="Dive Roatan Logo"></img>
                                        
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
                                        <img src={Kitesurf} height="55px" width="55px" alt="Kitesurf Roatan Logo"></img>
                                       
                                    </div>
                                    <h3>Kite Surfing &amp; Kayaking </h3>
                                    <p>World class kite surfing instruction by Kitesurf Roatan, just down the beach. One and two man kayaks are available at the house for our guests to enjoy for free!</p>
                                </div>
                            </div>
                            <div className="fl w-100 w-50-ns pa2">
                                <div className="" data-animate="fadeIn" data-delay="1000">
                                    <div className="">
                                        <img src={Fishing} height="55px" width="55px" alt="Fishing Roatan Logo"></img>
                                        
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