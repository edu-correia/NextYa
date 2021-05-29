import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import LoginEmail from '../Pages/Login/Email'
import LoginSenha from '../Pages/Login/Password'
import EscolhaCadastro from '../Pages/Cadastro/EscolhaCadastro'
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/Login" component={LoginEmail} exact/>
                <Route path="/Login/Senha" component={LoginSenha}/>
                <Route path="/Cadastro" component={EscolhaCadastro}/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes