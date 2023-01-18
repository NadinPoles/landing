import React from "react";
import ModalForm from "../ModalForm/ModalForm";

const TextEditor = () => {
  return (
    <section className="section" id="editor">
      <div className="container text_editor content">
        <h2 className="text-center">ТЕКСТОВЫЙ РЕДАКТОР</h2>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1">
            &nbsp;
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
            <p>
              Что будет, если вы оправдаете ожидания посетителя? У вас хороший
              сервис, хорошая кухня, хороший интерьер.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
            &nbsp;
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <p>
              <iframe
                src="https://www.youtube.com/embed/W3xfn-xb-GE"
                width="300"
                height="400"
              ></iframe>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1">
            &nbsp;
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <p>
              У вас хороший сервис, хорошая кухня, хороший интерьер. Гость
              восторженно расскажет о вас знакомым? Нет. Скорее всего, он просто
              забудет, ведь человек пришел за борщом и получил борщ.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <p>
              Да, он зайдет к вам, если окажется в том же районе. Но соберет ли
              он друзей для целенаправленного визита? Для этого нужно превзойти
              его ожидания.
            </p>
          </div>
        </div>
        <div className="text-center">
          <ModalForm
            btnClass="fancybox zakaz_btn"
            modalBtnText="Проконсультироваться"
          />
        </div>
      </div>
    </section>
  );
};

export default TextEditor;
