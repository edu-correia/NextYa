import { createContext } from "react";


export const ProprietarioContext = createContext({
    dados: null,
    setToDados: () => {}
})

export const RestauranteContext = createContext({
    dados: null,
    setToDados: () => {}
})