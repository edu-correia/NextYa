import { useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ProprietarioContext } from '../AppContext/Context';


export default function CadastroRestaurante(){
    const history = useHistory();
    const {proprietario} = useContext(ProprietarioContext);
    console.log(proprietario)
    
    function rota(){
        history.push('/Cadastro/Verificacao')
    }

    
    window.onload = rota()

    return(
        <span>Teste</span>
    )

}