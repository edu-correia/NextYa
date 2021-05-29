import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'


const ButtonMotoboy = withStyles(() => ({
    root: {
        backgroundColor: '#AE03FF',
        color: '#fff',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: 'Inter',
        fontWeight: '700',
        width: '9rem',
        height: '3rem',
        padding: '15px',
        transition: 'all ease-in 0.2s',
        

        '&:hover': {
            boxShadow:'0px 6px 10px rgba(0, 0, 0, 0.30)',
            backgroundColor: '#AE03FF',
        },

    },
}))(Button);

const ButtonMotoqueiro = () => {
    
    return(
        <>
            <ButtonMotoboy>
                Motoqueiro
            </ButtonMotoboy>
        </>
    )
}

export default ButtonMotoqueiro