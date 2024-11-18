import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/HeaderWithout'
import Apoie from '../Components/Apoie'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'


function Apoiar() {
  return (
    <>
    <Header/>
	  <Apoie/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Apoiar;
