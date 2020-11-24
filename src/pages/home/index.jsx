import React from "react";
import Application from "../../components/application";
import Calendar from "../../components/calendar";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HomeMovies from "../../components/homeMovies";
import News from "../../components/news";
import Carousel from "../../components/carousel";
export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Calendar />
      <HomeMovies />
      <News />
      <Application />
      <Footer />
    </div>
  );
}
