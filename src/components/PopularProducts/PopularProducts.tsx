import React from "react";
import Slider from "react-slick";
import { PopularProductsList } from "../../definition";
import SlickPrevArrow from "../SlickArrows/SlickPrevArrow";
import SlickNextArrow from "../SlickArrows/SlickNextArrow";
import ModalForm from "../ModalForm/ModalForm";

const PopularProducts = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
    <section className="section" id="popular_products">
      <div className="container">
        <div className="section_text">
          <h2>ПОПУЛЯРНЫЕ ПРОДУКТЫ</h2>
          <p>Запишись сейчас и получи скидку на всю продукцию</p>
        </div>
        <div id="popular">
          <Slider {...settings}>
            {PopularProductsList.map((product) => (
              <div className="item" key={product.id}>
                <div className="popular_block text-center">
                  <div className="popular_block_img">
                    {product.image && (
                      <img
                        src={`/images/${product.image}`}
                        alt={product.title}
                      />
                    )}
                  </div>
                  <div className="popular_block_title">{product.title}</div>
                  {product.price && (
                    <div className="popular_block_price">
                      {product.price} <span>руб.</span>
                    </div>
                  )}
                  <div>
                    <ModalForm
                      btnClass="zakaz_btn fancybox"
                      modalBtnText="Заказать"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
