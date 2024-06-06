import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Categories from "./categories/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories/>} />
    </Routes>
  );
}

export default App;
