import { Box } from '@material-ui/core';
import React from 'react';
import BackArrow from '../../Components/BackArrow'
import Logo from '../../Assets/logo01.svg'
import Motoboy from '../../Assets/motoBoy.svg'
import Cozinheiro from '../../Assets/Cozinheiro.svg'
import BtnMotoqueiro from '../../Components/ButtonMotoqueiro'
import BtnRestaurante from '../../Components/ButtonRestaurante'
import { Link } from 'react-router-dom'
import './style.scss'
const escolhaCadastro = () => {
    return(

        <>
            <Link to="/">
                <BackArrow className="arrow"/>
            </Link>

            <Box className="conteudo">
                <Box>
                    <img src={Logo} alt="Logo" className="logo"/>
                </Box>

                <Box className="info">
                    <h1>Bem vindo!</h1>
                    <p>Escolha como deseja fazer seu cadastro:</p>
                </Box>
    
                <Box 
                    className="opcoes">
                    <Box className="motoboy">
                        <img src={Motoboy} alt="motoboy"/>
                        <Link to="/">
                            <BtnMotoqueiro/>
                        </Link>
                    </Box>
                    <Box className="cozinheiro">
                        <img src={Cozinheiro} alt="Cozinheiro"/>

                        <Link to="/Cadastro/Proprietario">
                            <BtnRestaurante/>
                        </Link>
                    </Box>  
                </Box>
            </Box>

            

            
        </>
    )
}

export default escolhaCadastro