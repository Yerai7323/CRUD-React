import "./App.css";
import Read from "./components/read";
import Update from "./components/update";
import Create from "./components/create";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
          <Route exact path="/" element={<Navigate to="/read" />}/> 
        </Routes>
        <Routes>
          <Route exact path="/create" element={<Create/>} />
        </Routes>
        <Routes>
          <Route exact path="/read" element={<Read/>} />
        </Routes>
        <Routes>
          <Route exact path="/update" element={<Update/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
