import LazyLoad from "react-lazyload";
import "./App.scss";
import BrickBenefits from "./components/BrickBenefits/BrickBenefits";
import BrickTechnology from "./components/BrickTechnology/BrickTechnology";
import Challenges from "./components/Challenges/Challenges";
import CostPerHouse from "./components/CostPerHouse/CostPerHouse";
import CreatedHousesChart from "./components/CreatedHousesChart/CreatedHousesChart";
import CreatedJobs from "./components/CreatedJobs/CreatedJobs";
import EmmissionsSaved from "./components/EmissionsSaved/EmissionsSaved";
import EntrepreneurImg from "./components/EntrepreneurImg/EntrepreneurImg";
import HeroSection from "./components/HeroSection/HeroSection";
import Impact from "./components/Impact/Impact";
import KeyPartners from "./components/KeyPartners/KeyPartners";
import ScalableEnterprises from "./components/ScalableEnterprises/ScalableEnterprises";
import VideoSlider from "./components/VideoSlider/VideoSlider";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <LazyLoad height={200} offset={0}>
        <KeyPartners />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <EntrepreneurImg />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <BrickTechnology />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <BrickBenefits />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <CostPerHouse />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <ScalableEnterprises />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <VideoSlider />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <CreatedHousesChart />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <CreatedJobs />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <EmmissionsSaved />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <Challenges />
      </LazyLoad>
      <LazyLoad height={200} offset={0}>
        <Impact />
      </LazyLoad>
    </div>
  );
}

export default App;
