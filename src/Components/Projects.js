import React from 'react'
import ec from "../assets/ec.png"

export const Projects = () => {
  return (
    <div> <section class="section4 flex" id="projects">
    <h2 class="title">My Recent Work</h2>
    <div class="projects-container grid">
        <div class="project-card flex">
            <div class="top">
                <img src={ec} alt=""/>
            </div>
            <div class="bottom">
                <p>Full Stack Web App built with React & Firebase </p>
                <p>April 21 2023</p>
                
            </div>
        </div>
        <div class="project-card flex">
            <div class="top">
                <img src={ec} alt=""/>
            </div>
            <div class="bottom">
                <p>Full Stack Web App built with React & Firebase </p>
                <p>April 21 2023</p>
                
            </div>
        </div>
        <div class="project-card flex">
            <div class="top">
                <img src={ec} alt=""/>
            </div>
            <div class="bottom">
                <p>Full Stack Web App built with React & Firebase </p>
                <p>April 21 2023</p>
               
            </div>
        </div>
        <div class="project-card flex">
            <div class="top">
                <img src={ec} alt=""/>
            </div>
            <div class="bottom">
                <p>Full Stack Web App built with React & Firebase </p>
                <p>April 21 2023</p>
               
            </div>
        </div>
    </div>
    </section></div>
  )
}
