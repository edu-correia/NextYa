import React from 'react';
import Logo from '../../Assets/NextYa2.png'
import BtnAndroid from '../../Assets/google play download.png'
import BtnWindows from '../../Assets/windows download.png'
import './footer.scss'

export default ()=>{
    return(
        <footer>
            <div className="logo--suporte">
                <img src={Logo}/>
                <a href="#">Suporte</a>
            </div>

            <div className="btnDowload">
                <a href="#">
                    <img src={BtnAndroid} alt="Download Google Play"/>
                </a>
                <a href="#">
                    <img src={BtnWindows} alt="Download Windows"/>
                </a>
            </div>

        </footer>
    )
}