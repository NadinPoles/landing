import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TopSlider from "./components/TopSlider/TopSlider";
import Text from "./components/Text/Text";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import Advantages from "./components/Advantages/Advantages";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Sale from "./components/Sale/Sale";
import Steps from "./components/Steps/Steps";
import Clients from "./components/Clients/Clients";
import Faq from "./components/Faq/Faq";
import Tarifs from "./components/Tarifs/Tarifs";
import Gallery from "./components/Gallery/Gallery";
import TextEditor from "./components/TextEditor/TextEditor";
import Numbers from "./components/Numbers/Numbers";
import TabsBlock from "./components/TabsBlock/TabsBlock";
import AddinationalServices from "./components/AddinationalServices/AddinationalServices";
import Social from "./components/Social/Social";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import MapBlock from "./components/MapBlock/MapBlock";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <TopSlider />
      <Text />
      <PopularProducts />
      <Advantages />
      <Reviews />
      <Services />
      <Sale />
      <Steps />
      <Clients />
      <Faq />
      <Tarifs />
      <Gallery />
      <TextEditor />
      <Numbers />
      <TabsBlock />
      <AddinationalServices />
      <Social />
      <Feedback />
      <MapBlock />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
