import React from 'react';
import Logo from '../../Assets/logo01.png';
import botaoAndroid from '../../Assets/botãoAndroid.png';
import botaoWindows from '../../Assets/botãoWindows.png';
import Motoqueiro from '../../Assets/motoBoy.png'
import Cozinheiro from '../../Assets/cozinheiro.png'
import './session.scss';
export default()=>{
    return(
        <div>
            <div className="sessionDownload">
                <div className="logoMensagem">
                    <img src={Logo} alt="Logo"/>
                    <h1>Faça Download do nosso app</h1>
                </div>
                <div className="botoes">
                    <a href="#" className="btnAndroid">
                        <img src={botaoAndroid} alt="Botão download android"/>
                    </a>
                    <a href="#" className="btnWindows">
                        <img src={botaoWindows} alt="Botão download windows"/>
                    </a>
                </div>
            </div>

            <div className="sessionInfo">
                    <div className="infoMotoqueiro">
                        <img src={Motoqueiro}/>
                        <div>
                            <h1>Ganhe entregando</h1>
                            <p>Faça entregas usando nossa plataforma</p>
                        </div>
                    </div>

                    <div className="infoRestaurante">
                        <img src={Cozinheiro}/>
                        <div>
                            <h1>Entrega rapida</h1>
                            <p>Solicite e ofereça entregas rapidas aos seus clientes</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}