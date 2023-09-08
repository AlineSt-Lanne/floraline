import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startup1 from "./Startup1";
import Startup2 from "./Startup2";
import LoginSignin from "./LoginSignin";
import Login from "./Login";

export default function Body() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Startup1 />} />
          <Route path="/presentation" element={<Startup2 />} />
          <Route path="/loginorsignin" element={<LoginSignin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
