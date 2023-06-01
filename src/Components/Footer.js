import React from 'react'

export const Footer = () => {
  return (
    <div> <footer>
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
                <li><a href="https://www.linkedin.com/in/aashutosh-neupane-1b2119246/"target="_blank">Linkdin</a></li>
                    <li><a href="https://github.com/ashneupane99"target="_blank">Github</a></li>
                   <li> <a href="">Youtube</a></li>
            </ul>
        </div>

    </div>
    <div class="footer-bottom">
        &copy; All rights reserved.
    </div>
</footer></div>
  )
}
