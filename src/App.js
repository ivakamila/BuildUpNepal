import LazyLoad from "react-lazyload";
import "./App.scss";
import BrickBenefits from "./components/BrickBenefits/BrickBenefits";
import BrickTechnology from "./components/BrickTechnology/BrickTechnology";
import CostPerHouse from "./components/CostPerHouse/CostPerHouse";
import EntrepreneurImg from "./components/EntrepreneurImg/EntrepreneurImg";
import HeroSection from "./components/HeroSection/HeroSection";
import KeyPartners from "./components/KeyPartners/KeyPartners";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <LazyLoad height={200} offset={100}>
        <KeyPartners />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <EntrepreneurImg />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <BrickTechnology />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <BrickBenefits />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <CostPerHouse />
      </LazyLoad>
    </div>
  );
}

export default App;
