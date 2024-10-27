import '../assets/StoryPage.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import CarouselCaption from "react-bootstrap/esm/CarouselCaption";
import Dog from '../images/Dogs.jpg';
import Monkey from '../images/monkey.jpg';
import HideCat from '../images/hidecat.jpg'
import { Row, Col, Card } from 'react-bootstrap'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Sleepingdog from '../images/sleepdog.jpg'
import SkyColor from '../images/skycolor.jpg'
import Sunsetwindow from '../images/sunsetwindow.jpg'
import Terracesunset from '../images/terracesunset.jpg'
import Sunset from '../images/sunset.png'

export const StoryPage = () => {

  const homeTownimg = [
    {
      img: SkyColor
    },
    {
      img: Sunsetwindow
    },
    {
      img: Terracesunset
    },
    {
      img: Sunset
    }

  ]

  return (
    <>
      <Row className='d-flex mx-3'>
        <Col lg={6}>
          <h3 className="sub-heading-text my-3">Behind Every Photo, a Story Unfolds</h3>
          <div><p className='sub-text'>These Voiceless creatures are speaking volumes!</p></div>
          <Row>
            <Carousel style={{ height: '1000px', width: '1000px', borderRadius: '10px' }} fade
              nextIcon={<NavigateNextIcon sx={{ fontSize: '100px' }} />}
              prevIcon={<NavigateBeforeIcon sx={{ fontSize: '100px' }} />}
            >
              <CarouselItem>
                <div>
                  <img className="carousel-img" alt='pic' src={Dog} />
                </div>
                <CarouselCaption>
                  <h3>When your friends tell you, "Don't look too obvious..."</h3>
                  <p>but you both look anyway</p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem >
                <div>
                  <img className="carousel-img" alt='pic'src={Monkey} />
                </div>
                <CarouselCaption>
                  <h3>Hey sibling...</h3>
                  <p>We found you in this dustbin</p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem  >
                <div>
                  <img className="carousel-img" alt='pic' src={HideCat}/>
                </div>
                <CarouselCaption>
                  <h3>When you're trying to be sneaky...</h3>
                  <p>
                    but your hiding sport is way too obvious
                  </p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem  >
                <div>
                  <img className="carousel-img" src={Sleepingdog} alt='pic' />
                </div>
                <CarouselCaption>
                  <h3>When your humans put out the rangoli...</h3>
                  <p>
                    but the real masterpiece is my naptime!
                  </p>
                </CarouselCaption>
              </CarouselItem>
            </Carousel>
          </Row>
        </Col>
        <Col lg={6}>
          <h3 className="sub-heading-text my-3">Nature's Canvas : Transformative Sky</h3>
          <div><p className='sub-text'>I love witnessing these transistion - each color tells its own story, painting emotions across the sky.</p></div>
          <Row xs={1} md={2} className="g-2">
            {homeTownimg.map((ele, idx) => (
              <Col key={idx} >
                <Card className='sky-card'>
                  <Card.Img variant="top" src={ele.img} style={{ height: '495px', objectFit: 'cover' }} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      
    </>
  )
}
