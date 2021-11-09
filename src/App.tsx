import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyLayout from "./components/layout/MyLayout";

import "antd/dist/antd.css";
import Home from "./components/Home";
import People from "./components/People";

function App() {
  return (
    <Router>
      <MyLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </MyLayout>
    </Router>
  );
}

export default App;
