import React, { useState, useContext } from "react";
import { BoasVindas } from "../../Components/BoasVindas";
import BtnNext from "../../Components/ButtonGeneric";
import { Link } from "react-router-dom";
import BackArrow from "../../Components/BackArrow";
import { useHistory } from "react-router-dom";
import { Context } from '../../AppContext/Context'
import "./style.scss";
import Axios from "axios";

const initialValue = {
  email: '',
  senha: ''
}


const Email = () => {
  const history = useHistory();
  const {setToDadosLogin} = useContext(Context);
  const [values, setValues] = useState(initialValue);


  function onChange(ev) {
    const { value, name } = ev.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  
  function onSubmit(ev) {
    ev.preventDefault();
    setToDadosLogin(values);
    history.push('/Post/Login');
  }

  return (
    <>
      <Link to="/">
        <BackArrow />
      </Link>
      <div className="container--emailLogin">
        <BoasVindas
          title="Bem vindo(a) de volta!"
          info="Digite seus dados:"
        />

        <div>
          <form className="formEmail" onSubmit={onSubmit}>
            <input
              type="email"
              required
              name="email"
              placeholder="E-mail"
              onChange={onChange}
              value={values.email}
            />
            <input
              type="password"
              required
              name="senha"
              placeholder="Senha"
              onChange={onChange}
              value={values.senha}
            />
            <div className="btn">
              <BtnNext
                className="btnNext"
                text="Avançar"
                tipo="submit"
                altura="3rem"
                largura="25rem"
              />
            </div>
          </form>

          <div className="infoCadastro">
            <p>
              Novo por aqui? faça seu{" "}
              <Link className="Link --Login" to="/Cadastro">
                cadastro
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
