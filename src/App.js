import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MapList from "./pages/MapList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maplist" element={<MapList />} />
    </Routes>
  );
};
export default App;
