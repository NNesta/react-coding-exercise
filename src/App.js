import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import WorkingAPI from "./pages/WorkingAPI";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work-api" element={<WorkingAPI />} />
    </Routes>
  );
};
export default App;
