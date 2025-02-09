import React from 'react';
import { Typography, Container, Card, CardHeader, Tab, Tabs,Stack } from '@mui/material';
import { textContent } from './FontStyle';
import { galleryList } from './ImageDetails';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FilterBAndWIcon from '@mui/icons-material/FilterBAndW';
import PetsIcon from '@mui/icons-material/Pets';
import LandscapeIcon from '@mui/icons-material/Landscape';

export const Gallery = (props) => {
    const [filter, setFilter] = React.useState({ val: 'Scenic View', filterBy: 'scenic' });
    const handleChange = (event, val, filterBy) => {
        setFilter({ val, filterBy });
    };

    const tabInfo = [
        {
            label: 'Scenic View', value: 'Scenic View', filterBy: 'scenic'
        },
        {
            label: 'Petal Palette', value: 'Petal Palette', filterBy: 'Flw'
        },
        {
            label: 'Furry Friends', value: 'Furry Friends', filterBy: 'furry'
        },
        {
            label: 'Black & White', value: 'Black and White', filterBy: 'bw'
        }
    ]

    const showImg = (start, end) => {
        return (
            <>
                <Stack direction={{ sx: "column", md: "row" }} spacing={5} sx={{ my: 3 }}>
                    {
                        galleryList.filter((itm) => itm.catergory === filter?.filterBy).slice(start, end).map((item) => {
                            return (
                                <>
                                    <Card
                                        sx={{
                                            backgroundImage: `url(${item.img})`,
                                            height: {
                                                xs: '500px',
                                                md: '300px',
                                                lg: '300px'
                                            },
                                            width: {
                                                xs: '100%',
                                                md: '300px',
                                                lg: '300px'
                                            },
                                            my: 3,
                                            backgroundSize: 'cover',
                                            cursor: 'pointer',
                                            border: '1px solid #9E9E9E',
                                            borderRadius: '5px',
                                            transition: 'transform 0.3s ease-in-out', '&:hover': {
                                                transform: {
                                                    xs: 'scale(1.1)',
                                                    md: 'scale(1.2)',
                                                    lg: 'scale(1.2)',
                                                },
                                                '& .MuiCardHeader-root': {
                                                    display: 'block'
                                                }
                                            }
                                        }}
                                    >
                                        <CardHeader sx={{
                                            display: 'none',
                                            '& .MuiCardHeader-title': {
                                                ...textContent,
                                                fontWeight: 300,
                                                fontSize: '12px',
                                            },

                                        }}

                                            title={item.title}
                                        // subheader={item.description}
                                        />


                                    </Card>

                                </>
                            )
                        })
                    }
                </Stack >
            </>
        )
    }
    return (
        <>
            <Container disableGutters
                sx={{
                    backgroundColor: '#fff',
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
                {/* <Stack direction={"row"} >
                <CustomBreadCrumb page={[{pageName:"Home"},{ pageName: "Gallery" }]} />
            </Stack> */}
                <Stack direction="row"
                    spacing={3}
                    sx={{
                        justifyContent: "space-around",
                        alignItems: "center",

                    }}>

                    {
                        tabInfo.map((item) => {
                            return (
                                <>
                                    <Tabs
                                        value={filter?.val}
                                        onChange={(e, val, filter) => handleChange(e, item.value, item.filterBy)}
                                        textColor="inherit"
                                        sx={{
                                            '& .MuiTabs-indicator': {
                                                backgroundColor: '#000',
                                            },
                                        }}
                                    >
                                        <Tab sx={{
                                            color: '#000',
                                            fontFamily: '"Montserrat",serif',
                                            fontSize: '14x',
                                            textTransform: 'none',
                                            display: {
                                                xs: 'none',
                                                md: 'flex',
                                                lg: 'flex'
                                            }
                                        }}
                                            value={item.value}
                                            label={item.label}
                                            icon={item.label === 'Scenic View' ? <LandscapeIcon /> :
                                                item.label === 'Petal Palette' ? <LocalFloristIcon /> :
                                                    item.label === "Furry Friends" ? <PetsIcon /> :
                                                        <FilterBAndWIcon />
                                            }
                                            iconPosition="start"
                                        />
                                        <Tab title={item.label} sx={{
                                            color: '#000',
                                            fontFamily: '"Montserrat",serif',
                                            fontSize: '14x',
                                            textTransform: 'none',
                                            display: {
                                                xs: 'flex',
                                                md: 'none',
                                                lg: 'none'
                                            },
                                            '.Mui-selected':{
                                                textDecoration:'underline',
                                            }
                                        }}
                                            value={item.value}
                                            icon={item.label === 'Scenic View' ? <LandscapeIcon /> :
                                                item.label === 'Petal Palette' ? <LocalFloristIcon /> :
                                                    item.label === "Furry Friends" ? <PetsIcon /> :
                                                        <FilterBAndWIcon />
                                            }
                                        />
                                    </Tabs>
                                </>
                            )
                        })

                    }

                </Stack>
                {showImg(0, 5)}
                {showImg(5, 10)}
                {showImg(10, 15)}
                {showImg(15, 20)}



            </Container>
            <Stack direction={'column'} spacing={1} alignItems={'center'} sx={{ backgroundColor: '#000', color: '#fff', width: 'auto', padding: '20px 10px' }}>
                <Typography sx={{ ...textContent, fontSize: '14px' }}>
                    All the images in my portfolio are captured using different mobile devices, including Samsung, Moto, and Redmi. Each shot is carefully enhanced using Snapseed, Lightroom, and PicsArt, bringing out the colors, details, and emotions I want to convey. Through my lens and edits, I aim to turn everyday moments into captivating visual stories.
                </Typography>
            </Stack>
        </>
    );
};


