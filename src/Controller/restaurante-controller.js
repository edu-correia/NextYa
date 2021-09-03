import { useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Context } from '../AppContext/Context';

export default function CadastroRestaurante(){
    const history = useHistory();
    const { restaurante } = useContext(Context);

    console.log(restaurante.dadosRestaurante);

    Axios.post('http://localhost:4000/restaurante/cadastro', restaurante.dadosRestaurante)
        .then((response) =>{
            console.log('Restaurante deu boa')
            console.log(response);
            history.push('/Cadastro/Verificacao');
        })
        .catch((error) => {
            console.log('Erro no restaurante');
            console.log(error);
        })

    return(
        <></>
    )
}