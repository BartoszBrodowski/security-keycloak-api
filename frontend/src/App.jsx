import { useState } from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Protected from "./components/Protected";
import Public from "./components/Public";

function App() {
  const [isLogin, token] = useAuth();

  return <>{isLogin ? <Protected token={token} /> : <Public />}</>;
}

export default App;
