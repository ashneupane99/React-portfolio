import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
    <label for="darkmode"><i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i></label>
    <header class=" flex primary-header" id="header">
    <div class="logo flex">
        <div>
            <h1>
                Aashutosh
            </h1>
        </div>
        <div>
            <h1 class="line">
                Web Developer
            </h1>
        </div>
    </div>

    <div class="right">
        <input type="checkbox" id="check"/>
        <label for="check" class="menu-icon"><i class="fa-sharp fa-solid fa-bars  "></i></label>
        <ul class="navigation flex">
            <li>
            <Link to="/">Home</Link>
               
            </li>
            
            <li>
                <Link to="/skills">Skills</Link>
                
            </li>
            
            <li>
            <Link to="/projects">Projects</Link>
                
            </li>
            
            <li>
            <Link to="/about">About</Link>
                
            </li>
            
            <li>
            <Link to="/contact">Contact</Link>
               
            </li>
            
        </ul>
    </div>

    
</header>
</div>
  )
}
