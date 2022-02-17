import "./App.css";

import Nav from "./components/Nav";
import MmoList from "./components/MmoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MmoFullList from "./components/MmoFullList";
import LiveGiveAway from "./components/LiveGiveAway";


function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path='/' element={<MmoList/>}></Route>
      <Route path='/MmoNews' element={<MmoList/>}></Route>
      <Route path='/MmoFullList' element={<MmoFullList/>}></Route>
      <Route path='/LiveGiveAway' element={<LiveGiveAway/>}></Route>
    </Routes>
    
     
     
        

      
    </div>
  );
}

export default App;