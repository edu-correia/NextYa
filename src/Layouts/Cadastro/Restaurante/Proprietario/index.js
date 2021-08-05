import React, { useState } from 'react';
import { useHistory } from 'react-router'
import { BoasVindas } from '../../../../Components/BoasVindas';
import BackArrow from '../../../../Components/BackArrow';
import Grid from '@material-ui/core/Grid';
import ButtonNext from '../../../../Components/ButtonGeneric';
import Axios from 'axios';
import './proprietario.scss';
import { Link } from 'react-router-dom';


const initialValue = {
    cpf: '',
    cnpj: '',
    nome: '',
    telefone: '',
    email: '',
    senha: '',
};



export const Proprietario = () => {

    const [values, setValues] = useState(initialValue);
    const history = useHistory();

    function onChange(ev){
        const{name, value} = ev.target;
        setValues({ ...values, [name]: value});
        
    }

    function onSubmit(ev){
        ev.preventDefault(); 
        history.push('/Cadastro/Teste')
        /* Axios.post('http://localhost:4000/usuarios/cadastro/proprietario', values)
            .then((response) => {
                console.log(response);
                history.push('/Cadastro/Proprietario/Restaurante');
            }); */

    }

    return(
        <>

        <Link to="/Cadastro">
            <BackArrow/>
        </Link>

            <div className="container-cadastro">

                <BoasVindas title="Bem vindo!" mensage="Digite os dados solicitados para efetuar o cadastro" info="Dados do proprietário:"/>

                <div className="form">
                    <form onSubmit={onSubmit}>
                        <Grid container >
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="nome" type="text" placeholder="Nome" onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="cpf" type="text" placeholder="CPF" onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="cnpj" type="text" placeholder="CNPJ" onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="telefone" type="text" placeholder="Telefone" onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="email" type="email" placeholder="Email" onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="senha" type="password" placeholder="senha" onChange={onChange}/>
                            </Grid>
                        </Grid>
                        <div className="btnNext">
                            <ButtonNext className="btnNext" text="Avançar" tipo="submit" altura="3rem" largura="15rem"/>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
};

