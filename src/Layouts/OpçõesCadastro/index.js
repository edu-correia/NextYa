import React from 'react';
import { Box } from '@material-ui/core';
import BackArrow from '../../Components/BackArrow'
import Motoboy from '../../Assets/motoBoy.svg'
import Cozinheiro from '../../Assets/Cozinheiro.svg'
import BtnCadastro from '../../Components/ButtonGeneric'
import { Link } from 'react-router-dom'
import { BoasVindas } from '../../Components/BoasVindas';
import './style.scss'
const escolhaCadastro = () => {
    return(

        <>
            <Link className="Link" to="/">
                <BackArrow className="arrow"/>
            </Link>

            <Box className="conteudo">

                <BoasVindas title="Bem vindo!" mensage="Escolha como deseja fazer seu cadastro:"/>
    
                <Box 
                    className="opcoes">
                    <Box className="motoboy">
                        <img src={Motoboy} alt="motoboy"/>
                        <Link className="Link" to="/Cadastro/Motoqueiro">
                            <BtnCadastro text="Motoqueiro" altura="3rem" largura="9rem"/>
                        </Link>
                    </Box>
                    <Box className="cozinheiro">
                        <img src={Cozinheiro} alt="Cozinheiro"/>
                        <Link className="Link" to="/Cadastro/Proprietario">
                            <BtnCadastro text="Restaurante" altura="3rem" largura="9rem"/>
                        </Link>
                    </Box>  
                </Box>
            </Box>
        </>
    )
}

export default escolhaCadastro