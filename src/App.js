import { Routes, Route, Navigate } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App bg-dark vh-100">
      <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/stocks/:symbol" element={<Stocks />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

    </div>
  );
}

export default App;
