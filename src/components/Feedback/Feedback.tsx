import React from "react";
import Form from "../Form/Form";

const Feedback = () => {
  return (
    <section className="section text-center feedback" id="feedback_wrap">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="section_text">
              <h2>ОБРАТНАЯ СВЯЗЬ</h2>
              <p>
                Написать сообщение можете воспользовавшись формой ниже. Или
                связаться с нами по номеру &nbsp;
                <a href="tel:+375296202264">+375 (29) 620-22-64</a>
              </p>
            </div>
            <div id="feedback">
              <Form submitButton="Отправить сообщение" showMessage={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
