import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const ButtonAvancar = withStyles(() => ({
    root: {
        backgroundColor: '#AE03FF',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        color: '#fff',
        width: '15rem',
        height: '3rem',
        borderRadius: '0',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: '1.1rem', 
        '&:hover': {
            backgroundColor: '#AE03FF'
        }
    }
}))(Button);

const ButtonNext = ()=>{
    return(
        <ButtonAvancar type="submit">
            Avançar
        </ButtonAvancar>
    )
}

export default ButtonNext;
