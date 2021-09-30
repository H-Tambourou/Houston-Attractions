import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 

import Home from './components/Home';
import About from './components/About';
import Nav from './components/Navigation';
import Page1 from './pages/Space_Center';
import Page2 from './pages/Museum';
import Page3 from './pages/Buffalo_Bayou_Park';
import Page4 from './pages/Zoo';

import img1 from "./assets/space_center.jpg";
import img2 from "./assets/space_center1.jpg";
import img3 from "./assets/museum.jpg";
import img4 from "./assets/museum1.jpg";
import img5 from "./assets/park.jpg";
import img6 from "./assets/park1.jpg";
import img7 from "./assets/zoo.jpg";
import img8 from "./assets/zoo1.jpg";



function App() {
  const data = [
    {
      id: 1,
      name: "Space Center",
      img: img1,
      img2: img2,
      info: "Space Center Houston, the official visitor center of NASA's Johnson Space Center, is a must-see attraction in Houston. This is a huge complex, where you can walk through the space shuttle replica Independence and the enormous shuttle carrier aircraft it's mounted on. In the visitor center, you can wander inside a replica of America's first space station, Skylab, and touch a rock from the moon. This is also the place to learn about NASA's upcoming missions, including travel to Mars.",
      description: "Space Center Houston is one of the only places on Earth where visitors can see astronauts train for missions, touch a real moon rock and take a behind-the-scenes tour of NASA. Visitors can go inside the unprecedented international landmark Independence Plaza, the only exhibit in the world with a full-scale shuttle replica mounted on top of the original shuttle carrier aircraft NASA 905 and standing eight stories tall. The exhibits, attractions and hands-on activities in this 250,000-square-foot educational entertainment complex tell the story of America’s human space flight program, giving guests an experience like no other."
    },
    {
      id:2,
      name: "Houston's Museum",
      img: img3,
      img2:img4,
      info: "The Museum District is one of Houston's greatest cultural attractions, with 19 museums residing in this beautiful area of downtown. Eleven of these are free to the public. Highlights include the Museum of Fine Arts, Houston the Houston Museum of Natural Science, the Children's Museum of Houston, the Menil Collection, the Holocaust Museum, and the Contemporary Arts Museum Houston, to name just a few. Also in this area is the lovely Hermann Park, with the Houston Zoo and the Miller Outdoor Theatre.",
      description: "Established in 1900, the MFAH is the largest cultural institution in the region. The majority of the museum's presentations take place on its main campus, which is located in the heart of Houston's Museum District and comprises the Audrey Jones Beck Building, the Caroline Wiess Law Building, the Glassell School of Art and the Lillie and Hugh Roy Cullen Sculpture Garden. The Beck and Law buildings are connected underground by the Wilson Tunnel, which features James Turrell's iconic installation The Light Inside (1999). Additional resources include a repertory cinema, two significant libraries, public archives and a state-of-the-art conservation and storage facility. Nearby, two remarkable house museums, Bayou Bend Collection and Gardens and Rienzi, present collections of American and European decorative arts. The encyclopedic collections of the MFAH are especially strong in pre-Columbian and African gold; Renaissance and Baroque painting and sculpture; 19th- and 20th-century art; photography; and Latin American art. The MFAH is also home to the International Center for the Arts of the Americas (ICAA), a leading research institute for 20th-century Latin American and Latino art."
    },
    {
       id:3,
       name: "Buffalo Bayou Park",
       img: img5,
       img2: img6,
       info: "Buffalo Bayou Park is a beautiful 160-acre green space running through the city, with the slow moving waters of Buffalo Bayou as its centerpiece. This urban park is home to extensive walking and biking trails, a dog park, sculptures, and plenty of shady areas to relax.",
       description: "Buffalo Bayou Park is the 160-acre greenspace that lies along the 2.3-mile stretch of the bayou from Shepherd Drive to Sabine Street.  Enhancement of the park was completed in 2015 and was a collaboration of Buffalo Bayou Partnership, the Kinder Foundation, the City of Houston through Houston Parks & Recreation Department and Harris County Flood Control District.  Buffalo Bayou Park includes beautiful gardens and native landscaping; hike and bike trails; paddle craft and bike rentals; the go-to dog park in the city; public art; a creative nature play area; two visitor centers; and gathering places for visitors to picnic, relax and enjoy outdoor activities."
    },
    {
      id:4,
      name: "Zoo",
      img: img7,
      img2: img8,
      info: "Set on 55 acres in Hermann Park, the Houston Zoo is one of the city's star attractions, popular with locals and visitors. The zoo is home to more than 6,000 exotic and indigenous animals and contains an education center and children's zoo. Some of the highlights include feeding the giraffes, seeing marine life up close in the aquarium, and watching sea lions and otters frolicking about.",
      description: "The Houston Zoo provides a fun and unique experience that connects communities with animals to inspire action to save wildlife. Where else can you see African lions, Asian elephants, and California sea lions...all without leaving the city of Houston? Each year, 2.4 million guests take part in the wonder and magnificence of creatures big and small from all over the globe and learn ways in which they can help save animals in the wild."
     }
  ]
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path="/" exact><Home data={data}/></Route>
            <Route path="/About" component={About}/>
            <Route path="/More_info/Space_Center"><Page1 data={data}/></Route>
            <Route path="/More_info/Museum" ><Page2 data={data}/></Route>
            <Route path= "/More_info/Park" ><Page3 data={data}/></Route>
            <Route path="/More_info/Zoo" ><Page4 data={data}/></Route>
          </Switch>

        </div>
      
      </BrowserRouter>
    );
}

export default App;
