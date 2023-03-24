import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";

import MainPage from "./Components/MainPage";
import Sports from "./Components/Sports";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/soccer" element={<Sports />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
