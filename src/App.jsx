import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";

import MainPage from "./Components/MainPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
