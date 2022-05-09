import LazyLoad from "react-lazyload";
import "./App.scss";
import BrickBenefits from "./components/BrickBenefits/BrickBenefits";
import BrickTechnology from "./components/BrickTechnology/BrickTechnology";
import CostPerHouse from "./components/CostPerHouse/CostPerHouse";
import CreatedHousesChart from "./components/CreatedHousesChart/CreatedHousesChart";
import EmmissionsSaved from "./components/EmissionsSaved/EmissionsSaved";
import EntrepreneurImg from "./components/EntrepreneurImg/EntrepreneurImg";
import HeroSection from "./components/HeroSection/HeroSection";
import KeyPartners from "./components/KeyPartners/KeyPartners";
import ScalableEnterprises from "./components/ScalableEnterprises/ScalableEnterprises";
import VideoSlider from "./components/VideoSlider/VideoSlider";

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
      <LazyLoad height={200} offset={100}>
        <ScalableEnterprises />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <VideoSlider />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <CreatedHousesChart />
      </LazyLoad>
      {/* <LazyLoad height={200} offset={100}>
        <EmmissionsSaved />
      </LazyLoad> */}
    </div>
  );
}

export default App;
