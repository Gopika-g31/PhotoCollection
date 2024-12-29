import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from '@mui/material';
import { subheading } from './FontStyle';
import { galleryList } from './ImgList';

export default function Gallery() {
    const [value, setValue] = React.useState('Scenic View');

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const showGallery = (filterBy) => {
        return (
            <>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    useFlexGap
                    sx={{ flexWrap: 'wrap', mx: 10 }}>

                    <ImageList cols={3}>

                        {
                            galleryList.filter((item) => item.catergory === filterBy).map((ele) => {
                                return (

                                    <>
                                        <ImageListItem 
                                        sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.2)',}}}
                                        >
                                            <img
                                                src={ele.img}
                                                alt={ele.imgName}
                                                style={{
                                                    width: '500px',
                                                    height: 'auto',
                                                    objectFit: 'cover',
                                                    cursor: 'pointer',

                                                }} />
                                           <ImageListItemBar
                                           sx={{...subheading,background: filterBy !== 'scenic' ?'rgb(158 158 158 / 30%)':''}}
                                           position='top'
                                           title={ele.title}
                                           subtitle={ele.description}
                                           />
                                        </ImageListItem>


                                    </>
                                )
                            })
                        }
                    </ImageList>
                </Stack>
            </>
        )
    }
    return (
        <>
            <Box>
                <Stack direction="row" justifyContent={"center"}>
                    <Typography sx={subheading}>
                        Gallery
                    </Typography>
                </Stack>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    {tabInfo.map((tab) => (
                        <Tab sx={{
                            ...subheading,
                            textTransform: 'none',
                        }} key={tab.value} label={tab.label} value={tab.value} />
                    ))}
                </Tabs>
                {value === 'Scenic View' && showGallery('scenic')}
                {value === 'Petal Palette' && showGallery('Flw')}
                {value === 'Furry Friends' && showGallery('furry')}
                {value === 'Black and White' && showGallery('bw')}
            </Box></>
    );
}
