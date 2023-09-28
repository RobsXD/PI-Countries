import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Detail, Form, Home, Landing } from "./Views/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/form" element={<Form />} />

        <Route path="/home/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
