import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import LoginEmail from '../Pages/Login/Email'
import LoginSenha from '../Pages/Login/Password'
import EscolhaCadastro from '../Pages/Cadastro/EscolhaCadastro'
import CadastroProprietario from '../Pages/Cadastro/CadastroRestaurante/Proprietario'
import CadastroRestaurante from '../Pages/Cadastro/CadastroRestaurante/Restaurante'
import FinalPage from '../Pages/Cadastro/FinalPage'


const Routes = () => {


    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/Login" component={LoginEmail} exact/>
                    <Route path="/Login/Senha" component={LoginSenha}/>
                    <Route path="/Cadastro" component={EscolhaCadastro} exact/>
                    <Route path="/Cadastro/Proprietario" component={CadastroProprietario} exact/>
                    <Route path="/Cadastro/Proprietario/Restaurante" component={CadastroRestaurante}/>
                    <Route path="/Cadastro/Verificacao" component={FinalPage}/>
                </Switch>
            </BrowserRouter>
            
        </>
    )
}

export default Routes