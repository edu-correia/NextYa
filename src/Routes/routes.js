import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import LoginEmail from '../Pages/Login/Email'
import LoginSenha from '../Pages/Login/Password'
import EscolhaCadastro from '../Pages/Cadastro/EscolhaCadastro'
import CadastroMotoqueiro from '../Pages/Cadastro/CadastroMotoqueiro/Dados'
import CadastroProprietarios from '../Pages/Cadastro/CadastroRestaurante/Proprietario'
import CadastroRestaurante from '../Pages/Cadastro/CadastroRestaurante/Restaurante'
import FinalPage from '../Pages/Cadastro/FinalPage'
import RoutePrivate from './Private/Private'
import { Provider } from '../AppContext/Provider'

const Routes = () => {


    return(
        <>
            <Provider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/Login" component={LoginEmail} exact/>
                        <Route path="/Login/Senha" component={LoginSenha} exact/>
                        <Route path="/Cadastro" component={EscolhaCadastro} exact/>
                        <Route path="/Cadastro/Motoqueiro" component={CadastroMotoqueiro}/>
                        <Route path="/Cadastro/Proprietario" component={CadastroProprietarios} exact/>
                        <Route path="/Cadastro/Restaurante" component={CadastroRestaurante}/>
                        <Route path="/Cadastro/Verificacao" component={FinalPage}/>
                        {/* <Route path="/Post/Proprietario" component={CadastroProprietario}/>
                        <Route path="/Post/Restaurante" component={ControllerRestaurante}/> */}
                    </Switch>
                </BrowserRouter>
            </Provider>
            
        </>
    )
}

export default Routes