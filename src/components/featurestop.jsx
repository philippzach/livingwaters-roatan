import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

export default () => (
    <div class="block cf ph2-ns">
        <div class="fl w-100 w-50-ns pa2">
            <div class="heading-block noborder bottommargin-sm">
                <h2 class="cookie-font capitalize color">Your caribbean dream.</h2>
            </div>
            <p>Our newly build 4100 square foot beautiful home sits right on the pristine beach of Camp Bay. Offering you
                every comfort you are used to when home. Take a dip in our infinity swimming pool during those tropical
                mornings. Or just take the kayaks out to the reef for a breathtaking snorkeling experience right after you
                wake up. A list of all the awesome features of our house are listed on the right. </p>
            </div>
        <div class="fl w-100 w-50-ns pa2">
            <Tabs>
            <TabList>
                <Tab>Bedrooms</Tab>
                <Tab>General</Tab>
                <Tab>Kitchen</Tab>
                <Tab>Outside</Tab>
                <Tab>Dining</Tab>
            </TabList>
            <TabPanel>
            <p>#1 Bedroom: 1 king with double sink private bath<br/>#2 Bedroom: 2 double beds with one sink private
                    bath<br/>#3 Bedroom: 1 king<br/>#4 Bedroom: 1 queen <br/>Bedroom #3 and #4 share double sink bathroom
                </p>
            </TabPanel>
            <TabPanel>
            <p>Individually Controlled Air-Conditioning in all the Bedrooms, Living Room and Dining Room <br/>Ceiling
                    Fan/light Combinations In Each Bedroom<br/>Washer And Dryer <br/>Ironing Board and Iron<br/>High Speed
                    Internet<br/>Netflix<br/>Local Cell Phone Service<br/>Beach Towels / Luxury Bed Linens / Luxury Bath
                    Towels<br/>Smart TVs – In All Bedrooms And Living Room</p>
            </TabPanel>
            <TabPanel>
            <p>Automatic Drip Coffee Maker<br/>Stove/Oven Combination <br/>Large Refrigerator/Freezer with Ice Maker
                    <br/>Microwave Oven and Pizza Oven <br/>Dishwasher <br/>Toaster<br/>Blender </p>
            </TabPanel>
            <TabPanel>
            <p>Large Travertine Deck With Dining Table and Seating Area<br/>Chaise Lounge In Front Of The Pool And
                    Jacuzzi <br/>Lounge Chairs For Beach Use <br/>Kitchenaid Gas BBQ <br/>Beach Palapa <br/>2 Kayaks <br/>Snorkeling
                    Equipment For Adults And Children</p>
            </TabPanel>
            <TabPanel>
            <p>Indoor Dining Table With 8 Seats<br/>Kitchen Island With 5 Barstools <br/>Outdoor Dining Table For 8</p>
            </TabPanel>
            </Tabs>
        </div>
    </div>
  );