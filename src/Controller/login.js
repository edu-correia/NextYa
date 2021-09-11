import React, {useContext} from 'react';
import { Context } from '../AppContext/Context';
import Axios from 'axios';
import { useHistory } from 'react-router';
export default () =>{
    const {dadosLogin} = useContext(Context)
    const {setToken} = useContext(Context)
    const history = useHistory();
    
    Axios.post('http://localhost:4000/proprietario/login', dadosLogin.dadosLogin)
    .then((response) => {
        setToken(response.data.token)
        history.push('/Cadastro/Verificacao')
    }).catch(()=>{
        Axios.post('http://localhost:4000/motoqueiro/login', dadosLogin.dadosLogin)
            .then((response)=>{
                setToken(response.data.token)
                history.push('/Cadastro/Verificacao')
            }).catch((error) => {
                console.log(error);
            })
    })

    return(
        <>
        </>
    )
}