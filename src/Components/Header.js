import React from 'react'

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
                <a href="">Home</a>
            </li>
            
            <li>
                <a href="#skills">Skills</a>
            </li>
            
            <li>
                <a href="#projects">Projects</a>
            </li>
            
            <li>
                <a href="#about">About</a>
            </li>
            
            <li>
                <a href="#contact">Contact</a>
            </li>
            
        </ul>
    </div>

    
</header>
</div>
  )
}
