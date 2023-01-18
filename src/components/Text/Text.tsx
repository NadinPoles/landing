import React from "react";
import ModalForm from "../ModalForm/ModalForm";

const Text = () => {
  return (
    <section className="section" id="textblock">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 order-md-2 order-lg-2 order-xl-2">
            <img className="content_img" src="/images/image.jpg" alt="Фото" />
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 order-md-1 order-lg-1 order-xl-1 content">
            <h2>Отметить свой праздник сможет у нас</h2>
            <p>
              Ресторан сделан в виде традиционной помещичьей усадьбы. Дубовые
              столы, охотничьи трофеи на бревенчатых стенах, русская печь и
              живая музыка отлично передаёт очарование светлых традиций
              старинного трактира.
            </p>
            <p>
              Вы на несколько часов почувствуете себя дворянином. Звоните и
              бронируйте столик уже сегодня
            </p>
            <p>
              <ModalForm
                btnClass="fancybox form_btn"
                modalBtnText="Хочу больше"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;
