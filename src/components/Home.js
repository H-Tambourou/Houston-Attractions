import React from "react";
import {NavLink} from "react-router-dom";

function Home({data}) {
    const route = [
        {path:"/More_info/Space_Center"},
        {path:"/More_info/Museum"},
        {path: "/More_info/Park"},
        {path:"/More_info/Zoo"}
    ];
    

      return (
        <>
        <h1>Things To Do Houston</h1>
        <p>Looking for an exciting day trip or weekend getaway or embarking on a family-friendly adventure, you'll find there's something for everyone in Houston.<br/> Go ahead and browse through the site and we guarantee you'll discover some must-see stops that you won't want to miss. <br/> Houston serves up nationally recognized dining, shopping, entertainment and nightlife.<br/>  We have world-class attractions and events.  Best of all, you'll find a number of things that are budget-friendly or free.<br/> In fact, there are so many things to do in Houston, you may want to schedule an extra day or two to your trip!
        </p>
        <div>
            {data.map((place, index) => {

                return(
                    <div>
                    <div className="subheader">{place.id}. {place.name}</div>
                    <img src={place.img} alt="Views of the place"></img>
                    <p> {place.info}</p>
                    <NavLink to={route[index].path}>Learn More!</NavLink>
                    </div> 
                )
            })}
        </div>
    </>
      )
     
      
}
export default Home;