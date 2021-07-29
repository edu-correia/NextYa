import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { List, ListItem, ListItemIcon, ListItemText, Hidden, } from '@material-ui/core'
import { BiMenu } from 'react-icons/bi'
import './DrawerComponent.scss'
import { Link } from 'react-router-dom'

const DrawerComponent = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    
    
    return(
        <>
            <Hidden mdUp>
                <button onClick={()=> setOpenDrawer(true)} >
                    <BiMenu className="buttonIcon"/>                
                </button>
            </Hidden>
            <Drawer
                open={openDrawer}
                onClose={()=>setOpenDrawer(false)}
                anchor="left"
                onOpen={()=> setOpenDrawer(true)}
            >
                <List className="list">
                    <ListItem button onClick={()=> setOpenDrawer(false)}>
                        <ListItemIcon className="listItemIcon">
                            <ListItemText><p>Entrar</p></ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={()=> setOpenDrawer(false)}>
                        <ListItemIcon>
                            <Link to="/cadastro" className="link">
                                <ListItemText><p>Cadastro</p></ListItemText>
                            </Link>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={()=> setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText><p>Suporte</p></ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>

        </>
    )
}

export default DrawerComponent