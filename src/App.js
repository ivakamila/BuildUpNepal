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
      <KeyPartners />
      <EntrepreneurImg />
      <BrickTechnology />
      <BrickBenefits />
      <CostPerHouse />
    </div>
  );
}

export default App;
