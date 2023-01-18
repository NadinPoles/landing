import React from "react";
import ModalForm from "../ModalForm/ModalForm";
import { StepsList } from "../../definition";

const Steps = () => {
  return (
    <section className="section" id="steps">
      <div className="container">
        <div className="section_text">
          <h2>ЭТАПЫ ЗАКАЗА</h2>
          <p>Запишись сейчас и получи скидку на всю продукцию</p>
        </div>
        {StepsList.map((step, index) => (
          <div className="row steps_row" key={step.id}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 steps_iteration">
              {step.image ? (
                <img src={`/images/${step.image}`} alt={step.title} />
              ) : (
                index + 1 + "."
              )}
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-7">
              <div className="steps_title">{step.title}</div>
              <div className="steps_text">{step.text}</div>
            </div>
          </div>
        ))}
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

export default Steps;
