import React, { useState, useContext } from "react";
import { BoasVindas } from "../../Components/BoasVindas";
import BtnNext from "../../Components/ButtonGeneric";
import { Link } from "react-router-dom";
import BackArrow from "../../Components/BackArrow";
import { Context } from "../../AppContext/Context";
import "./style.scss";

const initialValue ={
  senha: ''
}

function Senha() {

  const [values, setValues] = useState(initialValue);
  const {setToDadosLogin} = useContext(Context);
  const {dadosLogin} = useContext(Context);
  function onChange(ev) {
    const { value, name } = ev.target;
    setValues({
      ...values,
      [name]:value,
    });
  }

  function onSubmit (ev){
    ev.preventDefault();
    let email = dadosLogin.dadosLogin.email;
    setToDadosLogin(email, values)
    console.log(values)
  }


  return (
    <>
      <Link to="/Login">
        <BackArrow />
      </Link>
      <div className="container--emailLogin">
        <BoasVindas title="Bem vindo(a) de volta!" info="Digite sua senha:" />

        <div className="formEmail">
          <form onSubmit={onSubmit}>
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
        </div>
      </div>
    </>
  );
}

export default Senha;
