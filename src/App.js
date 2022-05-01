import "./App.scss";
import EntrepreneurImg from "./components/EntrepreneurImg/EntrepreneurImg";
import HeroSection from "./components/HeroSection/HeroSection";
import KeyPartners from "./components/KeyPartners/KeyPartners";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <KeyPartners />
      <EntrepreneurImg />
    </div>
  );
}

export default App;
