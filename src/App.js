import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Captures from "./pages/Captures";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clickme" element={<Captures />} />
    </Routes>
  );
};
export default App;
