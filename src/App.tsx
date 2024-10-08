import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/utilis/Navbar";
import About from "./components/about/About";
import Team from "./components/team/Team";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event" element={<Team />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
