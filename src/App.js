import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import HelloWorld from "./pages/HelloWorld";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/helloworld" element={<HelloWorld />} />
    </Routes>
  );
};
export default App;
