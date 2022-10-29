import { Routes, Route } from "react-router-dom";
import Practice from "./screens/Practice";
import "./App.css";
import Rank from "./screens/Rank";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Practice />} />
        <Route path="rank" element={<Rank />} />
      </Routes>
    </div>
  );
}

export default App;
