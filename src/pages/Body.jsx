import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startup1 from "./Startup1";
import Startup2 from "./Startup2";

export default function Body() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Startup1 />} />
          <Route path="/presentation" element={<Startup2 />} />
        </Routes>
      </Router>
    </div>
  );
}
