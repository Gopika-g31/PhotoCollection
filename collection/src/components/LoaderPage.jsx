import React from "react";
import { Box, Stack, Typography } from '@mui/material'
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';

export const LoaderPage = () => {
    return (
        <>
            <Box className="loader-box"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: 'flex',
                    height: '100vh'
                }}
            >
                <Stack direction={'column'} spacing={1} alignItems={'center'}>
                <MonochromePhotosIcon sx={{ fontSize: '45px' }} />
                <Typography sx={{fontFamily:'"The Nautigal", serif',fontSize:'24px',letterSpacing:'3px',fontWeight:'bolder'}}>Gopika Photography</Typography>
                </Stack>
                
            </Box>
        </>
    )
}