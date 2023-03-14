import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CustomList from "./pages/CustomList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customlist" element={<CustomList />} />
    </Routes>
  );
};
export default App;
