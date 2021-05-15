import React from 'react';
import Button from '@material-ui/core/Button';
import { DiWindows } from 'react-icons/di';
import './button.scss';

const ButtonWindows = () => {
    return(
        <>
            <Button variant="contained" className="buttonWindows" href="/">
                <DiWindows className="icon"/> Windows
            </Button>
        </>
    )
}

export default ButtonWindows;