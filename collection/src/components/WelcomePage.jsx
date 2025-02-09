import React, { useState } from 'react';
import { Typography, Box, Container, Button, CircularProgress, Grid2} from '@mui/material';
import { textContent } from './FontStyle';
import DirtyLensIcon from '@mui/icons-material/DirtyLens';
import SearchIcon from '@mui/icons-material/Search';
export const WelcomePage = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
        setTimeout(() => {
            setIsLoading(false)
            props.setValue("Gallery")
        }, 3000);
        setIsLoading(true);
    };
    return (
        <>
            <Container disableGutters
                sx={{
                    backgroundImage: `linear-gradient(#0000008c, #000000), url(https://static.vecteezy.com/system/resources/thumbnails/027/596/942/small_2x/sunset-silhouette-of-a-girlgrapher-free-photo.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    maxWidth: '100vw !important'
                }}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                    textAlign="center"
                    sx={{
                        mx: 2,
                    }}
                >
                    <Grid2 sx={{

                    }}>

                        <Typography sx={{ fontFamily: '"Lavishly Yours", serif', fontSize: '50px', fontWeight: 600, letterSpacing: '4px', color: '#fff' }}>
                            Welcome!
                        </Typography>
                        <Typography sx={{ ...textContent, fontSize: '14px', letterSpacing: '4px' }}>
                            to my <DirtyLensIcon sx={{ verticalAlign: 'middle', fontSize: '20px' }} /> Portfolio
                        </Typography>

                    </Grid2>
                    <Grid2 container spacing={2} sx={{
                        color: '#fff'
                    }}>
                        <Grid2>  <Typography sx={{ fontFamily: '"Montserrat", serif', fontSize: '50px', fontWeight: 700, letterSpacing: '4px', color: '#fff' }}>
                            Hi
                        </Typography></Grid2>
                        <Grid2 sx={{
                            mt: 1
                        }}>
                            <Typography sx={{ fontFamily: '"Montserrat", serif', fontSize: '25px', fontWeight: 400, color: '#fff' }}>
                                I’m Gopika
                            </Typography>
                            <Typography sx={{ fontFamily: '"Montserrat", serif', fontSize: '14px', fontWeight: 200, color: '#fff' }}>
                                a react developer.
                            </Typography>

                        </Grid2>
                    </Grid2>
                    <Grid2>
                        <Typography sx={{...textContent,letterSpacing:'2px'}}>
                       Discover how I weave creativity into every pixel - both in my visuals and my codes!
                        </Typography>
                    </Grid2>

                    {isLoading ? <>
                        <CircularProgress size="40px" sx={{ color: '#fff' }} />
                        <SearchIcon sx={{ color: '#fff', marginTop: '-30px' }} />
                    </> : <Button
                        variant="outlined"
                        sx={{
                            color: '#fff',
                            fontFamily: '"Montserrat", serif',
                            fontWeight: 500,
                            letterSpacing: 'normal',
                            my: 1,
                            textAlign: 'justify',
                            fontSize: '14px',
                            borderRadius: '4px',
                            textTransform: 'capitalize',
                            border: '1px solid #fff',
                            transition: 'transform 0.3s ease-in-out', '&:hover': {
                                transform: {
                                    xs: 'scale(1.1)',
                                    md: 'scale(1.2)',
                                    lg: 'scale(1.2)',
                                }
                            }
                        }}
                        onClick={handleClick}
                        size="large"
                    >
                        View My Shots
                    </Button>}



                </Box>
            </Container >
        </>
    );
};


