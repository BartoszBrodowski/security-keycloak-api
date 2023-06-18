import { useState } from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import Public from "./components/Public";
import Menu from "./components/Menu";

function App() {
  const [isLogin, token] = useAuth();

  return (
    <div>
      {isLogin ? (
        <Routes>
          <Route path="/reviews" element={<Protected token={token} />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Public />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
