import React from 'react';
import {BoasVindas} from '../../Components/BoasVindas'
import BtnNext from '../../Components/ButtonGeneric'
import { Link } from 'react-router-dom';
import BackArrow from '../../Components/BackArrow';
import './style.scss'

function Senha() {

  return (
    <>            
        <Link to="/Login">
            <BackArrow/>
        </Link>
        <div className="container--emailLogin">
            <BoasVindas title="Bem vindo(a) de volta!" info="Digite sua senha:"/>

            <div>
                <form className="formEmail">
                    <input type ="password" required placeholder="Senha"/>
                    <div className="btn">
                        <BtnNext className="btnNext" text="Avançar" tipo="submit" altura="3rem" largura="25rem"/>
                    </div>
                </form>              
            
            </div>
        </div>
    </>
  )
}

export default Senha;