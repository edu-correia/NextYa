import React from 'react';
import Logo from '../../Assets/logo01.svg'

const ContainerBoasVindas = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
}

const Image = {
    width:'7.5rem',

}

const Titulo = {
    fontSize:'2em',
    fontFamily:'Lexend Deca',
    fontWeight:'400',
    lineHeight:'30px',
    textAlign:'center',
    paddingTop:'20px'
}

const Mensage = {
    fontSize:'1.5em',
    fontFamily:'Inter',
    fontWeight:'400',
    textAlign:'center',
    margin:'1em'
}
const Info = {
    fontSize:'1.4em',
    fontFamily:'Inter',
    fontWeight:'400',
    textAlign:'center',
    margin:'1em'
}


export function BoasVindas(props){
    return(
        <>
            <div style={ContainerBoasVindas}>
                <div>
                    <img src={Logo} alt="Logo" style={Image}/>
                </div>
                <div>
                    <h1 style={Titulo}>{props.title}</h1>
                    <p style={Mensage}>{props.mensage}</p>
                    <p style={Info}>{props.info}</p>
                </div>
            </div>
        </>
    )
}