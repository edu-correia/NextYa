import React from 'react';
import Logo from '../../Assets/NextYa2.svg'
import BtnAndroid from '../../Assets/google-play-badge.svg'
import BtnWindows from '../../Assets/windows download.svg'
import Box from '@material-ui/core/Box'
import './footer.scss'
import { Hidden } from '@material-ui/core';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

export default ()=>{
    return(
        <Box className="footer">
            <Box 
                className="logoAndBadges"
                marginLeft={{xs:"1rem", sm:"1rem", xl:"5rem"}}
                order={1}
            >
                <img src={Logo} alt="Logo" className="logo"/>

                <Box className="btnDownload">
                    <a href="/">
                        <img src={BtnAndroid} className="btnAndroid"/>
                    </a>
                    <Hidden smDown>
                        <a href="/">
                            <img src={BtnWindows} className="btnWindows"/>
                        </a>
                    </Hidden>
                </Box>
            </Box>

            <Box className="socialMidia" order={2}>
                <Box fontSize={{xs:"0.8rem", sm:"0.8rem", md:"1rem", lg:"1rem", xl:"1rem"}}>
                    <h1>Redes Sociais</h1>
                </Box>
                <Box className="iconsSocialMidia">
                    <a href="/">
                        <FaFacebookSquare/>
                    </a>
                    <a href="/">
                        <FaInstagramSquare/>
                    </a>
                    <a href="/">
                        <FaTwitterSquare/>
                    </a>
                </Box>  
            </Box>

            <Box order={3} className="info" paddingRight={{xs:"1.2rem", sm:"1.2rem", xl:"5rem"}}>
                <Box fontSize={{xs:"0.8rem", sm:"0.8rem", md:"1rem", lg:"1rem", xl:"1rem"}}>
                    <h1>Contato</h1>
                    <p>Entre em contato conosco</p>
                    <a href="/">contato@nextya.com.br</a>
                </Box>
            </Box>
        </Box>
    )
}