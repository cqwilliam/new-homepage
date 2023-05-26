import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="cards_group">
      <div className="card">
        <img src="/reviving_retro.jpg" alt="" />
        <div>
          <h1>01</h1>
          <h3 className="subtitle_card">Reviving Retro PCS</h3>
          <p>What happens when old PCs are given modern upgrates?</p>
        </div>
      </div>
      <div className="card">
        <img src="/top_laptops.jpg" alt="" />
        <div>
          <h1>02</h1>
          <h3 className="subtitle_card">Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets</p>
        </div>
      </div>
      <div className="card">
        <img src="/growth_gaming.jpg" alt="" />
        <div>
          <h1>03</h1>
          <h3 className="subtitle_card">The Growth of Gaming</h3>
          <p>How tge pandemic has sparked fresh opportunites</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
