import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import BackArrow from '../../../Components/BackArrow';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ButtonNext from '../../../Components/ButtonGeneric';
import './restaurante.scss';
import './proprietario.scss';
import { BoasVindas } from '../../../Components/BoasVindas';
import { ProprietarioContext } from '../../../AppContext/Context';
import CadastroRestaurante from '../../../Controller/restaurante-controller';


/* 
const restauranteValue ={
    nomeRestaurante: '',
    telefone: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: 0,
    descricao: '',
    complemento: '',
}
*/
const proprietarioValue = {
    nome: '',
    cnpj: '',
    email: '',
    senha: '',
    telefone: ''
};






export const Proprietario = () => {
    
    const {setToDados} = useContext(ProprietarioContext);
    const[values, setValues] = useState(proprietarioValue);
    
    function onChange(ev){
        const{name, value} = ev.target;
        setValues({...values, [name]: value});
    }
    
    function onSubmit(ev){
        ev.preventDefault(); 
        setToDados(values);
        CadastroRestaurante();

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


export const Restaurante = () => {

    const history = useHistory();

    function onChange(ev){
        const{name, value} = ev.target;
/*         setValues({ ...values, [name]: value}); */
    }

    function onSubmit(ev){
        ev.preventDefault(); 
    /* Axios.post('http://localhost:4000/restaurante/cadastro', values)
        .then((response) => {
            console.log(response);
            history.push('/cadastro/verificacao');
        }); */
    }



    return(
        <>
            <Link to="/Cadastro/Proprietario">
                <BackArrow/>
            </Link>

            <div className="container-cad">
                <BoasVindas title="Bem vindo!" mensage="Digite os dados solicitados para efetuar seu cadastro:" info="Dados do restaurante"/>

                <div className="form">
                    <form onSubmit={onSubmit}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input className="camposCadastro" required name="nomeRestaurante" type="text" placeholder="Nome do restaurante" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input className="camposCadastro" required name="telefone" type="text" placeholder="Telefone" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input className="camposCadastro" required name="cep" type="text" placeholder="CEP" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input className="camposCadastro" required name="rua" type="text" placeholder="Rua do restaurante" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input className="camposCadastro" required name="numero" type="number" placeholder="Nº" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input className="camposCadastro" required name="bairro" type="text" placeholder="Bairro" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input className="camposCadastro" name="complemento" type="text" placeholder="Complemento(opcional)" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input type="file" required name="fotorestaurante" id="selecao-arquivo" accept="image/png, image/jpeg" className="inputFile"/> 
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <textarea required name="descricao" placeholder="Breve descrição" onChange={onChange} />
                            </Grid>

                            
                        </Grid>
                        
                        <div>
                            <ButtonNext className="btnNext" text="Avançar" altura="3rem" largura="15rem" tipo="submit"/>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
