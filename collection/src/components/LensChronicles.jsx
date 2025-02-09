import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Container, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { heading, textContent } from "./FontStyle";
import { storyImgList } from "./ImageDetails";
import InfoIcon from '@mui/icons-material/Info';
export const LensChronicles = () => {
    return (
        <>
            <Container disableGutters
                sx={{
                    // backgroundColor: '#000',
                    maxWidth: '100vw !important',
                    height: {
                        xs: 'auto',
                        md: 'auto',
                        lg: 'auto'
                    },
                    mt: 7,
                    px: 3,
                    pt: 2
                }}>
                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Typography sx={{
                        color: '#000',
                        fontFamily: '"Montserrat",serif',
                        fontSize: '12px',
                        textTransform: 'none',
                        letterSpacing: '2px',
                        p: 2
                    }}>
                        Capturing Moments, Crafting Stories Through the Viewfinder

                    </Typography>
                </Stack>
                <Stack direction={{ xs: 'column', md: 'column', lg: 'row' }} justifyContent={"space-between"} alignItems={"center"}>
                    {
                        storyImgList.slice(0,4).map((item) => {
                            return (
                                <>
                                    <Card sx={{
                                        maxWidth: 345, mt: 1,backgroundColor:'#000', 
                                        '.MuiCardHeader-title': {
                                            fontFamily: '"Montserrat",serif',
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            fontWeight: 500,
                                            color: '#fff',
                                        },
                                        '.MuiTypography-root.MuiCardHeader-subheader': {
                                            fontFamily: '"Montserrat",serif',
                                            fontSize: '12px',
                                            textTransform: 'none',
                                            fontWeight: 400,
                                            color: '#fff',
                                        },
                                        border: '2px solid #9e9e9e8f'
                                    }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{border:'3px solid #fff'}}>
                                                    <img src={item.img} alt={item.imgName} style={{ height: '50px', width: '50px' }} />
                                                </Avatar>
                                            }
                                            // action={
                                            //     <InfoIcon sx={{ color: '#fff',fontSize:'12px' }} />
                                            // }
                                            title={`${item.imgName}`}
                                            subheader={`${item.date}`}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={item.img}
                                            alt={`${item.imgName}`}
                                            sx={{
                                                 objectFit:'contain',
                                                '&:hover': {
                                                    transform: 'scale(2.5)',
                                                    transition: 'transform 0.3s ease-in-out',
                                                }
                                            }}
                                        />
                                        <CardContent>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography sx={{
                                                    fontFamily: '"Montserrat",serif',
                                                    fontSize: '12x',
                                                    textTransform: 'none',
                                                    textAlign: 'justify',
                                                    color: '#fff',
                                                }}>
                                                    {
                                                        item.description
                                                    }
                                                    {/* <div style={{ color: '#000', float: 'right', cursor: 'pointer' }}>
                                                        {!expanded ? <ExpandMoreIcon onClick={() => setExpanded(!expanded)} /> : <ExpandLessIcon onClick={() => setExpanded(!expanded)} />}
                                                    </div> */}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </>
                            )
                        })
                    }

                </Stack>
                <Stack direction={{ xs: 'column', md: 'column', lg: 'row' }} justifyContent={"space-between"} alignItems={"center"}>
                    {
                        storyImgList.slice(4,8).map((item) => {
                            return (
                                <>
                                    <Card sx={{
                                        maxWidth: 345, mt: 1,backgroundColor:'#000', 
                                        '.MuiCardHeader-title': {
                                            fontFamily: '"Montserrat",serif',
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            fontWeight: 500,
                                            color: '#fff',
                                        },
                                        '.MuiTypography-root.MuiCardHeader-subheader': {
                                            fontFamily: '"Montserrat",serif',
                                            fontSize: '12px',
                                            textTransform: 'none',
                                            fontWeight: 400,
                                            color: '#fff',
                                        },
                                        border: '2px solid #9e9e9e8f'
                                    }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{border:'3px solid #fff'}}>
                                                    <img src={item.img} alt={item.imgName} style={{ height: '50px', width: '50px',border:'1px solid linear-gradient(to right, red, purple)' }} />
                                                </Avatar>
                                            }
                                            title={`${item.imgName}`}
                                            subheader={`${item.date}`}
                                            // action={
                                            //     <InfoIcon sx={{ color: '#fff' }} />
                                            // }
                                        />
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={item.img}
                                            alt={`${item.imgName}`}
                                            sx={{
                                                 objectFit:'contain',
                                                '&:hover': {
                                                    transform: 'scale(2.5)',
                                                    transition: 'transform 0.3s ease-in-out',
                                                   
                                                }
                                            }}
                                        />
                                        <CardContent>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography sx={{
                                                    fontFamily: '"Montserrat",serif',
                                                    fontSize: '12x',
                                                    textTransform: 'none',
                                                    textAlign: 'justify',
                                                    color: '#fff',
                                                }}>
                                                    {
                                                        item.description
                                                    }
                                                    {/* <div style={{ color: '#000', float: 'right', cursor: 'pointer' }}>
                                                        {!expanded ? <ExpandMoreIcon onClick={() => setExpanded(!expanded)} /> : <ExpandLessIcon onClick={() => setExpanded(!expanded)} />}
                                                    </div> */}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </>
                            )
                        })
                    }

                </Stack>
            </Container>
        </>
    )
}