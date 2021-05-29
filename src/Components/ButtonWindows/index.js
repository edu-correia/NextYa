import React from 'react';
import Button from '@material-ui/core/Button';
import { DiWindows } from 'react-icons/di';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    buttonStyles: {
        backgroundColor: '#fff',
        boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px',
        fontFamily: 'Lexend Deca',
        width: '9rem',
        height: '3rem',
        padding: '15px',
        transition: 'all ease-in 0.2s',

        '&:hover':{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.35)',

        }
    },

    icon:{
        color: '#AE03FF',
        width: '1.7rem',
        height: '1.7rem'
    }

    
});


const ButtonWindows = () => {
    const classes = useStyles();
    return(
        <>
            <Button href="/" className={classes.buttonStyles}>
                <DiWindows className={classes.icon}/> Windows
            </Button>
        </>
    )
}

export default ButtonWindows;