import React from 'react';
import BoasVindas from '../../../../Components/BoasVindas'
import BackArrow from '../../../../Components/BackArrow';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import ButtonNext from '../../../../Components/ButtonGeneric';

function DadosMotoqueiro() {
  return (
      <>
        <Link to="/Cadastro">
            <BackArrow/>
        </Link>
      </>
  );
}

export default DadosMotoqueiro;