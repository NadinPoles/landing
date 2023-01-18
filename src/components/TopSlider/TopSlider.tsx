import React from "react";
import Slider from "react-slick";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SlickPrevArrow from "../SlickArrows/SlickPrevArrow";
import SlickNextArrow from "../SlickArrows/SlickNextArrow";
import Form from "../Form/Form";
import ModalForm from "../ModalForm/ModalForm";

const TopSlider = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };
  return (
    <section className="slider">
      <div id="slider">
        <Slider {...settings}>
          <>
            <div
              className="item"
              style={{
                background: "url('images/slide1.jpg') no-repeat 0 0",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-7">
                    <div className="slider_text">
                      <h1>
                        ИЗБАВЬТЕСЬ ОТ ЛИШНЕГО ВЕСА{" "}
                        <span
                          style={{
                            color: "#ed372d",
                            textDecoration: "underline",
                          }}
                        >
                          БЕЗ СТРАДАНИЙ
                        </span>
                      </h1>
                      <p>
                        Запишись сейчас и получи <strong>30%</strong> скидку на
                        всю продукцию
                      </p>
                      <div>
                        <ModalForm
                          btnClass="zakaz_btn fancybox"
                          modalBtnText="Рассчитать доставку"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          <>
            <div
              className="item"
              style={{
                background: "url('images/slide2.jpg') no-repeat 0 0",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <div className="slider_text" style={{ color: "#fff" }}>
                      <h2>
                        ИЗБАВЬТЕСЬ ОТ ЛИШНЕГО ВЕСА {""}
                        <span
                          style={{
                            color: "#FED34B",
                            textDecoration: "underline",
                          }}
                        >
                          БЕЗ СТРАДАНИЙ
                        </span>
                      </h2>
                      <p>
                        Запишись сейчас и получи <strong>30%</strong> скидку на
                        всю продукцию
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 slider_form_wrap">
                    <div className="form-block text-center">
                      <div>
                        <h2>АКЦИЯ</h2>
                        <p>Можете отправить запрос на сезонную акцию</p>
                      </div>
                      <Form />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Slider>
      </div>
      <div className="slider_arrow text-center">
        <AnchorLink href="#textblock">
          <svg
            width="30"
            height="17"
            viewBox="0 0 30 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 0.5L0 2L15 17L30 2L28.5 0.5L15 14L1.5 0.5Z"
              fill="black"
            />
          </svg>
        </AnchorLink>
      </div>
    </section>
  );
};

export default TopSlider;
