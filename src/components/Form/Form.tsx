import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  submitButton?: string;
  showMessage?: boolean;
}

const Form = ({
  submitButton = "Отправить запрос",
  showMessage = false,
}: Props) => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const validateOptions = {
    name: { required: "Это поле необходимо заполнить" },
    phone: {
      required: "Это поле необходимо заполнить",
      pattern: {
        value: /^[0-9+-]+$/,
        message: "В номере должно быть только цифры",
      },
      minLength: {
        value: 9,
        message: "В номере должно быть не менее 9 цифр",
      },
    },
  };
  const onSubmit = (data: any) => {
    setShow(true);
    reset();
  };

  return (
    <>
      {!show && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <input
              type="text"
              placeholder="Имя"
              className={errors.name ? "wrong-field" : ""}
              {...register("name", validateOptions.name)}
            />
            {errors.name && (
              <p className="error">
                <>{errors.name?.message}</>
              </p>
            )}
            <input
              type="text"
              placeholder="Номер телефона"
              className={errors.phone ? "wrong-field" : ""}
              {...register("phone", validateOptions.phone)}
            />
            {errors.phone && (
              <p className="error">
                <>{errors.phone?.message}</>
              </p>
            )}
            {showMessage && (
              <textarea
                placeholder="Сообщение"
                {...register("message")}
              ></textarea>
            )}
            <input type="submit" value={submitButton} />
          </>
        </form>
      )}
      {show && (
        <div className="mail-status">Ваше сообщение успешно отправлено!</div>
      )}
    </>
  );
};

export default Form;
