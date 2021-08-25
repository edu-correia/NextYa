import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import LoginEmail from '../Pages/Login/Email'
import LoginSenha from '../Pages/Login/Password'
import EscolhaCadastro from '../Pages/Cadastro/EscolhaCadastro'
import CadastroMotoqueiro from '../Pages/Cadastro/CadastroMotoqueiro/Dados'
import CadastroProprietario from '../Pages/Cadastro/CadastroRestaurante/Proprietario'
import CadastroRestaurante from '../Pages/Cadastro/CadastroRestaurante/Restaurante'
import FinalPage from '../Pages/Cadastro/FinalPage'
import ControllerRestaurante from '../Controller/restaurante-controller'
import { ProprietarioProvider } from '../AppContext/Provider'

const Routes = () => {


    return(
        <>
            <ProprietarioProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/Login" component={LoginEmail} exact/>
                        <Route path="/Login/Senha" component={LoginSenha}/>
                        <Route path="/Cadastro" component={EscolhaCadastro} exact/>
                        <Route path="/Cadastro/Motoqueiro" component={CadastroMotoqueiro}/>
                        <Route path="/Cadastro/Proprietario" component={CadastroProprietario} exact/>
                        <Route path="/Cadastro/Restaurante" component={CadastroRestaurante}/>
                        <Route path="/Cadastro/Verificacao" component={FinalPage}/>
                        <Route path="/teste" component={ControllerRestaurante}/>
                    </Switch>
                </BrowserRouter>
            </ProprietarioProvider>
            
        </>
    )
}

export default Routes