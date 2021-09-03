import { useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Context } from '../AppContext/Context';


export default function CadastroProprietario(){
    const history = useHistory();
    const { proprietario } = useContext(Context);
    console.log(proprietario.dadosProprietario);

    Axios.post('http://localhost:4000/proprietario/cadastro', proprietario.dadosProprietario)
        .then((response) => {
            console.log('Proprietario deu bom')
            console.log(response);
            history.push('/Push/Restaurante');
            
        })
        .catch((error) => {
            console.log('Erro no proprietario')
            console.log(error);
        })
 
        

    return(
        <span>Teste</span>
    )

}