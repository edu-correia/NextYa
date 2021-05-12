import React, { useEffect } from 'react';
import Navbar from './Components/NavBar'
import Main from './Components/Main'
import Session from './Components/Session'
import Footer from './Components/Footer'


export default ()=>{

  useEffect(()=>{
    console.log("É O ZONDA!");
  }, [])

    return(
      <>
          <Main/>
          <Navbar/>
          <Session/>
          <Footer/>
          
      </>

    )
}