import Logo from '../../Assets/logo01.png';
import Motoqueiro from '../../Assets/motoBoy.png';
import Cozinheiro from '../../Assets/cozinheiro.png';
import './session.scss';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { DiAndroid } from 'react-icons/di';
import { DiWindows } from 'react-icons/di';

const Home = () => (
  <>
    <div className="sessionDownload">
      <div className="logoMensagem">
        <img src={Logo} alt="Logo"/>
        <h1>Faça Download do nosso app</h1>
      </div>
    </div>

    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box display>

      </Box>
    </Box>


    <div className="sessionInfo">
      <div className="infoMotoqueiro" >
        <img src={Motoqueiro}/>
        <div>
          <h1>Ganhe entregando</h1>
          <p>Faça entregas usando nossa plataforma</p>
        </div>
      </div>

      <div className="infoRestaurante" >
        <img src={Cozinheiro}/>
        <div>
          <h1>Entrega rapida</h1>
          <p>Solicite e ofereça entregas rapidas aos seus clientes</p>
        </div>
      </div>
    </div>
  </>
)

export default Home;
