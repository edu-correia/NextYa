import React from 'react';
import {BoasVindas} from '../../../../Components/BoasVindas'
import BackArrow from '../../../../Components/BackArrow';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './dadosMotoqueiro.scss'
import ButtonNext from '../../../../Components/ButtonGeneric';

function DadosMotoqueiro() {
  return (
      <>
        <Link to="/Cadastro">
            <BackArrow/>
        </Link>

        <div className="containerMotoqueiro--cadastro">
          <BoasVindas title="Bem vindo!" mensage="Digite os dados solicitados para efetuar o cadastro" info="Dados do motoqueiro"/>

          <div className="formMotoqueiro">
            <form>
              
              <Grid container>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <input required name="nome" type="text" placeholder="Nome"/>
                </Grid>

                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <input required name="cpf" type="text" placeholder="CPF"/>
                </Grid>

                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <input required name="telefone" type="text" placeholder="Telefone"/>
                </Grid>

                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <input required name="cnh" type="text" placeholder="CNH"/>
                </Grid>

                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <input required name="email" type="email" placeholder="E-mail"/>
                </Grid>

                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <input required name="senha" type="password" placeholder="Senha"/>
                </Grid>
              </Grid>

              <div className="btnNext">
                <ButtonNext className="btnNext" text="Avançar" tipo="submit" altura="3rem" largura="15rem"/>
              </div>

            </form>
          </div>

        </div>

      </>
  );
}

export default DadosMotoqueiro;