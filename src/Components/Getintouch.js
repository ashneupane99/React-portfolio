import React from 'react'
import { Layout } from './Layout'

export const Getintouch = () => {
  return (
    <Layout><section class="section6 flex" id="contact">
    <h2 class="title">Get In Touch</h2>
    <div class="socials flex">
        <a href="https://www.linkedin.com/in/aashutosh-neupane-1b2119246/"target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/ashneupane99"target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.facebook.com/sorav.neupane/"target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <i class="fa-brands fa-youtube"></i>
    </div>
    <h3 class="title">OR</h3>
    <div class="email-section flex">
        <div class="email flex">
            <a href="mailto:user@gmail.com">ashutos.neupane99@gmail.com</a>
            <div class="send">
                <i class="fa-solid fa-paper-plane"></i>
            </div>
        </div>
    </div>
</section></Layout>
  )
}
