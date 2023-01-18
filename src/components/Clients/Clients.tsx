import React from "react";
import Slider from "react-slick";
import { ClientsList } from "../../definition";
import SlickPrevArrow from "../SlickArrows/SlickPrevArrow";
import SlickNextArrow from "../SlickArrows/SlickNextArrow";

const Clients = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="section" id="clients_wrap">
      <div className="container">
        <div className="section_text">
          <h2>НАШИ КЛИЕНТЫ</h2>
          <p>
            Ресторан сделан в виде традиционной помещичьей усадьбы. Дубовые
            столы, охотничьи трофеи на <span>бревенчатых стенах</span>
          </p>
        </div>
        <div id="clients">
          <Slider {...settings}>
            {ClientsList.map(
              (client) =>
                client.image && (
                  <div className="item" key={client.id}>
                    <div className="clients_block text-center">
                      <img src={`/images/${client.image}`} alt="Клиент" />
                    </div>
                  </div>
                )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
