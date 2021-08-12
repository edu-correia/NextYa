import { useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ProprietarioContext } from '../AppContext/Context';


export default function CadastroRestaurante(){

    const {proprietario} = useContext(ProprietarioContext);
    const History = useHistory();

    {(proprietario && !proprietario.dados) && (
        History.push('/')
    )}
    History.push('/cadastro/verificacao')

}