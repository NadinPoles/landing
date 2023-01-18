import React from "react";
import ModalForm from "../ModalForm/ModalForm";
import { AddinationalServicesList } from "../../definition";

const AddinationalServices = () => {
  return (
    <section className="section" id="add">
      <div className="container">
        <div className="section_text">
          <h2>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <table className="add_table">
              <tbody>
                {AddinationalServicesList.map((service) => (
                  <tr key={service.id}>
                    <td>
                      <div className="add_note">{service.title}</div>
                      {service.text}
                    </td>
                    <td>{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center">
          <ModalForm
            btnClass="fancybox zakaz_btn_inverse"
            modalBtnText="Хочу больше"
          />
        </div>
      </div>
    </section>
  );
};

export default AddinationalServices;
