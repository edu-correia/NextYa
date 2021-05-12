import React, { useState } from 'react';
import Logo from '../../Assets/NextYa.png'
import './navbar.scss'

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
        <header className={navbar? 'active':'navbar'}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="logo" />
                </a>
            </div>

            <div className="header--cadastro">
                <a href="/">Cadastro</a>
            </div>

            <div className="header--entrar">
                <a href="/">Entrar</a>
            </div>

        </header>
    )
}