import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import DecFlw from '../images/decFlw.jpg';
import CottonFlw1 from '../images/cottonFlw1.jpg';
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
//FLW images
import PumkinFlw from '../images/pumkinFlw.jpg';
import GoldenFlw from '../images/oldenFlw.jpg';
import RedRoseFlw from '../images/redRoseFlw.jpg';
import VioletFlw from '../images/violetFlw.jpg';
import Jasmine from '../images/jasmine.jpg';
import PinkFlw from '../images/pinkFlw.jpg';
//Scenic View
import Farm from '../images/farm.jpg';
import FarmHouse from '../images/farmhouse.jpg';
import Lake from '../images/lake.jpg';
import HeartSignal from '../images/heartsignal.jpg';
import SriviTemple from '../images/srivitemple.jpg';
import SivaTemple from '../images/sivatemple.jpg';
import LightUp from '../images/lightup.jpg';
import RainPot from '../images/rain.jpg';
//Furry Frds
import Kitten from '../images/kitten.jpg';
import Sleepingdog from '../images/sleepdog.jpg';
import LteMonkey from '../images/littleMonkeys.jpg';
import Horse from '../images/horse.jpg';
import Butterfly from '../images/ywbutterfly.jpg';
import Bird from '../images/WhtBird.jpg';
import Dog from '../images/tcsdog.jpg';
import Cat from '../images/catflw.jpg';
import { Footer } from "./Footer";


const Gallery = () => {
    const itemData = [
        {
            img: DecFlw,
            title: 'December Flower',
            catergory: 'Flw'
        },
        {
            img: CottonFlw1,
            title: 'Cotton Flower',
            catergory: 'Flw'
        },
        {
            img: Jasmine,
            title: 'Jasmine Flower',
            catergory: 'Flw'
        },
        {
            img: Bird,
            title: 'trafic lig',
            catergory: 'furry'
        },

        {
            img: VioletFlw,
            title: 'Yellow Flower',
            catergory: 'Flw'
        },
        {
            img: GoldenFlw,
            title: 'Golden Flower',
            catergory: 'Flw'
        },
        {
            img: PumkinFlw,
            title: 'Pumkin Flower',
            catergory: 'Flw'
        },
        {
            img: Sleepingdog,
            title: 'trafic lig',
            catergory: 'furry'
        },

        //scenic view
        {
            img: SriviTemple,
            title: 'Farm',
            catergory: 'scenic'
        },
        {
            img: Farm,
            title: 'Farm',
            catergory: 'scenic'
        },
        {
            img: LightUp,
            title: 'trafic lig',
            catergory: 'scenic'
        },
        {
            img: FarmHouse,
            title: 'Farm House',
            catergory: 'scenic'
        },
        {
            img: PinkFlw,
            title: 'Table Rose Flower',
            catergory: 'Flw'
        },
        {
            img: RedRoseFlw,
            title: 'Red Rose Flower',
            catergory: 'Flw'
        },

        {
            img: SivaTemple,
            title: 'trafic lig',
            catergory: 'scenic'
        },
        {
            img: RainPot,
            title: 'trafic lig',
            catergory: 'scenic'
        },
        //Furry Frds
        {
            img: Kitten,
            title: 'trafic lig',
            catergory: 'furry'
        },
        {
            img: LteMonkey,
            title: 'trafic lig',
            catergory: 'furry'
        },
        {
            img: Horse,
            title: 'trafic lig',
            catergory: 'furry'
        },
        {
            img: Butterfly,
            title: 'trafic lig',
            catergory: 'furry'
        },

        {
            img: Dog,
            title: 'trafic lig',
            catergory: 'furry'
        },
        {
            img: Cat,
            title: 'trafic lig',
            catergory: 'furry'
        },
        {
            img: Lake,
            title: 'Lake',
            catergory: 'scenic'
        },
        {
            img: HeartSignal,
            title: 'trafic lig',
            catergory: 'scenic'
        },

    ];
    const [eventKey, setEventKey] = React.useState('all');

    const handleChange = (newValue) => {
        setEventKey(newValue);
    };

    const filterBy = eventKey === 'petal-palette' ? itemData.filter((ele) => ele.catergory === 'Flw') :
        eventKey === 'scenic-views' ? itemData.filter((ele) => ele.catergory === 'scenic') : eventKey === 'furry-friends' ? itemData.filter((ele) => ele.catergory === 'furry') : itemData
    return (
        <>
            <Container fluid className="p-0 my-3" style={{ backgroundColor: 'black' }}>
                <Nav justify variant="underline" className="my-3" defaultActiveKey={eventKey}>
                    <Nav.Item>
                        <Nav.Link className="text-white" eventKey={'all'} onClick={() => handleChange('all')}>All Category</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-white" eventKey={'petal-palette'} onClick={() => handleChange('petal-palette')}>Petal Palette</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-white" eventKey={'scenic-views'} onClick={() => handleChange('scenic-views')}>Scenic Views</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-white" eventKey="furry-friends" onClick={() => handleChange('furry-friends')}>Furry Friends</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Row className="mx-1 my-5">
                    <ImageList cols={eventKey === "all" ? 6 : 4}>
                        {
                            filterBy.map((ele) => {
                                return (
                                    <ImageListItem>
                                        <img
                                            srcSet={`${ele.img}`}
                                            src={`${ele.img}`}
                                            alt={`${ele.title}`}
                                        />
                                        <ImageListItemBar
                                           // title={`${ele.title}`}
                                            //subtitle={`${ele.description}`}
                                        />
                                    </ImageListItem>
                                )
                            })
                        }
                    </ImageList>
                </Row>
                <Footer/>
            </Container>
           
        </>
    )
}

export default Gallery;