import React from "react";
import { AdvantagesList } from "../../definition";
import ModalForm from "../ModalForm/ModalForm";

const Advantages = () => {
  return (
    <section className="section" id="advantages">
      <div className="container">
        <div className="section_text">
          <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
          <p>Запишись сейчас и получи скидку</p>
        </div>
        <div className="row">
          {AdvantagesList.map((advantage) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
              key={advantage.id}
            >
              <div className="advantages_block text-center">
                <div className="advantages_block_img">
                  {advantage.image && (
                    <img
                      src={`images/${advantage.image}`}
                      alt={advantage.title}
                    />
                  )}
                </div>
                <div className="advantages_block_title">{advantage.title}</div>
                <div className="advantages_block_text">{advantage.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <ModalForm
            btnClass="zakaz_btn fancybox"
            modalBtnText="Хочу попробовать"
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
