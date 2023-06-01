
import './App.css';
import "./style.css"
import profile from "./assets/profile.jpeg";
import ec from "./assets/ec.png"
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { About } from './Components/About';
import { Getintouch } from './Components/Getintouch';
import { Footer } from './Components/Footer';


function App() {
  return (
<div className="">
    
    {/* <!-- Dark mode button  --> */}
<input type="checkbox" id="darkmode" class="dark-mode-checkbox"/> 
 
 <div class="wrapper">
  {/* <!-- header section  --> */}
 <Header/>

    
   

    {/* <!-- hero section  --> & {/* <!-- banner section  -->  */} 
<Hero/>

   


    {/* <!-- skills section  --> */}
    <Skills/>
    {/* <!-- projects section --> */}
   <Projects/>
    {/* <!-- about me section  --> */}
    <About/>

    {/* <!-- get in touch section  --> */}
    <Getintouch/>
   {/* <!-- round  button  --> */}

  <button class="round " id="home">
    <a href="#home" > <i class="fa-solid fa-arrow-up-long"></i></a>
   
  </button>

    {/* <!-- footer section  --> */}
   <Footer/>
</div>

 </div>

  );
}

export default App;
