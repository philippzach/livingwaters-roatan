import React from 'react';
import Waters from '../images/parallax/32.jpg';

const Help = () => (
    <div class="flex flex-column flex-row-l">
            <div class="w-100 w-50-l">
                <div class="">
                    <h2>Living Waters for the World</h2><span>Living Waters for the World is a global
                        ministry that provides sustainable clean water and fosters long-term, mutually beneficial relationships
                        between volunteers and communities in need.</span>
                    <div class="clear"></div>
                </div>
                <div class=""> <a href="http://www.livingwatersfortheworld.org/" target="_blank"
                        class="">Help Now!</a>
                    <blockquote class=""><span>
                            <p>If anyone thirsts, let him a come to me and drink.</p>
                        </span>
                        <footer><span>Jesus - The Source of Living Water - John 7:37 </span></footer>
                    </blockquote>
                </div>
            </div>
            <div className="w-100 w-50-l">
                <img src={Waters} />
            </div>
</div>
)

export default Help;