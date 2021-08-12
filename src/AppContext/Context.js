import { createContext } from "react";


export const ProprietarioContext = createContext({
    dados: null,
    setToDados: () => {}
})