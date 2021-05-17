import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { List, ListItem, ListItemIcon, ListItemText, Hidden, withStyles} from '@material-ui/core'
import { BiMenu } from 'react-icons/bi'
import './DrawerComponent.scss'
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
                            <ListItemText><p>Cadastro</p></ListItemText>
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