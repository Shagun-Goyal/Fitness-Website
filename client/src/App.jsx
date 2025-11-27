import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "../pages/hero.jsx";

function App() {
  return (
    <Router>
      <Routes>
      <Route path = "/" element = {<Hero/>} />
      </Routes>
    </Router>
  );
}

export default App;