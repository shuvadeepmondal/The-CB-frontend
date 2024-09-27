import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/utilis/Navbar";
import About from "./components/about/About";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
