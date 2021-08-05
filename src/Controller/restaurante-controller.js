import Axios from 'axios';

export function CadastroRestaurante({proprietarioValues, restauranteValues}){
    Axios.post('http://localhost:4000/proprietario/cadastro/proprietario', proprietarioValues)
        .then((response) => {
            console.log(response);
            Axios.post('http://localhost:4000/restaurante/cadastro', restauranteValues)
                .then((response) => {
                    return (console.log(response))
                })
        }) 
}