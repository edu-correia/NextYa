import Logo from '../../../Assets/NextYa.svg'
import Button from '../../../Components/ButtonNext'
import './style.scss'
import { Link } from 'react-router-dom'

const FinalPage = () => {

    
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
                        <Button text="voltar ao inicio" tipo="button" className="btnVoltar"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FinalPage