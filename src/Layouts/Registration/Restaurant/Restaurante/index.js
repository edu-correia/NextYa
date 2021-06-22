import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import BackArrow from '../../../../Components/BackArrow';
import { Link } from 'react-router-dom';
import Logo from '../../../../Assets/logo01.svg';
import Grid from '@material-ui/core/Grid';
import ButtonNext from '../../../../Components/ButtonNext';
import './restaurante.scss';



const initialValue ={
    nomeRestaurante: '',
    telefone: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: 0,
    descricao: '',
    complemento: '',
}



const Restaurante = () => {

    
    const [values, setValues] = useState(initialValue);
    const history = useHistory();

    function onChange(ev){
        const{name, value} = ev.target;
        setValues({ ...values, [name]: value});
    }

    function onSubmit(ev){
    ev.preventDefault(); 

    Axios.post('http://localhost:4000/restaurante/cadastro', values)
        .then((response) => {
            console.log(response);
            history.push('/');
        });
    }



    return(
        <>
            <Link to="/Cadastro/Proprietario">
                <BackArrow/>
            </Link>

            <div className="container-cad">
                <img src={Logo} alt="logo" className="logo"/>

                <div className="info">
                    <h1>Bem vindo!</h1>
                    <br/>
                    <p>Digite os dados solicitados para efetuar seu cadastro</p>
                    <br/>
                    <p>Dados do restaurante:</p>
                </div>

                <div className="form">
                    <form onSubmit={onSubmit}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="nomeRestaurante" type="text" placeholder="Nome do restaurante" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="telefone" type="text" placeholder="Telefone" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="cep" type="text" placeholder="CEP" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="rua" type="text" placeholder="Rua do restaurante" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="numero" type="number" placeholder="Nº" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input required name="bairro" type="text" placeholder="Bairro" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <input name="complemento" type="text" placeholder="Complemento(opcional)" onChange={onChange} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <textarea required name="descricao" placeholder="Breve descrição" onChange={onChange} />
                            </Grid>
                        </Grid>

                        <div>
                            <ButtonNext className="btnNext"/>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Restaurante