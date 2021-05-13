import React from 'react';
import BackgroundVideo from '../../Assets/video/Backgroundvideo.webm'
import Seta from '../../Assets/seta.png'
import './main.scss'

export default()=>{

    return(
        <div className="container">
            <video autoPlay loop muted className="video">
                <source src={BackgroundVideo} type="video/webm"/>
            </video>

            <div className="seta">
                <img src={Seta} alt="Seta para baixo"/>
            </div>

        </div>
    )
}