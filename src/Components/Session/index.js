import React from 'react';
import Logo from '../../Assets/logo01.png';
import Motoqueiro from '../../Assets/motoBoy.png';
import Cozinheiro from '../../Assets/cozinheiro.png';
import './session.scss';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { DiAndroid } from 'react-icons/di';
import { DiWindows } from 'react-icons/di';

export default()=>{
    return(
        <>
            <Grid container className="sessionDownload">
                <Grid item className="logoMensagem">
                    <img src={Logo} alt="Logo"/>
                    <h1>Faça Download do nosso app</h1>
                </Grid>
            </Grid>

                <Grid   
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    sx={12}
                > 
                    <Grid item spacing={1} sm={12} xl={6}> 
                        <Button>
                            <DiAndroid color="#AE03FF" size="2em" /> Android
                        </Button>
                    </Grid>

                    <Grid item spacing={1} sm={12} xl={6}>
                        <Button className="botoes">
                            <DiWindows color="#AE03FF" size="2em"/> Windows
                        </Button>
                    </Grid>

                </Grid>
                

            <div className="sessionInfo">
                    <Grid className="infoMotoqueiro" >
                        <img src={Motoqueiro}/>
                        <div>
                            <h1>Ganhe entregando</h1>
                            <p>Faça entregas usando nossa plataforma</p>
                        </div>
                    </Grid>

                    <Grid className="infoRestaurante" >
                        <img src={Cozinheiro}/>
                        <div>
                            <h1>Entrega rapida</h1>
                            <p>Solicite e ofereça entregas rapidas aos seus clientes</p>
                        </div>
                    </Grid>
                </div>
        </>
    )
}