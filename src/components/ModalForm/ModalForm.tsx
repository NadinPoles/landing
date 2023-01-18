import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "../Form/Form";

interface Props {
  btnClass?: string;
  modalBtnText?: string;
}

const ModalForm = ({ btnClass, modalBtnText }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <span className={btnClass} onClick={handleShow}>
        {modalBtnText}
      </span>
      <Modal show={showModal} onHide={handleClose}>
        <div className="text-center form-block">
          <h2>ФОРМА</h2>
          <p>Можете отправить запрос на сезонную акцию</p>
          <Form />
        </div>
      </Modal>
    </>
  );
};

export default ModalForm;
