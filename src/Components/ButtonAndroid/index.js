import React from 'react';
import Button from '@material-ui/core/Button';
import { DiAndroid } from 'react-icons/di';
import './button.scss';

const ButtonAndroid = () => {
    return(
        <>
            <Button variant="contained" className="buttonAndroid">
                <DiAndroid className="icon"/> Android
            </Button>
        </>
    )
}

export default ButtonAndroid;