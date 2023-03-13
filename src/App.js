import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./pages/Form";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};
export default App;
