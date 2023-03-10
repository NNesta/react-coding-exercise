import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import StateComponent from "./components/StateComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stateprops" element={<StateComponent />} />
    </Routes>
  );
};
export default App;
