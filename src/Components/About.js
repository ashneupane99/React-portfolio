import React from 'react'
import profile from "../assets/profile.jpeg"

export const About = () => {
  return (
    <div><section class="section5 flex" id="about">
    <h2 class="title">About Me</h2>
    <div class="about-container flex">
        <div class="left">
            <img src={profile}width="250vw" alt=""/>
        </div>
        <div class="right flex">
            <h2>Aashutosh Neupane</h2>
            <p>Recently graduated Web Developer.</p>
            <p>Canberra, Australia</p>
           <div class="flex">
            <div class="tag">Interests</div>
            <div class="flex">
                <span>Coding</span>
                <span>Football</span>
                <span>Movies</span>
            </div>
           </div>
        </div>
    </div>

</section></div>
  )
}
