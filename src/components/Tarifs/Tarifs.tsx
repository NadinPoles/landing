import React from "react";
import ModalForm from "../ModalForm/ModalForm";
import { TarifsList } from "../../definition";

const Tarifs = () => {
  return (
    <section className="section" id="tarifs_wrap">
      <div className="container">
        <div className="section_text">
          <h2>ТАРИФНЫЕ ПЛАНЫ</h2>
          <p>Ресторан сделан в виде традиционной помещичьей усадьбы</p>
        </div>
        <div className="row">
          {TarifsList.map((tarif) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
              key={tarif.id}
            >
              <div className="tarif_block text-center">
                <div className="tarif_block_title">{tarif.title}</div>
                <div className="tarif_block_img">
                  {tarif.image && (
                    <img src={`/images/${tarif.image}`} alt={tarif.title} />
                  )}
                </div>
                <div>{tarif.text}</div>
                <div className="tarif_price_wrap">
                  {tarif.price && (
                    <span className="tarif_price">
                      {tarif.price} <span>руб</span>
                    </span>
                  )}
                  {tarif.oldprice && (
                    <span className="tarif_old_price">
                      {tarif.oldprice} <span>руб</span>
                    </span>
                  )}
                </div>
                <div>
                  <ModalForm
                    btnClass="fancybox zakaz_btn"
                    modalBtnText="Выбираю этот тариф"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
