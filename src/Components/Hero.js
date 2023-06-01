import React from 'react'
import profile from "../assets/profile.jpeg"
import resume from "../assets/resume.pdf"


export const Hero = () => {
  return (
    <div><section class="section1 grid" id="home">

    <div class="left flex">
        <img src= {profile} alt="profile pic"  />
    </div>
    <div class="right flex">
        <div class="flex">
            <div class="name">Aashutosh</div>
            <div class="tag">Web Developer</div>
        </div>
<button>
    <a href= {resume} download>Download CV <i class="fa-solid fa-download"></i></a>
</button>
    </div>
</section>
<section class="section2">
        <div class="info-container flex">
            <div class="info-list flex">

                {/* <!-- award  --> */}
                <div class="info-content flex">
                    <div class="icon-container flex">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <span>
                        <h5>IT</h5>
                        <p>Graduate</p>
                    </span>
                    <div class="info-divider"></div>
                
                
                 {/* <!-- project complete --> */}
                 <div class="info-content flex">
                    <div class="icon-container flex">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <span>
                        <h5>4+ Projects</h5>
                        <p>Completed</p>
                    </span>
                    <div class="info-divider"></div>
                    {/* <!-- year experience  --> */}
                    <div class="info-content flex">
                        <div class="icon-container flex">
                            <i class="fa-solid fa-award"></i>
                        </div>
                        <span>
                            <h5>1+ Year</h5>
                            <p>Job Experience</p>
                        </span>
                 </div>
            </div>
        </div>
        </div>
        </div>
</section>
</div>
  )
}
