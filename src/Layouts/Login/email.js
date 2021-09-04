import React, { useState, useContext } from "react";
import { BoasVindas } from "../../Components/BoasVindas";
import BtnNext from "../../Components/ButtonGeneric";
import { Link } from "react-router-dom";
import BackArrow from "../../Components/BackArrow";
import { useHistory } from "react-router-dom";
import { Context } from '../../AppContext/Context'
import "./style.scss";

const initialValue = {
  email: ''
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
    history.push("/Login/Senha");
  }

  return (
    <>
      <Link to="/">
        <BackArrow />
      </Link>
      <div className="container--emailLogin">
        <BoasVindas
          title="Bem vindo(a) de volta!"
          info="Digite seu endereço de e-mail:"
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
