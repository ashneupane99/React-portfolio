import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({children}) => {
  return (
    <>
    {/* // header */}
<Header/>

    {/* // dynamic part  */}
<main className="main" style={{minHeight:"70vh"}}>
{children}
</main>

    {/* // footer  */}
    <Footer/>
    </>
  )
}
