import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as Update from "../update.js";

export default class Distro extends Component {
  render() {
    return (
      <div className="distrop">
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

        <div className="showcase">
          <Carousel
            className="carousel"
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            interval={2000}
          >
            <div>
              <img alt="couch" src={require(`./../img/couch.png`)} />
            </div>
            <div>
              <img alt="chairs" src={require(`./../img/chairs.png`)} />
            </div>
            <div>
              <img alt="couch2" src={require(`./../img/couch2.png`)} />
            </div>
            <div>
              <img alt="couch4" src={require(`./../img/couch4.png`)} />
            </div>
          </Carousel>
        </div>

        <div className="explain">
          <h3>{Update.furnitureP_title}</h3>
          {Update.furnitureP_body}
          <br />
          <br />
          <a
            style={{ textDecoration: "none", color: "blue" }}
            href="http://awfco.com"
          >{`Visit American Wholesale Furniture`}</a>
          <h5>{`(note that this is for furniture only, our mattresses are supplied by Magic Sleep)`}</h5>
        </div>
        <div className="footer3">
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
