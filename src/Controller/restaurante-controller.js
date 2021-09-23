import api from "../services/api"

async function cadastrarRestaurante(dados){
    const response = await api.post('/restaurante/cadastro', dados);

    /* Error handling */

    return response;
}

export {
    cadastrarRestaurante
}