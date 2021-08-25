import { useState } from "react";
import { ProprietarioContext, RestauranteContext } from "./Context";

const defaultProprietario = {
    dados: {
        nome: '',
        cnpj: '',
        email: '',
        senha: '',
        telefone: ''
    }
}

const defaultRestaurante = {
    dados:{
        nomeRestaurante: '',
        telefone: '',
        cep: '',
        rua: '',
        bairro: '',
        numero: 0,
        descricao: '',
        fotorestaurante: '',
        complemento: '',
    }
}



export const ProprietarioProvider = ({children}) =>{
    const[proprietario, setProprietario] = useState(defaultProprietario);

    function setToDados(DadosProprietario){
        setProprietario({
            dados: {
                nome: DadosProprietario.nome,
                cnpj: DadosProprietario.cnpj,
                email: DadosProprietario.email,
                senha: DadosProprietario.senha,
                telefone: DadosProprietario.telefone
            }
        })
        
    }

    return(
        <ProprietarioContext.Provider value={{proprietario, setToDados}}>
            {children}
        </ProprietarioContext.Provider>
    )
}

export const RestauranteProvider = ({children}) => {
    const[restaurante, setRestaurante] = useState(defaultRestaurante);

    function setToDados(DadosRestaurante){
        setRestaurante({
            dados: {
                nomeRestaurante: DadosRestaurante.nomeRestaurante,
                telefone: DadosRestaurante.telefone,
                cep: DadosRestaurante.cep,
                rua: DadosRestaurante.rua,
                bairro: DadosRestaurante.bairro,
                numero: DadosRestaurante.numero,
                descricao: DadosRestaurante.descricao,
                fotorestaurante: DadosRestaurante.fotorestaurante,
                complemento: DadosRestaurante.complemento
            }
        })
    }

    return(
        <RestauranteContext.Provider value={{restaurante, setToDados}}>
            {children}
        </RestauranteContext.Provider>
    )
}
