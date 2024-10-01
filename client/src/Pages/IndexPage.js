import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Hero from '../Components/Hero.js';
import Features from '../Components/Features.js';
// import Carousel from '../Components/Carousel.js';
import Campaign from '../Components/Campaign';
import CardContainer from '../Components/CardContainer.js';
import Banner from '../Components/Banner.js';
import GetStarted from '../Components/GetStarted.js';
import '../css/LandingPage.css';

function Header() {
  const { userInfo } = useContext(UserContext);
  return (
    <div>
      <h1>Index Page Working!</h1>
      <h2>
        {userInfo
          ? `Welcome ${userInfo.fname} ${userInfo.lname}`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}


function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Features />
      {/* <Carousel /> */}
      <Campaign />
      <CardContainer />
      <Banner />
      <GetStarted />
    </div>
  );
}


function MainPage() {
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
}

export default MainPage;
