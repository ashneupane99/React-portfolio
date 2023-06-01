
import './App.css';
import "./style.css"
import { Hero } from './Components/Hero';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { About } from './Components/About';
import { Getintouch } from './Components/Getintouch';
import { Footer } from './Components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    
<div className="">
    
    {/* <!-- Dark mode button  --> */}
<input type="checkbox" id="darkmode" class="dark-mode-checkbox"/> 
 
 <div class="wrapper">
  {/* <!-- header section  --> */}



 <Routes> 
 <Route path="/" element= {<Hero/>}/>
 <Route path="skills" element= {<Skills/>}/>
 <Route path="projects" element= { <Projects/>}/>
 <Route path="about" element= {<About/>}/>
 <Route path="contact" element= {  <Getintouch/>}/>

    {/* <!-- hero section  --> & {/* <!-- banner section  -->  */} 


</Routes>


    {/* <!-- skills section  --> */}
   
    {/* <!-- projects section --> */}
  
    {/* <!-- about me section  --> */}
    

    {/* <!-- get in touch section  --> */}
   
   {/* <!-- round  button  --> */}

  <button class="round " id="home">
    <a href="#home" > <i class="fa-solid fa-arrow-up-long"></i></a>
   
  </button>

    {/* <!-- footer section  --> */}

</div>

 </div>

  );
}

export default App;
