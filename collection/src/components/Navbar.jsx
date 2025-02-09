import { AppBar, Toolbar, Typography, Stack, Avatar, Tab, Tabs } from "@mui/material";
import * as React from "react";
import { MenuComponent } from "./MenuComponent";
export const NavBar = (props) => {
    const { value, setValue } = props;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const menuName = [
        {
            name: 'Home',
            value: "Home",
        },
        {
            name: 'Gallery',
            value: 'Gallery'
        },
        {
            name: "Lens Chronicles",
            value: "Lens Chronicles"
        }
    ]

    return (
        <>
            <AppBar sx={{ backgroundColor: '#000' }}>
                <Toolbar>
                    <Stack direction="row"
                        spacing={3}
                        sx={{
                            flexGrow: 1,
                            justifyContent: "space-between",
                            alignItems: "center",
                            display: { xs: 'none', md: 'flex' },
                        }}>

                        <Typography className="logo-title" sx={{ cursor: 'pointer' }} onClick={() => setValue("Home")}>
                            MobiGraphy
                        </Typography>
                        <Stack direction="row"
                            spacing={3}
                            sx={{
                                justifyContent: "space-around",
                                alignItems: "center",
                                display: { xs: 'none', md: 'flex' },
                            }}>

                            {
                                menuName.map((item) => {
                                    return (
                                        <>
                                            <Tabs
                                                value={value}
                                                onChange={handleChange}
                                                textColor="inherit"
                                                sx={{
                                                    '& .MuiTabs-indicator': {
                                                        backgroundColor: '#fff'
                                                    },
                                                }}
                                            >
                                                <Tab sx={{
                                                    color: '#fff',
                                                    fontFamily: '"Montserrat",serif',
                                                    fontSize: '14x',
                                                    textTransform: 'none'
                                                }}
                                                    value={item.value}
                                                    label={item.name}
                                                />
                                            </Tabs>
                                        </>
                                    )
                                })

                            }

                        </Stack>
                        <Avatar sx={{ fontFamily: '"Montserrat", serif', color: '#000', backgroundColor: '#fff', fontWeight: 'bold' }}>G</Avatar>
                    </Stack>

                    <MenuComponent menuName={menuName} display={{ xs: 'flex', md: 'none' }} value={value} setValue={setValue} />

                    <Stack direction="row"
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            display: { xs: 'flex', md: 'none' },
                        }}>

                        <Typography className="logo-title" sx={{ cursor: 'pointer' }} onClick={() => setValue("Home")}>
                            MobiGraphy
                        </Typography>

                    </Stack>
                </Toolbar>
            </AppBar >
        </>
    )
}