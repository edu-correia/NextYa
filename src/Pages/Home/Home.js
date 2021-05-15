import Logo from '../../Assets/logo01.svg';
import Motoqueiro from '../../Assets/motoBoy.svg';
import Cozinheiro from '../../Assets/Cozinheiro.svg';
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
        <Box className="text" p={{xs:"1rem", sm:"1rem"}}>
          <h1>Venha conhecer nosso aplicativo</h1>
        </Box>
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
          marginRight={{md:"15px",lg:"15px", xl:"15px"}}   
        >
          <ButtonAndroid />
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
    >
      <Box className="infoMotoqueiro" order={1}>
        <img src={Motoqueiro} alt="Logo"/>
        <Box paddingRight="1rem">
          <h1>Ganhe entregando</h1>
          <p>Faça entregas usando nossa plataforma</p>
        </Box>
      </Box>
      <Box className="infoRestaurante" order={2} flexDirection={{xs:'row-reverse', sm:'row-reverse', md:'row', lg:'row'}}>
        <img src={Cozinheiro} alt="Logo"/>
        <Box 
          className="infoTextRestaurante"
          marginRight={{xs:"3.5rem", sm:"2rem"}}
        >
          <h1>Entrega rápida</h1>
          <p>Solicite e ofereça entregas rápidas aos seus clientes</p>
        </Box>
      </Box>
    </Box>


  </>
)

export default Home;
