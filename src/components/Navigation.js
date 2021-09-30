import React from "react";
import {NavLink} from "react-router-dom";

function Navigation() {
    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>   
                <span style={{fontSize:"2em"}}>Houston</span>            
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/About">About</NavLink>
        </div>

    );
}
export default Navigation;