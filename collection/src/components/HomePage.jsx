import React from "react";
import { Box, IconButton, Stack, Typography, Divider,Card, CardMedia,CardContent, Avatar,CardHeader} from "@mui/material";
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import InstagramIcon from '@mui/icons-material/Instagram';
import { bodyText, Heading, subheading, ThinText } from "./FontStyle";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { storyImgList,featuredImageList } from "./ImgList";
import Gallery from "./Gallery";
export const HomePage = () => {

    const [expanded, setExpanded] = React.useState(false);

 
    return (
        <>
            <Box className="home-page-box"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: 'flex',
                }}
            >
                <Stack direction={'column'} spacing={1} alignItems={'center'}>
                    <Typography sx={Heading}>My Collection</Typography>
                    <Typography sx={ThinText}>
                        Each image holds a special moment, and I’m excited to share them with you. Enjoy your time here, and I hope my work inspires you as much as these moments inspired me!
                    </Typography>

                </Stack>
            </Box>
            <Divider>
                <MonochromePhotosIcon />
            </Divider>
            <Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Box>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ margin: '5px 10px 5px 10px' }}>
                            <Box>
                                <Typography sx={subheading}>
                                    What I love to capture?
                                </Typography>
                                <Typography sx={{ ...bodyText, mt: 1 }}>
                                    I find joy in preserving the small, yet extraordinary moments: the intricate patterns of insects, the warm glow of sunsets, and the ever-changing colors of the sky.
                                    I often turn my lens to the natural world—forest landscapes, towering trees, and the tranquil rhythm of nature. Through photography, I can freeze these moments and share their stories with others.
                                </Typography>
                                <Typography sx={{ ...subheading, textAlign: 'center', mt: 2 }}>
                                    Story behind the lens
                                </Typography>
                                <Typography sx={{ ...ThinText, textAlign: 'center', mb: 1 }}>
                                    A moment frozen in time, capturing emotions, beauty, and wonder through the lens.
                                </Typography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>

                                    {
                                        storyImgList.map((item) => (

                                            <Card sx={{
                                                maxWidth: 345, mt: 1,
                                                '.MuiCardHeader-title': {
                                                    fontFamily: '"Newsreader", serif',
                                                    fontSize: '16px',
                                                    fontWeight: 500
                                                },
                                                '.MuiTypography-root.MuiCardHeader-subheader': {
                                                    fontFamily: '"Newsreader", serif',
                                                    fontSize: '14px',
                                                    fontWeight: 400
                                                },
                                                border: '2px solid #9e9e9e8f'
                                            }}>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar aria-label="">
                                                            <img src={item.img} alt={item.imgName} style={{ height: '50px', width: '50px' }} />
                                                        </Avatar>
                                                    }
                                                    // action={
                                                    //     <IconButton aria-label="settings">
                                                    //         <ShareIcon />
                                                    //     </IconButton>
                                                    // }
                                                    title={`${item.imgName}`}
                                                    subheader={`${item.date}`}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    height="240"
                                                    image={item.img}
                                                    alt={`${item.imgName}`}
                                                />
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Typography sx={bodyText}>
                                                            {
                                                                expanded ? item.description : item.description.slice(0, 190) + '...'
                                                            }
                                                            <div style={{ color: '#000', float: 'right', cursor: 'pointer' }}>
                                                                {!expanded ? <ExpandMoreIcon onClick={() => setExpanded(!expanded)} /> : <ExpandLessIcon onClick={() => setExpanded(!expanded)} />}
                                                            </div>
                                                        </Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        ))
                                    }
                                    


                                </Stack>
                            </Box>
                            <Box>
                                <Typography sx={subheading}>
                                    Featured Moments

                                </Typography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ margin: '5px 10px 5px 10px' }}>
                                    {
                                        featuredImageList.slice(0, 2).map((ele) => {
                                            return (
                                                <Card sx={{
                                                    width: 500, height: '325px', mt: 1, transition: 'transform 0.5s ease-in-out', cursor: 'pointer', backgroundImage: `url(${ele.img})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', border: '2px solid #9e9e9e8f',
                                                    '&:hover': {
                                                        transform: 'scale(1.1)'
                                                    }
                                                }}>

                                                    <CardContent>
                                                        <Typography sx={{ ...bodyText, color: '#fff' }}>
                                                            {ele.imgName}
                                                        </Typography>

                                                    </CardContent>



                                                </Card>
                                            )
                                        })
                                    }
                                </Stack>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ margin: '5px 10px 5px 10px' }}>
                                    {
                                        featuredImageList.slice(2, 4).map((ele) => {
                                            return (
                                                <Card sx={{
                                                    width: 500, height: '325px', mt: 1, transition: 'transform 0.5s ease-in-out', cursor: 'pointer', backgroundImage: `url(${ele.img})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', border: '2px solid #9e9e9e8f',
                                                    '&:hover': {
                                                        transform: 'scale(1.1)'
                                                    }
                                                }}>

                                                    <CardContent>
                                                        <Typography sx={{ ...bodyText, color: '#fff' }}>
                                                            {ele.imgName}
                                                        </Typography>
                                                    </CardContent>


                                                </Card>
                                            )
                                        })
                                    }
                                </Stack>
                            </Box>

                        </Stack>


                    </Box>
                </Stack>
            </Box>
            <Stack justifyContent={'center'} alignItems={'center'} sx={{ mt: 2 }}>
                <IconButton sx={{ fontSize: '30px' }}><ExpandCircleDownIcon />

                </IconButton>
                <Typography sx={ThinText}>See More Moments</Typography>
            </Stack>
           <Gallery/>



            <Divider sx={{ mb: 2 }}></Divider>
            <Stack direction={'column'} spacing={1} alignItems={'center'}>
                <Typography sx={ThinText}>Follow me on <InstagramIcon sx={{ fontSize: '15px', verticalAlign: 'middle' }} /></Typography>
                <Typography sx={ThinText}>
                    © Copyright 2024 .All rights reserved.
                </Typography>

            </Stack>
        </>
    )
}