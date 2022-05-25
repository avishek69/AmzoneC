import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
