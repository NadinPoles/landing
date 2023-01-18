import React from "react";
import Slider from "react-slick";
import { ReviewsList } from "../../definition";
import SlickPrevArrow from "../SlickArrows/SlickPrevArrow";
import SlickNextArrow from "../SlickArrows/SlickNextArrow";

const Reviews = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="section" id="reviews_wrap">
      <div className="container">
        <div className="section_text">
          <h2>ЧТО ДУМАЮТ О НАС</h2>
        </div>
        <div id="reviews">
          <Slider {...settings}>
            {ReviewsList.map((review) => (
              <div className="item" key={review.id}>
                <div className="reviews_block text-center">
                  <div className="reviews_block_img">
                    {review.image && (
                      <img src={`/images/${review.image}`} alt={review.title} />
                    )}
                  </div>
                  <div className="reviews_block_text">{review.text}</div>
                  <div className="reviews_block_title">
                    <span>{review.title}</span>
                    {review.position && <>, {review.position}</>}
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

export default Reviews;
