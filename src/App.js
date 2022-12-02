import "./App.scss";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import HowitWorks from "./components/HowitWorks";
import WhyTender from "./components/WhyTender";
import Faq from "./components/Faq";
import JoinJourney from "./components/JoinJourney";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App" id="App">
      <div className="container">
        <Banner />
        <HowitWorks />
        <WhyTender />
        <Faq />
      </div>
      <JoinJourney />
      <Footer />
    </div>
  );
}

export default App;
