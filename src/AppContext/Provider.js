import { useState } from "react";
import { Context } from "./Context";
import useStorage from "../utils/useStorage";

const defaultProprietario = {
  dadosProprietario: {
    nome: "",
    cnpj: "",
    email: "",
    senha: "",
    telefone: "",
  },
};

const defaultRestaurante = {
  dadosRestaurante: {
    nome: "",
    telefone: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: 0,
    descricao: "",
    fotorestaurante: null,
    complemento: "",
  },
};

const defaultLogin = {
  dadosLogin:{
    email: "",
    senha: ""
  }
}

export const Provider = ({ children }) => {
  const [proprietario, setProprietario] = useState(defaultProprietario);

  const [token, setToken] = useStorage("token");

  function setToDadosProprietario(DadosProprietario) {
    setProprietario({
      dadosProprietario: {
        nome: DadosProprietario.nome,
        cnpj: DadosProprietario.cnpj,
        email: DadosProprietario.email,
        senha: DadosProprietario.senha,
        telefone: DadosProprietario.telefone,
      },
    });
  }

  const [restaurante, setRestaurante] = useState(defaultRestaurante);

  function setToDadosRestaurante(DadosRestaurante) {
    setRestaurante({
      dadosRestaurante: {
        nome: DadosRestaurante.nome,
        telefone: DadosRestaurante.telefone,
        cep: DadosRestaurante.cep,
        rua: DadosRestaurante.rua,
        bairro: DadosRestaurante.bairro,
        numero: DadosRestaurante.numero,
        descricao: DadosRestaurante.descricao,
        fotorestaurante: DadosRestaurante.fotorestaurante,
        complemento: DadosRestaurante.complemento,
      },
    });
  }

  const [dadosLogin, setDadosLogin] = useState(defaultLogin);

  function setToDadosLogin(DadosDoLogin){
    setDadosLogin({
      dadosLogin: {
        email: DadosDoLogin.email,
        senha: DadosDoLogin.senha
      }
    });
  }

  return (
    <Context.Provider
      value={{
        proprietario,
        setToDadosProprietario,
        restaurante,
        setToDadosRestaurante,
        dadosLogin,
        setToDadosLogin,
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};
