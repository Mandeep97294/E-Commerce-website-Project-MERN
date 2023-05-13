import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>E-COMMERCE</h1>
        <p>This is my sample footer</p>

        <p>Copyrights 2021 &copy; Mandeep Singh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/mandeep97294">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://facebook.com/mandeep97294">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
