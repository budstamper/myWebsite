import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Parallax, Background } from "react-parallax";
import * as Update from "../update.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="homeCont">
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
        <div>
          {/* <Parallax strength={500}>
            <Background className="parallax"> </Background>
            <div style={{ height: "100vh" }}>asdf</div>
          </Parallax> */}
          <div className="parallax" style={{background:`url('${Update.home_logo}')`,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"}}></div>
        </div>
        <div className="reveal">
          <div className="revealA"> </div>
        </div>

        <div className="special">
          SPECIALIZING IN<br></br> <span className="furn">FURNITURE</span>
        </div>
        <div className="services">
          <div className="servlefth">
            <div className="servleft" style={{background:`url('${Update.antiques_img}')`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className="downleft">
              <span className="title">{`Antiques`}</span>
              <br />
              <span className="titlea">{Update.antiques_body}</span>
            </div>
          </div>

          <div className="servcenth">
            <div className="servcent" style={{background:`url('${Update.furniture_img}')`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className="downcent">
              <span className="title">{`Furniture`}</span>
              <br />
              <span className="titlea">{Update.furniture_body}</span>
            </div>
          </div>

          <div className="servrighth">
            <div className="servright" style={{background:`url('${Update.mattress_img}')`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className="downright">
              <span className="title">{`Mattresses`}</span>
              <br />
              <div className="titlea">
                <div>{Update.mattresses_body}</div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="contact">
          <h1 className="mcon">{`Contact Us`}</h1>
          <div className="contact1">
            <div className="mapouter">
              <iframe
                title="mymap"
                className="mframe"
                src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=2801%20North%20old%20us%20highway%2031%20Rochester%2C%20IN+(Northern%20Traders)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
            <br />
            <div className="bossH">
              <div className="boss"></div>
              <div className="address">
                Northern Traders
                <br />
                2801 N Old US 31 N<br />
                Rochester, IN 46975
                <br />
                (574) 223-5248
                <br />
                Open Mon-Sat 9-5 Closed Sundays
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
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
