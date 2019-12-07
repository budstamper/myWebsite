import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as Update from "../update.js";

export default class Sleep extends Component {
  render() {
    return (
      <div className="sleepp">
        <div className="navH">
          <div className="nav">
            <div className="logo" onClick="location.href = '/'"></div>
            <Link to="/" className="home">
              {"Home"}
            </Link>
            <Link to="/distributor" className="distro">
              {"Furniture"}
            </Link>
            <Link to="/sleep" className="sleep">
              {"Mattresses"}
            </Link>
            <a className="con" href="#contact">
              {"Contact"}
            </a>
          </div>
        </div>

        <div className="showcase3">
          <Carousel
            className="carousel3"
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            interval={2000}
          >
            <div className="matts2">
              <img
                className="matimg"
                alt="mattresses"
                src="https://i.postimg.cc/HkLqNcZ6/thumbnail-6.jpg"
              />
            </div>
            <div className="matts2">
              <img
                className="matimg"
                alt="Magic Sleep Logo"
                src="https://i.postimg.cc/ZqGX0fTQ/thumbnail-5.jpg"
              />
            </div>
            <div className="matts2">
              <img
                className="matimg"
                alt="Display Bed"
                src="https://i.postimg.cc/bJ1WnQrw/thumbnail-9.jpg"
              />
            </div>
          </Carousel>
        </div>

        <div className="prices">
          <h3 className="p1">{`Prices`}</h3>
          <p>{`Green Dream (Economy mattress, great for kids' room or guest room)`}</p>
          <p>
            {`Twin Set:      $175`}
            <br />
            {`Full Set:        $225`}
            <br />
            {`Queen Set:   $275`}
            <br />
            {`King Set:       $400`}
          </p>
          <p>{`Granada 2-sided (Perfect if you want a firm mattress)`}</p>

          <p>
            {`Twin Set:      $350`}
            <br />
            {`Full Set:        $400`}
            <br />
            {`Queen Set:   $450`}
            <br />
            {`King Set:       $625`}
          </p>

          <p>
            {`Midnight Dream 2-sided (Our best seller.  It's a pillow top)`}
          </p>
          <p>
            {`Twin Set:      $400`}
            <br />
            {`Full Set:        $525`}
            <br />
            {`Queen Set:   $600`}
            <br />
            {`King Set:       $800`}
          </p>
        </div>

        <div className="explain2">
          <h3>{Update.mattress_title}</h3>
          {Update.mattress_body}
          <br />
          <br />
          {/* <a
            style={{ textDecoration: "none", color: "blue" }}
            href="https://www.magicsleepmattress.com/our-mattresses"
          >{`Visit Magic Sleep Mattresses`}</a> */}
        </div>
        <div className="footer2">
          <span>{`© ${new Date().getFullYear()} Northern Traders Furniture`}</span>
          <div>
            <div className="social">
              <a
                className="face"
                href="https://www.Facebook.com/Northerntraders"
              >
                {" 1& "}
              </a>
            </div>
            <div className="social2">
              <a
                className="face2"
                href="https://www.instagram.com/northerntraders/"
              >
                {" 1& "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
