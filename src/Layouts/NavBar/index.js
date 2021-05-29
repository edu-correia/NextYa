import React, { useState } from 'react';
import Logo from '../../Assets/NextYa.svg'
import './navbar.scss'
import DrawerComponent from '../../Components/DrawerComponent/DrawerComponent.js'
import { Hidden, Box} from '@material-ui/core/'
import { Link } from 'react-router-dom'


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
                <Hidden mdUp>
                    <Box flexGrow={1}>
                        <DrawerComponent/>
                    </Box>
                </Hidden>
                <Box marginLeft={{md:"1.9rem", lg:"1.9rem", xl:"1.9rem"}} className="header--logo" flexGrow={{xs:2, sm:2}}>
                    <a href="/">
                        <img src={Logo} alt="logo" />
                    </a>
                </Box>
               <Hidden smDown>
                    <Box className="header--entrar">
                        <Link to="/Login">Entrar</Link>
                    </Box>
                    <Box className="header--cadastro">
                        <Link to="/Cadastro">Cadastro</Link>
                    </Box>
               </Hidden>

            </Box>
            
        </>


    )
}