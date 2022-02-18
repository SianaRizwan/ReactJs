import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetails from "./components/ItedDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <h1>sjbdsnfjsbf</h1>
          <About/>
        </Nav>

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ItemDetails/:itemId" element={<ItemDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
