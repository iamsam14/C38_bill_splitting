import React from 'react';
import HomeNav from '../components/HomeNav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Home.css';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const { setCurrentUser } = useContext(AppContext);
  return (
    <>
      <HomeNav setCurrentUser={setCurrentUser} />
      <Image
        src={
          'https://res.cloudinary.com/jeanniet89/image/upload/v1599014269/download_evcdkq.png'
        }
        alt="cell scanner"
        fluid
      />
      <Container className="homecontainer">
        <Link to="/billpage">
          <Button id="button" variant="dark" type="submit" block>
            Scan QR Code
          </Button>
        </Link>
        <h3 className="hometitle mb-2 mt-5">Rewards</h3>
        <p className="homeparagraph">
          Thanks for being a member with Cuenta! Check out your rewards for this
          week.
        </p>
        <h6 className="titletwo">Daily Deals</h6>
        <p className="homeparagraph">
          Use these codes for a discount on your bill, or send them to a friend!
        </p>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822890/Cuenta%20App/wings_slqrez.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822891/Cuenta%20App/fries_nlqvbs.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <h4>Local discounts in your area</h4>
        <Carousel className="mb-3 mt-4">
          <Carousel.Item>
            <Link href="./about" target="_blank">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822894/Cuenta%20App/happy_hour_onn8ay.png"
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822894/Cuenta%20App/appetizer_gzbyxb.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <h4>Transaction History</h4>
      </Container>
    </>
  );
};

export default Home;
