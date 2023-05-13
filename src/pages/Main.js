import React, { useState } from 'react'
import '../styles/Main.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Main = () => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className={isClicked ? "main" : "main active"}>
      <Navbar isClicked={isClicked} handleClick={handleClick}/>
      <Hero />
      <div className='mobile-footer'>
        <Footer />
      </div>
    </div>
  )
}
export default Main