import React from "react";
import Form from "../Form/Form";

const Sale = () => {
  return (
    <section className="section" id="sale_wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 content sale_text">
            <h2>Начало сезонной распродажи *</h2>
            <p>
              Мы рады Вам сообщить, что теперь каждую субботу и каждое
              воскресение в ресторане &ldquo;День дружной семьи&rdquo;
            </p>
            <p>Позвоните нам на любой номер:</p>
            <p>
              <img src="images/velcom.png" alt="velcom" width="20" />
              &nbsp; <a href="tel:+375296202264">+375 (29) 620-22-64</a>
            </p>
            <p>
              <a href="tel:+375297206667">
                <img src="images/mts.png" alt="mts" width="20" height="20" />
                &nbsp; +375 (29) 720-66-67
              </a>
            </p>
            <p>&nbsp;</p>
            <p className="note">* Действительна до конца этого месяца</p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <div className="text-center" id="sale">
              <h3>СУПЕР АКЦИЯ</h3>
              <p>Можете отправить запрос на сезонную акцию</p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
