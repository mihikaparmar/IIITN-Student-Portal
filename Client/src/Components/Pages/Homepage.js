import React from 'react';

import Hero from '../hero/Hero'
import Instructor from '../Footer/Instructor'
import Contact from '../Footer/Contact'
import Footer from '../Footer/Footer'
import OurFeatures from '../OurFeatures'

export default function Homepage() {
  return(
      <>
      
      <Hero/>
      <OurFeatures/>
      <Instructor/>
      <Contact/>
      <Footer/>
      </>

  ) 
}
