import React, { createContext } from 'react'

export const ProprietarioContext = createContext({});

export const ProprietarioProvider = (props) => {
    const dados = {
        name: 'Teste'
    }

    return(
        <ProprietarioContext.Provider value={{dados}}>
            {props.children}
        </ProprietarioContext.Provider>
    )
}

