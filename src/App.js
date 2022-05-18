import { useEffect } from "react";
import "./App.scss";
import Awards from "./components/Awards/Awards";
import BrickBenefits from "./components/BrickBenefits/BrickBenefits";
import BrickTechnology from "./components/BrickTechnology/BrickTechnology";
import Challenges from "./components/Challenges/Challenges";
import CostPerHouse from "./components/CostPerHouse/CostPerHouse";
import CreatedHousesChart from "./components/CreatedHousesChart/CreatedHousesChart";
import CreatedJobs from "./components/CreatedJobs/CreatedJobs";
import EmmissionsSaved from "./components/EmissionsSaved/EmissionsSaved";
import EntrepreneurImg from "./components/EntrepreneurImg/EntrepreneurImg";
import FiredBricksVideo from "./components/FiredBricksVideo/FiredBricksVideo";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Impact from "./components/Impact/Impact";
import KeyPartners from "./components/KeyPartners/KeyPartners";
import LearnMore from "./components/LearnMore/LearnMore";
import ScalableEnterprises from "./components/ScalableEnterprises/ScalableEnterprises";
import VideoSlider from "./components/VideoSlider/VideoSlider";
import "./fonts/css/fontello.css";
import { animateScroll as scroll } from "react-scroll";

function App() {
  useEffect(() => {
    setTimeout(() => scroll.scrollToTop(), 200);
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <KeyPartners />
      <EntrepreneurImg />
      <BrickTechnology />
      <BrickBenefits />
      <CostPerHouse />
      <ScalableEnterprises />
      <VideoSlider />
      <CreatedHousesChart />
      <CreatedJobs />
      <EmmissionsSaved />
      <Challenges />
      <Impact />
      <FiredBricksVideo />
      <LearnMore />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
