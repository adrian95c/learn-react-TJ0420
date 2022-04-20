import React from "react"
import './Navbar.css'
import { GiEarthAmerica } from "react-icons/gi";

export default function Navbar(){
    return(
        <nav className="navbar">
            <GiEarthAmerica className="globe-icon"/>
            <h1 className="nav-title">my travel journal</h1>          
        </nav>
    )
}