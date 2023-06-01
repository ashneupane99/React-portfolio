import React from 'react'
import { Layout } from './Layout'

export const Skills = () => {
  return (
    <Layout>
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
</Layout>
  )
}
