import React from 'react';
import {BoasVindas} from '../../Components/BoasVindas'
import BtnNext from '../../Components/ButtonGeneric'
import { Link } from 'react-router-dom';
import BackArrow from '../../Components/BackArrow';
import { useHistory } from 'react-router-dom';
import './style.scss'

const Email = () => {

    const history = useHistory();

    function onSubmit(ev){
        ev.preventDefault();
        //VERIFICAÇÃO DE EMAIL
        history.push('/Login/Senha');
    }

    return (
        <>            
            <Link to="/">
                <BackArrow/>
            </Link>
            <div className="container--emailLogin">
                <BoasVindas title="Bem vindo(a) de volta!" info="Digite seu endereço de e-mail:"/>

                <div>
                    <form className="formEmail" onSubmit={onSubmit}>
                        <input type ="email" required placeholder="E-mail"/>
                        <div className="btn">
                            <BtnNext className="btnNext" text="Avançar" tipo="submit" altura="3rem" largura="25rem"/>
                        </div>
                    </form>

                    <div className="infoCadastro">
                        <p>Novo por aqui? faça seu <Link className="Link --Login" to="/Cadastro">cadastro</Link></p>
                    </div>
                    
                   
                </div>
            </div>
        </>
    );
};

export default Email;