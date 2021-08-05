import React from 'react';

const Btn = ({text, altura, largura, tipo}) => {

    const styleButton = {
        backgroundColor: '#AE03FF',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        color: '#fff',
        width: largura,
        height: altura,
        borderRadius: '0',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: '1.1rem', 
        cursor: 'pointer'
    }

    return(
        <>
            <button style={styleButton} type={tipo}>{text}</button>
        </>
    )
}

export default Btn