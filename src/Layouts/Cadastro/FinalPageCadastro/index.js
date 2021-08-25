import Logo from '../../../Assets/NextYa.svg'
import Button from '../../../Components/ButtonGeneric'
import './style.scss'
import { Link } from 'react-router-dom'
import { RestauranteContext } from '../../../AppContext/Context'
import { useContext } from 'react'

const FinalPage = () => {

    const {restaurante} = useContext(RestauranteContext);

    console.log(restaurante)
    return(
        <>
            <div className="finalPage">
                <div>
                    <img src={Logo} className="logo--finalPage"/>
                </div>

                <div>
                    <p>Seu cadastro está sendo analisado e logo você será informado em seu email!</p>
                </div>

                <div>
                    <Link to="/" className="btn--link">
                        <Button text="voltar ao inicio" tipo="button" className="btnVoltar" altura="3rem" largura="15rem"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FinalPage