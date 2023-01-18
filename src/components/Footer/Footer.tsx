import React from "react";
import { FooterSocialList } from "../../definition";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="footer_text text-center">
                <p>СВЯЗЬ С НАМИ</p>
                <p>
                  <img src="/images/phone.png" alt="phone" />
                  <a href="tel:+375296202264">+375 (29) 620-22-64</a>
                </p>
                <p>
                  г. Минск, Розы Люксембург ул., д. 82, оф. 302 <br />
                  <a href="mailto:info@site.by">info@site.by</a>
                </p>
                <div>
                  {FooterSocialList.map((social) => (
                    <a
                      className={social.title}
                      href={social.link}
                      target="_blank"
                      key={social.id}
                    >
                      <img
                        src={`/images/${social.image}`}
                        alt={social.title}
                        width="40"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
