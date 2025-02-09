import * as React from 'react';
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { textContent } from './FontStyle';
export const MenuComponent = (props) => {
    const { menuName, display ,setValue} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const onOpen = (event) => {
        setAnchorEl(event.currentTarget);
       
    };
    const onClose = (newValue) => {
        setAnchorEl(null);
        setValue(newValue);
        
    };

    return (
        <>
            <IconButton sx={{ display: display }}>
                <MenuIcon id="basic-button" sx={{ color: '#fff' }} onClick={onOpen} />
            </IconButton>
            <Menu
                id="basic-menu"
                open={open}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    top: '45px',
                    left: '23px'
                }}

            >
                {
                    menuName?.map((itm) => {
                        return (
                            <MenuItem sx={{...textContent,color:'#000'}} key={itm.name} onClick={()=>{onClose(itm.name)}}>{itm.name}</MenuItem>
                        )
                    })
                }
            </Menu>
        </>
    )

}