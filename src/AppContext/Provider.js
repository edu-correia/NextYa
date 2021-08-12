import { useState } from "react";
import { ProprietarioContext } from "./Context";

const defaultProprietario = {
    dados: {
        nome: '',
        cnpj: '',
        email: '',
        senha: '',
        telefone: ''
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