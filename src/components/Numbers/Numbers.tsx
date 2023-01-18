import React from "react";
import { NumbersList } from "../../definition";

const Numbers = () => {
  return (
    <section className="section" id="numbers">
      <div className="container">
        <div className="section_text">
          <h2>МЫ В ЦИФРАХ</h2>
        </div>
        <div className="row text-center">
          {NumbersList.map((number) => (
            <div
              className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
              key={number.id}
            >
              <div className="numbers_block">
                <div className="numbers_block_number">{number.title}</div>
                <div className="numbers_block_text">{number.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
