import React from "react";
import img1 from "../assets/H1.jpg";
import img2 from "../assets/H2.jpg";


function About() {
    return(
        <>
            <h1> About Houston</h1>
            <h2>Houston exudes a cosmopolitan and down-home vibe</h2>
            <img src={img1}/> 
            <p>The style-savvy residents of the country’s fourth-largest city and third-largest county (Harris) know that there’s no place quite like Houston.</p>
            <p>With more than 2.2 million residents, the city attracts visitors and transplants with a wonderful mix of world-class arts, booming business, pro sports and award-winning cuisine.</p>
            <p>As the rest of the country discovers what locals have known all along, Houston is finally enjoying the recognition it deserves. National headlines citing Houston as a must-visit appear on the regular, calling the city "the New Capital of Southern Cool" (GQ), and "the Houston dining scene is the most exciting it's ever been" (Food & Wine).</p>
            <img src={img2}/>
            <p >See for yourself, here in Houston, where much of daily life happens outdoors, thanks to mild, year-round temperatures. Take time to explore the eclectic, culture-filled neighborhoods, gallery spaces and attractions, which offer diverse flavors that can only be found here.</p>
        </>
    )
}
export default About;