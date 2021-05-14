import React, { useState } from 'react';
import Logo from '../../Assets/NextYa.png'
import './navbar.scss'
import DrawerComponent from './DrawerComponent/DrawerComponent.js'
import { Hidden, Box} from '@material-ui/core/'


export default ()=>{

    const [navbar, setNavBar] = useState(false);
    

    const changeNavBar = ()=>{
        if(window.scrollY >= 10){
            setNavBar(true);
        } else{
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeNavBar );

    return(

        <>
            <Box className={navbar? 'active':'navbar'} justifyContent={{lg:"space-between", xl:"space-between"}}>
                <DrawerComponent/>
                <Box 
                    display={{sm:"inline-block"}}
                    marginRight={{xs:"auto",sm:"auto", md:0, lg:0, xl:0}}
                    marginLeft={{xs:"auto",sm:"auto", md:"1.9rem", lg:"1.9rem", xl:"1.9rem"}}
                >
                    <a href="/">
                        <img src={Logo} alt="logo" />
                    </a>
                </Box>

               <Hidden smDown>
                    <Box className="header--cadastro">
                        <a href="/">Cadastro</a>
                    </Box>

                    <Box className="header--entrar">
                        <a href="/">Entrar</a>
                    </Box>
               </Hidden>
            </Box>
            
        </>


    )
}