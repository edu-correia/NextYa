import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BackArrow from '../../../../Components/BackArrow';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ButtonNext from '../../../../Components/ButtonGeneric';
import './restaurante.scss';
import { BoasVindas } from '../../../../Components/BoasVindas';
import { Context } from '../../../../AppContext/Context';


const restauranteValue = {
    nome: '',
    telefone: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: 0,
    descricao: '',
    complemento: '',
    fotorestaurante: null,
}

const Restaurante = () => {

    const {setToDadosRestaurante} = useContext(Context);
    const [values, setValues] = useState(restauranteValue);
    const history = useHistory();


    function onChange(ev){
        const{name, value} = ev.target;
        setValues({...values, [name]: value});
    }

    function upload(ev){
        let file = ev.target.files[0];
        let formData = new FormData();

        formData.append('fotorestaurante', file);
        setValues({...values, 'fotorestaurante':formData.get('fotorestaurante')});
    }

    function onSubmit(ev){
        ev.preventDefault(); 
        setToDadosRestaurante(values);
        history.push('/Post/Proprietario')
    
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
                                <input type="file" className="inputFile"  name="fotorestaurante" onChange={upload}/>
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

export default Restaurante;