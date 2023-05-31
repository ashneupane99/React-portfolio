
import './App.css';
import "./style.css"
import profile from "./assets/profile.jpeg";
import ec from "./assets/ec.png"


function App() {
  return (
<div className="">
    
    {/* <!-- Dark mode button  --> */}
<input type="checkbox" id="darkmode" class="dark-mode-checkbox"/> 
 
 <div class="wrapper">
    <label for="darkmode"><i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i></label>

    {/* <!-- header section  --> */}
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

    {/* <!-- hero section  --> */}
<section class="section1 grid" id="home">

    <div class="left flex">
        <img src= {profile} alt="profile pic"  />
    </div>
    <div class="right flex">
        <div class="flex">
            <div class="name">Aashutosh</div>
            <div class="tag">Web Developer</div>
        </div>
<button>
    <a href="./assets/user.png" download>Download CV <i class="fa-solid fa-download"></i></a>
</button>
    </div>
</section>

    {/* <!-- banner section  --> */}
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

    {/* <!-- skills section  --> */}
    <section class="section3" id="skills">
        <div class="skills-container flex">
            <div class="flex">
                <i class="fa-brands fa-html5"></i>
                <span>HTML</span>
            </div>
            <div class="flex">
                <i class="fa-brands fa-css3"></i>
                <span>CSS</span>
            </div>
            <div class="flex">
                <i class="fa-brands fa-js"></i>
                <span>JAVASCRIPT</span>
            </div>
            <div class="flex">
                <i class="fa-brands fa-react"></i>
                <span>REACT</span>
            </div>
            <div class="flex">
                <i class="fa-solid fa-folder-open"></i>
                <span>FIREBASE</span>
            </div>
        </div>
    </section>
    {/* <!-- projects section --> */}
    <section class="section4 flex" id="projects">
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
    </section>
    {/* <!-- about me section  --> */}
    <section class="section5 flex" id="about">
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

    </section>

    {/* <!-- get in touch section  --> */}
    <section class="section6 flex" id="contact">
        <h2 class="title">Get In Touch</h2>
        <div class="socials flex">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
        <h3 class="title">OR</h3>
        <div class="email-section flex">
            <div class="email flex">
                <a href="mailto:user@gmail.com">example@gmail.com</a>
                <div class="send">
                    <i class="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        </div>
    </section>
   {/* <!-- round  button  --> */}

  <button class="round " id="home">
    <a href="#home" > <i class="fa-solid fa-arrow-up-long"></i></a>
   
  </button>

    {/* <!-- footer section  --> */}
    <footer>
        <div class="footer-container flex">
            <div class="flex links">
                <h3>Links</h3>
                <ul class="flex">
                    <li>
                        <a href="#home">Home</a>
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
                    </ul>
                    
            </div>
            <div class="flex socials">
                <h3>External Links</h3>
                <ul class="flex">
                    <li><a href="">Linkdin</a></li>
                        <li><a href="">Github</a></li>
                       <li> <a href="">Youtube</a></li>
                </ul>
            </div>

        </div>
        <div class="footer-bottom">
            &copy; All rights reserved.
        </div>
    </footer>
</div>

 </div>

  );
}

export default App;
