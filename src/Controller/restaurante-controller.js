import { useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ProprietarioContext, RestauranteContext } from '../AppContext/Context';


export default function CadastroRestaurante(){
    const history = useHistory();

    function rota(){
        history.push('/Cadastro/Verificacao')
    }

    
    window.onload = rota()

    return(
        <span>Teste</span>
    )

}