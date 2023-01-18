import React from "react";
import { SocialList } from "../../definition";

const Social = () => {
  return (
    <section className="section social" id="social">
      <div className="container">
        <div className="section_text">
          <h2>СОЦИАЛЬНЫЕ СЕТИ</h2>
          <p>Можете следить за последними новостями в наших группах</p>
        </div>
        {SocialList.map((social) => (
          <a key={social.id} href={social.link} target="_blank">
            {social.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Social;
