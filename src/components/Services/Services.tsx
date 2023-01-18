import React, { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import { ServicesList } from "../../definition";
const servicePerRow = 3;

const Services = () => {
  const [next, setNext] = useState(servicePerRow);
  const handleMoreServices = () => {
    setNext(next + servicePerRow);
  };
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section_text">
          <h2>НАШИ УСЛУГИ</h2>
          <p>Запишись сейчас и получи скидку на всю продукцию</p>
        </div>
        <div className="row">
          {ServicesList?.slice(0, next)?.map((service: any) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
              key={service.id}
            >
              <div className="services_block">
                <span className="services_block_a">
                  <span className="services_block_img">
                    <span className="services_block_overlay">
                      <ModalForm btnClass="fancybox" modalBtnText="Заказать" />
                    </span>
                    {service.image && (
                      <img
                        src={`/images/${service.image}`}
                        alt={service.title}
                      />
                    )}
                  </span>
                  <span className="services_block_title">{service.title}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        {next < ServicesList?.length && (
          <button className="morebtn" onClick={handleMoreServices}>
            Показать еще
          </button>
        )}
      </div>
    </section>
  );
};

export default Services;
