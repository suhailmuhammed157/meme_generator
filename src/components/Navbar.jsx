import React from "react";
import logo from "../../public/assets/Troll Face.png"

export default function Navbar(){
    return (
        <nav>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <h3>Meme Generator</h3>
            </div>
            <div className="project-name">
            <h3>React meme generator project</h3>
            
            </div>
        </nav>
    )
}