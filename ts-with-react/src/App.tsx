import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Practice from "./pages/Practice";
import Matzip from "./pages/Matzip";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/lecture" element={<Lecture></Lecture>}></Route>
        <Route path="/practice" element={<Practice></Practice>}></Route>
        <Route path="/practice/matzip" element={<Matzip></Matzip>}></Route>
      </Routes>
    </>
  );
}

export default App;
