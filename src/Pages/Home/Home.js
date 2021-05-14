import Logo from '../../Assets/logo01.png';
import Motoqueiro from '../../Assets/motoBoy.png';
import Cozinheiro from '../../Assets/cozinheiro.png';
import ButtonAndroid from '../../Components/ButtonAndroid/';
import ButtonWindows from '../../Components/ButtonWindows/';
import './session.scss';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

const Home = () => (
  <>
    <Box className="sessionDownload">
      <Box className="logoMensagem">
        <img src={Logo} alt="Logo"/>
        <h1>Faça Download do nosso app</h1>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        paddingTop="15px"
      >
        <Box 
          order={1}
          paddingRight="15px"
        >
          <ButtonAndroid/>
        </Box>

        <Hidden smDown>
          <Box order={2}>
            <ButtonWindows/>
          </Box>
        </Hidden>
      </Box>

    </Box>

    <Box 
      className="sessionInfo"
      flexDirection={{xs:'column', sm:'column', md:'row', lg:'row'}}
      p={{xs:1, sm:2, md:3, lg:4}}
    >
      <Box className="infoMotoqueiro" order={1}>
        <img src={Motoqueiro} alt="Logo"/>
        <Box>
          <h1>Ganhe entregando</h1>
          <p>Faça entregas usando nossa plataforma</p>
        </Box>
      </Box>
      <Box className="infoRestaurante" order={2} flexDirection={{xs:'row-reverse', sm:'row-reverse', md:'row', lg:'row'}}>
        <img src={Cozinheiro} alt="Logo"/>
        <Box>
          <h1>Entrega rapida</h1>
          <p>Solicite e ofereça entregas rapidas aos seus clientes</p>
        </Box>
      </Box>
    </Box>


  </>
)

export default Home;
