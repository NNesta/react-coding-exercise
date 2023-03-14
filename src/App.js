import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import RenderJSON from "./pages/RenderJSON";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="render-json" element={<RenderJSON />} />
    </Routes>
  );
};
export default App;
