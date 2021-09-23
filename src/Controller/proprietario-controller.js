import api from '../services/api';

async function cadastrarProprietario(dados){
    const response = await api.post('/proprietario/cadastro', dados);

    /*Error handling*/

    return response;
}

export {
    cadastrarProprietario
}