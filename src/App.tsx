import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className={"bg-clr text-white"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="*" element={<h1>No Data Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
