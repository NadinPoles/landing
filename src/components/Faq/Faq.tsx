import React from "react";
import { Accordion } from "react-accordion-ts";
import "react-accordion-ts/src/panel.css";
import ModalForm from "../ModalForm/ModalForm";
import { FaqList } from "../../definition";

const Faq = () => {
  const items = FaqList.map((faq, index) => ({
    title: (
      <div className="question">
        {index + 1}. {faq.title}
        <span className="question_arrow">
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 0.5L0 2L8 10L16 2L14.5 0.5L8 7L1.5 0.5Z"
              fill="black"
            />
          </svg>
        </span>
      </div>
    ),
    content: <div className="answer">{faq.text}</div>,
    open: false,
  }));
  return (
    <section className="section" id="question">
      <div className="container">
        <div className="section_text">
          <h2>ВОПРОСЫ И ОТВЕТЫ</h2>
          <p>
            На Ваши вопросы отвечают квалифицированные специалисты. <br />
            Или напишите на адрес на{" "}
            <a href="mailto:info@site.by">info@site.by</a>
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="question_wrapper">
              <Accordion items={items} duration={300} multiple={false} />
            </div>
          </div>
        </div>
        <div className="question_text">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <h2>НЕ НАШЛИ ОТВЕТ НА ВОПРОС?</h2>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <div className="question_text_inner">
                <p>Позвоните нам или закажите звонок:</p>
                <a href="tel:+375296202264">+375 (29) 620-22-64</a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <p>Можете написать нам здесь:</p>
              <ModalForm
                btnClass="zakaz_btn fancybox"
                modalBtnText="Задать свой вопрос"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
