import "./App.scss";
import BrickTechnology from "./components/BrickTechnology/BrickTechnology";
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
    </div>
  );
}

export default App;
