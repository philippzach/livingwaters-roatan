import React from 'react' ;
import Kitesurf from '../images/kitesurf_roatan.jpg'
import Handford from '../images/handford.jpg'
import Pangea from '../images/dive_pangea_roatan.jpg'
import Sirena from '../images/lasirena_campbay.jpg'
import './tours.css';


const Tours = () => (
    <div className="block cf ph2-ns">
     <h2>Things to do</h2>
                            <div className="fl w-100 w-50-ns pa3 tc grow pointer">
                            <a href="http://www.kitesurfroatan.com/" target="_blank">
                                <div className=""> <img className="rounder" alt="Kitesurf Roatan Core Kites Philipp Zach" src={Kitesurf} />
                                    <div className="">
                                        <h3>Kitesurf Roatan</h3>
                                        <p className="lh-copy">Personalized Kitesurfing lessons and unique kite trips catered to your needs in small groups for an unforgettable experience in a unspoiled/hidden paradise.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="fl w-100 w-50-ns pa3 tc grow pointer">
                            <a href="http://handfordtours.com/" target="_blank">
                                <div className=""> <img className="rounder" alt="Handford Tours Roatan" src={Handford} />
                                    <div className="">
                                        <h3>Handford Tours</h3>
                                        <p className="lh-copy">Handford was born and raised in Roatan. He has an intimate knowledge of the local waters to provide you and friends an unforgettable experience snorkeling, fly fishing, island hopping and much more. Alternatively you can check out
                                        <a href="https://www.tripadvisor.com/Attraction_Review-g292019-d3732822-Reviews-Roatan_Salty_Life_by_Moody_Jones-Roatan_Bay_Islands.html">Moody Jones Tours</a> in French Cay.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="fl w-100 w-50-ns pa3 tc grow pointer">
                            <a href="http://www.divepangearoatan.com/" target="_blank">
                                <div className=""> <img className="rounder" alt="Dive Pangea Roatan Camp Bay Beach" src={Pangea} />
                                    <div className="">
                                        <h3>Dive Pangea</h3>
                                        <p className="lh-copy">Enjoy boutique, valet diving with Dive Pangea Roatan. Our groups are kept small, allowing us the flexibility to tailor your diving experience to your unique requests.</p>
                                        
                                        </div>
                                </div>
                            </a>
                            </div>
                            <div className="fl w-100 w-50-ns pa3 tc grow pointer">
                            <a href="https://www.tripadvisor.com/Restaurant_Review-g292019-d1764017-Reviews-La_Sirena_de_Camp_Bay-Roatan_Bay_Islands.html" target="_blank" >
                                <div className=""> <img className="rounder" alt="La Sirena Camp Bay Beach Roatan" src={Sirena} />
                                    <div className="">
                                        <h3>La Sirena de Camp Bay</h3>
                                        <p className="lh-copy">It just DOES NOT get any more authentic than this place. Amazing food, atmosphere, ice cold beer and rum punch, and the best key lime pie on the island.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
)

export default Tours;