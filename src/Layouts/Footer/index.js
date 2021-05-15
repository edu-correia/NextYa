import React from 'react';
import Logo from '../../Assets/NextYa2.svg'
import BtnAndroid from '../../Assets/google-play-badge.svg'
import BtnWindows from '../../Assets/windows download.svg'
import Box from '@material-ui/core/Box'
import './footer.scss'
import { Hidden } from '@material-ui/core';

export default ()=>{
    return(
        <Box className="footer">
            <Box
                className="logo--suporte"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginLeft={{xs:"3rem", sm:"3rem", xl:"5rem"}}
                marginRight={{xs:"3rem", sm:"3rem", xl:"5rem"}}
            >
                <img src={Logo} alt="Logo"/>
                <Box>
                    <a href="/">Suporte</a>
                </Box>
            </Box>
            <Box 
                className="btnDownload"
                display="flex"
                flexDirection="column"
                paddingTop="1rem"
                marginLeft={{xs:"2.1rem", sm:"2.1rem", xl:"4.1rem"}}
                marginRight={{xs:"2.1rem", sm:"2.1rem", xl:"4.1rem"}}
            >
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
    )
}