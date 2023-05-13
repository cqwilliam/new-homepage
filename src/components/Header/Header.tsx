import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="div_supp">
      <div className="contend">
        <img
          className="contend-img"
          src="../src/assets/image3-web.jpg"
          alt=""
        />
        {/* <img
          className="contend-img"
          src="../src/assets/image3-mobile.jpg"
          alt=""
        /> */}
        <div className="contend_text">
          <h1>The Bring Future of Web 3.0?</h1>
          <div className="text_font">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise
            </p>
            <button className="button_read">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="contend2">
        <h1>New</h1>
        <div>
          <h3>Hydrogen Vs Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <hr />
        <div>
          <h3>The Downsides of Al Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand Al image
            generation?
          </p>
        </div>
        <hr />
        <div>
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding bt VC firms is down 50% YOY. We take a look at what
            that means
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
