import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login";
import Job from "./components/job";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/jobs" element={<Job/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
