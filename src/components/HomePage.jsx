import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React, { useState } from "react";
import '../assets/HomePage.css'
import Sunset from '../images/sunset.png'
import ChillyFlw from '../images/whtFlw.jpg'
import Cat from '../images/cat.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import uniquMoments from '../images/pondicherry.jpg';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { StoryPage } from "./StoryPage";
import Gallery from "./Gallery";
import { Nav, Row} from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const HomePage = (props) => {
    const [showStrPage, setShowStrPage] = useState(false);
    const [eventKey, setEventKey] = useState('home');
    const onHandlePage=()=>{
        setShowStrPage(!showStrPage);
        setEventKey('story');
    }
    const imageList = [
        {
            imgName: 'Scenic Views',
            img: Sunset,
            description: 'Capturinng the beauty of natures lansscapes and horizons.'
        },
        {
            imgName: 'Petal Palette',
            img: ChillyFlw,
            description: 'Floral wonders in vivid color, showcasing the elegance of nature.'
        },
        {
            imgName: 'Furry Friends',
            img: Cat,
            description: 'A celebration of pets and wildlife, full of personality and charm'
        },
        {
            imgName: 'Unique Moments',
            img: uniquMoments,
            description: 'Snapshots of rare, unforgettable experience and scenes'
        }
    ]

    const handleChange = (page) => {
        if(page === 'story'){
            setShowStrPage(false);
        }    
        setEventKey(page);
    };
    return (

        <>
            <Box className={"homepage-wrapper mx-3"}>
                <Row className="shadow-eff ">
                    <div className="heading-text my-2 ">My <MonochromePhotosIcon sx={{ fontSize: '50px', marginBottom: '15px' }} /> Collection</div>
                </Row>
                <Nav justify variant="underline" className="my-3" defaultActiveKey={eventKey}>
                    <Nav.Item >
                        <Nav.Link eventKey={'home'} onClick={() => handleChange('home')}>
                            <HomeIcon className="mx-1" sx={{ marginBottom: '8px' }} />
                            Home</Nav.Link>
                    </Nav.Item >
                    <Nav.Item >
                        <Nav.Link eventKey={'story'} onClick={() => handleChange('story')}>
                            <AutoStoriesIcon className="mx-1" sx={{ marginBottom: '8px' }} />
                            Moments Unfolded</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={'gallery'} onClick={() => handleChange('gallery')}>
                            <CollectionsIcon className="mx-1" sx={{ marginBottom: '8px' }} />
                            Gallery</Nav.Link>
                    </Nav.Item>
                </Nav>
                {
                    eventKey === 'home' ?  <>
                        <h3 className="sub-heading-text my-3">Top Pics by Theme</h3>
                        <h3 className="sub-text text-left py-1">
                            Each image holds a special moment, and I’m excited to share them with you. Enjoy your time here, and I hope my work inspires you as much as these moments inspired me!
                        </h3>
                        <ImageList className="img-list" cols={4}>
                            {
                                imageList.map((ele) => {
                                    return (
                                        <ImageListItem>
                                            <img
                                                srcSet={`${ele.img}`}
                                                src={`${ele.img}`}
                                                alt={`${ele.imgName}`}
                                            />
                                            <ImageListItemBar
                                                title={`${ele.imgName}`}
                                                subtitle={`${ele.description}`}
                                                actionIcon={
                                                    <IconButton
                                                        sx={{ color: 'red' }}
                                                        aria-label={`info about ${'fytt6767'}`}
                                                    >
                                                        <FavoriteIcon />
                                                    </IconButton>
                                                }
                                            />
                                        </ImageListItem>
                                    )
                                })
                            }
                        </ImageList>
                        <Box className="see-more-box"><span className="see-more-text">See More Moments</span></Box>
                        <Box className="see-more-box" onClick={onHandlePage}> <ExpandCircleDownIcon className="expand-icon" sx={{ fontSize: '5em', padding: '15px' }} /></Box>
                    </> :
                    eventKey === 'story' || showStrPage ? <StoryPage/> : <Gallery/> 
                }
               
            </Box>
          
          

        </>

    );
}