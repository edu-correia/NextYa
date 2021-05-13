import React, { useEffect } from 'react';
import Navbar from './Layouts/NavBar'
import Main from './Layouts/Main'
import Session from './Layouts/Session'
import Footer from './Layouts/Footer'


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