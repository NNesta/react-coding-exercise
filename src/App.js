import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Custom from "./pages/Custom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/custom" element={<Custom />} />
    </Routes>
  );
};
export default App;
