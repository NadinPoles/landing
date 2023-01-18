import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ModalForm from "../ModalForm/ModalForm";
import { TabsBlockList } from "../../definition";

const TabsBlock = () => {
  return (
    <section className="section" id="tabs">
      <div className="container">
        <div className="section_text">
          <h2>НАЦИОНАЛЬНОЕ БЛЮДО</h2>
        </div>
        <Tabs>
          <TabList>
            {TabsBlockList.map((tab) => (
              <Tab key={tab.id}>{tab.title}</Tab>
            ))}
          </TabList>
          {TabsBlockList.map((tab) => (
            <TabPanel key={tab.id}>
              <div className="tab__content_inner">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    {tab.image && (
                      <img src={`images/${tab.image}`} alt="Фото" />
                    )}
                  </div>
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <h3>{tab.subtitle}</h3>
                    <p>{tab.text}</p>
                    <ModalForm
                      btnClass="zakaz_btn fancybox"
                      modalBtnText="Расскажите еще"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabsBlock;
