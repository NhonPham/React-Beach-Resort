import React from "react";
import Hero from ".././components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Hero>
          <Banner
            title="luxurious rooms"
            subtitle="deluxe room starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              out rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />

      </>
    );
  }
}
