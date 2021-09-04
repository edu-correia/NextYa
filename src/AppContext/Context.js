import { createContext } from "react";


export const Context = createContext({

    dadosProprietario: null,
    setToDadosProprietario: () => {},

    dadosRestaurante: null,
    setToDadosRestaurante: () => {},

    dadosLogin: null,
    setToDadosLogin: () => {},

    token: null,
    setToken: () => {},
})

